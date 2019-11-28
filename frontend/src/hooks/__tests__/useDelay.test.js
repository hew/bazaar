import { renderHook, act } from '@testing-library/react-hooks';
import useDelay from '../useDelay';

test('🚀 useDelay()', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useDelay());

  expect(result.current).toBeFalsy();

  await waitForNextUpdate();

  expect(result.current).toBeTruthy();
});
