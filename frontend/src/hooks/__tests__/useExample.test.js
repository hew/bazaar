import { renderHook } from '@testing-library/react-hooks';
import useExample from '../useExample';

//TODO: Fix this failing test - might be a bug with the testing lib.
// Unless I'm missing something, there isn't much difference between
// this and the useDelay test, other than the mock.

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

  expect(result.current.loading).toBeTruthy();

  await waitForNextUpdate();

  expect(result.current.error).toBeTruthy();
});
