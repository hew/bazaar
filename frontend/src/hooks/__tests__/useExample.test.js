import { renderHook } from '@testing-library/react-hooks';
import useExample from '../useExample';

jest.mock('../../aws/amplify', () => {
  // Pretty simple - return a fake user
  const response = {
    data: {
      id: 'matt@beep.com',
    },
  };

  return {
    __esModule: true,
    GRAPH: jest.fn(() => response),
  };
});

test('🚀 Amplify should properly fetch data', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useExample());

  expect(result.current.loading).toBeTruthy();

  await waitForNextUpdate();

  expect(result.current.data.id).toBeTruthy();
});
