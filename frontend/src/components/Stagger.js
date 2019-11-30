import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { useTrail, animated } from 'react-spring';
import { Box } from '../theme/primitives';

const AnimatedView = animated(View);
const config = { mass: 5, tension: 2000, friction: 200 };

export default function Scatter({ items }) {
  const [toggle, set] = useState(false);

  useEffect(() => {
    set(state => !state);
  }, []);

  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <Box>
      {trail.map(({ x, ...rest }, index) => (
        <AnimatedView
          key={index.toString()}
          style={{ ...rest, transform: x.interpolate(inter => [{ translateX: `-${inter}px` }]) }}
        >
          {items[index]}
        </AnimatedView>
      ))}
    </Box>
  );
}

Scatter.propTypes = { items: PropTypes.arrayOf(PropTypes.node).isRequired };
