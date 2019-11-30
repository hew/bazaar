import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Button, ScrollView } from '../theme/primitives';

export default function OtherScreen({ navigation }) {
  return (
    <ScrollView>
      <Text variant="title" color="tertiary" align="center" mt={3}>
        Bazaar
      </Text>
      <Box variant="frame">
        <Box maxWidth="500px" px={4}>
          <Text variant="h2">Another Page!</Text>
        </Box>
        <Button onPress={_ => navigation.navigate('Main')} title="Back to Home" />
      </Box>
    </ScrollView>
  );
}

OtherScreen.navigationOptions = {
  title: 'Other',
};

OtherScreen.propTypes = { navigation: PropTypes.object.isRequired };
