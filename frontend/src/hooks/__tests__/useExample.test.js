import { renderHook } from '@testing-library/react-hooks';
import useExample from '../useExample';

//TODO: Fix this failing test - might be a bug with the testing lib

jest.mock('safe-await', () => {
  const response = {
    data: {
      id: 'matt@beep.com',
    },
  };

  return {
    default: jest.fn(() => response),
  };
});

test('🚀 Amplify should properly fetch data', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useExample());

  console.log(result.current, "current")

  expect(result.current.loading).toBeTruthy();

  await waitForNextUpdate();

  console.log(result.current, "current")

  expect(result.current.error).toBeTruthy();
});
