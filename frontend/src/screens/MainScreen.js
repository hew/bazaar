import React from 'react';
import Home from '../components/Home.js';
import { Box, Text, Button } from '../theme/primatives';
import {useExample} from '../hooks'
import { useMachineValue } from '../machines';

export default function MainScreen({ navigation }) {
  const [{ value }, send] = useMachineValue();

  return (
    <Box variant="frame">
      <Home />
      <Button onPress={() => send("LOG_OUT")} title="Log Out" mt={4} />
    </Box>
  );
}

MainScreen.navigationOptions = {
  // header: null
  title: 'Home',
};
