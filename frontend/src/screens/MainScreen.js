import React from 'react';
import PropTypes from 'prop-types';
import { useMachineValue } from '../machines';
import { Box, Text, Button, ScrollView } from '../theme/primitives';
import Home from '../components/Home';

export default function MainScreen({ navigation }) {
  const [, send] = useMachineValue();

  return (
    <ScrollView>
      <Text variant="title" color="tertiary" align="center" mt={3}>
        Bazaar
      </Text>
      <Box variant="frame">
        <Box maxWidth="500px" px={4}>
          <Home />
        </Box>
      </Box>
      <Box width="100%" alignItems="center">
        <Button onPress={_evt => navigation.navigate('Second')} title="Another Page" />
        <Button onPress={_evt => send('LOG_OUT')} title="Log Out" mb={4} mt={2} />
      </Box>
    </ScrollView>
  );
}

MainScreen.navigationOptions = {
  title: 'Home',
};

MainScreen.propTypes = { navigation: PropTypes.object.isRequired };
