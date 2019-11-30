const invalidMatchSignal = new Error();

function makeProxyThrower(input) {
  return new Proxy(input, {
    get(target, prop, receiver) {
      if (prop in target) {
        const result = Reflect.get(target, prop, receiver);
        if (typeof result === 'object' && result !== null) {
          return makeProxyThrower(result);
        }
        return result;
      }
      throw invalidMatchSignal;
    },
  });
}

export const renderMatch = (input, ...patterns) => {
  // default
  let safeInput = { error: '' };

  // handle objects
  if (input && typeof input === 'object' && Object.keys(input)[0].length) {
    safeInput = input;
  }

  const param = makeProxyThrower(safeInput);

  for (const pattern of patterns) { // eslint-disable-line no-restricted-syntax
    try {
      return pattern(param);
    } catch (e) {
      if (e !== invalidMatchSignal) {
        throw e;
      }
    }
  }
  
  return new Error("Match failed! Check the matche object.");
}