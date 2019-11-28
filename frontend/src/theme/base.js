import downArrow from '../assets/icons/down-arrow';
import { buttonsBase } from './variant-base';

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 96];

// Colors
const burntOrange = '#9c4b1f';
const green = '#4a7819';
const teal = '#19782b';
const white = '#fff';
const gray = '#5b656d';
const lightGray = '#ACC6E5';
const opaque = 'rgba(255, 255, 255, 0.15)';

const fonts = {
  body: "SFProText-Regular, 'Helvtica Neue', sans-serif",
  heading: "SFProText-Bold, 'Helvtica Neue', sans-serif",
  monospace: 'monospace',
};

const fontWeights = {
  body: '400',
  heading: '800',
  bold: '800',
  messageHeading: '400',
};
const lineHeights = {
  body: '15px',
  messageHeading: '24px',
  messageBody: '19px',
  heading: '36px',
};

const colors = {
  // main palate
  primary: green,
  secondary: teal,
  tertiary: burntOrange,
  // text, utils
  text: gray,
  textWhite: white,
  lightGray,
  gray,
  white,
  opaque,
};

/*
  Helpers
 */

// Typography
const heading = {
  fontFamily: fonts.heading,
  fontWeight: fonts.bold,
  color: colors.tertiary,
  lineHeight: lineHeights.heading,
};

export default {
  /* 
     ✨ ---- BASE THEME ---- ✨
   */
  colors,
  space,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  /* 
     ✨ ---- VARIANTS ---- ✨

     NOTE: theme values (like colors) cannot be referenced by string
     (ie: 'secondary'). Reference the base object (ie: colors.secondary).
   */
  text: {
    buttonPrimary: {
      color: colors.textWhite,
      fontWeight: fontWeights.heading,
      textTransform: 'uppercase',
    },
    buttonSecondary: {
      color: colors.secondary,
      fontWeight: fontWeights.heading,
      textTransform: 'uppercase',
    },
    h1: {
      ...heading,
      fontSize: fontSizes[5],
    },
    h2: {
      ...heading,
      fontSize: fontSizes[4],
    },
    h3: {
      ...heading,
      fontSize: fontSizes[3],
    },
    h4: {
      ...heading,
      fontSize: fontSizes[2],
    },
    h5: {
      ...heading,
      fontSize: fontSizes[1],
    },
    h6: {
      ...heading,
      fontSize: fontSizes[0],
    },
    p: {
      color: colors.text,
      fontFamily: fonts.body,
      fontWeight: fontWeights.body,
      lineHeight: lineHeights.body,
    },
    timeCode: {
      color: colors.textWhite,
      fontSize: fontSizes[0],
      fontFamily: fonts.body,
      lineHeight: lineHeights.messageBody,
    },
    messageHeading: {
      color: colors.textWhite,
      fontSize: fontSizes[3],
      fontFamily: fonts.heading,
      lineHeight: lineHeights.messageHeading,
    },
    messageBody: {
      color: colors.textWhite,
      fontSize: fontSizes[2],
      fontFamily: fonts.body,
      fontWeight: '400',
      lineHeight: lineHeights.messageBody,
    },
  },
  button: {
    primary: {
      ...buttonsBase,
      backgroundColor: colors.tertiary,
      borderColor: colors.tertiary,
    },
    secondary: {
      ...buttonsBase,
      backgroundColor: 'transparent',
      borderColor: colors.tertiary,
    },
  },
  box: {
    gradient: {
      flex: 1,
      height: '100%',
      width: '100%',
      alignItems: 'center',
      backgroundImage: `linear-gradient(to bottom, ${colors.primary}, ${colors.secondary})`,
    },
    frame: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    rounded: {
      borderRadius: 10,
    },
  },
  select: {
    primary: {
      display: 'block',
      width: '100%',
      height: '38px',
      padding: '8px 12px',
      lineHeight: '1.42857',
      color: 'textWhite',
      backgroundColor: 'backgroundDark',
      backgroundImage: `url(${downArrow})`,
      backgroundSize: '12px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '97%',
      borderRadius: '3px',
      border: 0,
      '-moz-appearance': 'none',
      '-webkit-appearance': 'none',
    },
  },
  input: {
    primary: {
      width: '100%',
      maxWidth: 300,
      height: '44px',
      fontSize: fontSizes[0],
      padding: space[2],
      borderWidth: 0,
      borderRadius: '4px',
      borderColor: 'backgroundDark',
      color: colors.textWhite,
    },
  },
  misc: {
    a: {
      color: colors.primary,
      textDecoration: 'none',
    },
    strong: {
      color: colors.secondary,
      fontWeight: fontWeights.bold,
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
};
