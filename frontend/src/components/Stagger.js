import React, { useState, useEffect } from 'react';
import { Box, Text } from '../theme/primitives';
import { useTrail, animated, useSpring } from 'react-spring';
import { View } from 'react-native';

const AnimatedView = animated(View);
const config = { mass: 5, tension: 2000, friction: 200 };

export default function Scatter({ items }) {
  const [toggle, set] = useState(false);

  useEffect(() => {
    console.log('hello')
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
      {trail.map(({ x, height, ...rest }, index) => (
        <AnimatedView
          key={index.toString()}
          style={{ ...rest, transform: x.interpolate(x => [{ translateX: `-${x}px` }] ) }}
        >
          {items[index]}
        </AnimatedView>
      ))}
    </Box>
  );
}
