import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { render } from '@testing-library/react-native';
import { Button } from '../../theme';

test('<Button /> renders', () => {
  const { getByTestId } = render(<Button testID="button" px={1}>Hey</Button>);

  console.log(getByTestId('button'))

  expect(getByTestId('button')).toHaveStyle(`paddingLeft`);
});
