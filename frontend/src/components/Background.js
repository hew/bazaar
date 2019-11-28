import { render } from 'react-dom';
import React from 'react';
import { View } from 'react-native';
import { animated, useSpring } from 'react-spring';

const AnimatedView = animated(View);

export default function Background({children}) {
  const props = useSpring({
    from: { position: 'absolute', left: '0%', top: '0%', width: '0%', height: '0%', backgroundColor: 'lightgreen' },
    to: async next => {
      await next({ position: 'absolute', left: '0%', top: '0%', width: '0%', height: '0%', backgroundColor: 'lightgreen' });
      await next({ position: 'absolute', left: '0%', top: '0%', width: '0%', height: '0%', backgroundColor: 'lightgreen' });
      await next({ position: 'absolute', left: '0%', top: '0%', width: '100%', height: '100%', backgroundColor: 'lightblue' });
    },
  });
  return <AnimatedView style={props} />;
}
