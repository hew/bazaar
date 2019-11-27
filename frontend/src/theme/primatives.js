import React from 'react';
import styled from '@emotion/native';
import { ScrollView as Scroll } from 'react-native';
import { space, layout, typography, flexbox, color, variant } from 'styled-system';

import spinner from '../assets/images/spinner.gif';

const BoxShadow = styled.View(
  { boxShadow: '0px 0px 13px 2px rgba(0, 0, 0, 0.3)' },
  space,
  layout,
  flexbox,
);

export const Card = ({ children, ...props }) => (
  <BoxShadow style={{ width: '100%', maxWidth: 300, minHeight: 425, borderRadius: 24 }} {...props}>
    <Box p={3} bg="white" alignItems="center" style={{ height: '100%', borderRadius: 24 }}>
      {children}
    </Box>
  </BoxShadow>
);

export const ScrollView = ({ children, ...props }) => (
  <Scroll {...props} contentContainerStyle={{ flexGrow: 1 }}>
    {children}
  </Scroll>
);

export const Img = styled.Image(space, layout, flexbox);

export const Box = styled.View(
  { display: 'flex' },
  space,
  layout,
  color,
  typography,
  flexbox,
  variant({
    scale: 'box',
  }),
);

export const Text = styled.Text(
  {
    fontFamily: 'SFProText-Regular',
    color: 'white',
  },
  space,
  layout,
  color,
  typography,
  flexbox,
  variant({
    scale: 'text',
  }),
);

export const Touch = styled.TouchableOpacity(
  {},
  space,
  layout,
  typography,
  flexbox,
  variant({
    scale: 'button',
  }),
);

export const Input = styled.TextInput(
  {},
  space,
  layout,
  color,
  typography,
  flexbox,
  variant({
    scale: 'input',
  }),
);

Input.defaultProps = {
  variant: 'primary',
};

export const Button = ({ title, onPress, style, ...props }) => (
  <Touch onPress={onPress} {...props} style={style}>
    <Text variant={props.variant === 'primary' ? 'buttonPrimary' : 'buttonSecondary'}>{title}</Text>
  </Touch>
);

Button.defaultProps = {
  variant: 'primary',
};

export const Loading = ({ width = 75, height = 75, ...props }) => {
  return (
     <Img {...props} height={height} width={width} source={{ uri: spinner }} />
  );
};

