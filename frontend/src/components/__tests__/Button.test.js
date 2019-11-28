import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { render } from '@testing-library/react-native';
import { Button } from '../../theme';

test('<Button /> renders', () => {
  const { queryByTestId } = render(<Button testID="not-empty">Hey</Button>);

  expect(queryByTestId('not-empty')).toBeTruthy();
});
