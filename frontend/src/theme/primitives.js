import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/native';
import { ScrollView as Scroll } from 'react-native';
import { space, layout, typography, flexbox, color, variant } from 'styled-system';
import spinner from '../assets/images/spinner.gif';

/*
 * Box Shadow
 */
const BoxShadow = styled.View(
  { boxShadow: '0px 0px 13px 2px rgba(0, 0, 0, 0.3)' },
  space,
  layout,
  flexbox,
);

/*
 * Card
 */
export const Card = ({ children, ...props }) => (
  <BoxShadow
    style={{ width: '100%', maxWidth: 300, minHeight: 425, borderRadius: 24 }}
    {...props} // eslint-disable-line react/jsx-props-no-spreading
  >
    <Box p={3} bg="white" alignItems="center" style={{ height: '100%', borderRadius: 24 }}>
      {children}
    </Box>
  </BoxShadow>
);

Card.propTypes = { children: PropTypes.node.isRequired };

/*
 * ScrollView
 */
export const ScrollView = ({ children, ...props }) => (
  <Scroll
    {...props} // eslint-disable-line react/jsx-props-no-spreading
    contentContainerStyle={{ flexGrow: 1 }}
  >
    {children}
  </Scroll>
);

ScrollView.propTypes = { children: PropTypes.node.isRequired };

/*
 * Image
 */
export const Img = styled.Image(space, layout, flexbox);

/*
 * Box
 */
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

/*
 * Text
 */
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

/*
 * Touch
 */
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

/*
 * Input
 */
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

/*
 * Button
 */
export const Button = ({ title, onPress, style, ...props }) => (
  <Touch
    onPress={onPress}
    {...props} // eslint-disable-line react/jsx-props-no-spreading
    style={style}
  >
    <Text variant={props.variant === 'primary' ? 'buttonPrimary' : 'buttonSecondary'}>{title}</Text>
  </Touch>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
  variant: PropTypes.string,
};

Button.defaultProps = {
  variant: 'primary',
};

/*
 * Loading
 */
export const Loading = ({ width = 75, height = 75, ...props }) => (
  <Img {...props} height={height} width={width} source={{ uri: spinner }} /> // eslint-disable-line react/jsx-props-no-spreading
);

Loading.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
