import React from 'react';
import Home from '../components/Home.js';
import { Box, Text } from '../theme/primatives';
import {useExample} from '../hooks'

export default function MainScreen({ navigation }) {

  const result = useExample();

  console.log(result, "result")

  return (
    <Box variant="frame">
      <Home />
    </Box>
  );
}

MainScreen.navigationOptions = {
  // header: null
  title: 'Home',
};
