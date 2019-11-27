import { renderHook, act } from '@testing-library/react-hooks';
import useActExample from '../useActExample';

test('🚀 useActExample()', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useActExample());

  expect(result.current.acted.loading).toBeTruthy();

  act(() => {
    result.current.operation();
  });

  await waitForNextUpdate();

  expect(result.current.acted.data).toBeTruthy();
});
