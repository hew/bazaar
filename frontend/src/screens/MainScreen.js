import React, { useState, useEffect } from 'react';
import Home from '../components/Home.js';
import { Box, Text, Button } from '../theme/primitives';
import { useMachineValue } from '../machines';

export default function MainScreen({ navigation }) {
  const [{ value }, send] = useMachineValue();

  return (
    <>
      <Text variant="title" color="tertiary" align="center" mt={3}>
        Bazaar
      </Text>
      <Box variant="frame">
        <Box maxWidth="500px" px={4}>
         <Home />
         </Box>
      </Box>
      <Box width="100%" alignItems="center">
        <Button onPress={() => send('LOG_OUT')} title="Log Out" mb={4} />
      </Box>
    </>
  );
}

MainScreen.navigationOptions = {
  title: 'Home',
};
