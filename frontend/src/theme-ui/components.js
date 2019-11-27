// Not sure what we're doign here. Maybe delete lib files that are not used?

import styled from './styled';
import themed from './themed';

const tags = [
  'View',
  'Text',
  // theme-ui
  'root',
];

const aliases = {
  root: 'View',
};

const alias = n => aliases[n] || n;

export const Styled = styled('View')(themed('View'));

export const components = {};

tags.forEach(tag => {
  components[tag] = styled(alias(tag))(themed(tag));
  Styled[tag] = components[tag];
});

export const createComponents = (components = {}) => {
  const next = {};
  Object.keys(components).forEach(key => {
    next[key] = styled(components[key])(themed(key));
  });
  return next;
};
