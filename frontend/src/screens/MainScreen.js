import React, { useState, useEffect } from 'react';
import Home from '../components/Home.js';
import Background from '../components/Background';
import { Box, Text, Button } from '../theme/primitives';
import { useExample, useDelay } from '../hooks';
import { useMachineValue } from '../machines';

export default function MainScreen({ navigation }) {
  const [{ value }, send] = useMachineValue();
  const mainContentDelay = useDelay(200);
 
  return (
    <Box variant="frame">
      {/* <Background /> */}
      {mainContentDelay ? (
        <>
          <Home />
          <Button onPress={() => send('LOG_OUT')} title="Log Out" mt={4} />
        </>
      ) : null}
    </Box>
  );
}

MainScreen.navigationOptions = {
  title: 'Home',
};
