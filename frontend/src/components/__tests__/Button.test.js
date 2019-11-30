import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { render } from '@testing-library/react-native';
import { Button } from '../../theme';

test('<Button /> renders', () => {
  const { queryByTestId } = render(<Button testID="button">Hey</Button>);

  expect(queryByTestId('button')).toBeTruthy();
});
