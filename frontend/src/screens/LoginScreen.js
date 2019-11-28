import React from 'react';
import LoginForm from '../components/LoginForm';
import { Box, Text } from '../theme/primitives';

export default function LoginScreen({ navigation }) {
  return (
    <Box variant="gradient" justifyContent="center">
      <Box width="100%" alignItems="center">
        <Text variant="title">Bazaar</Text>
        <LoginForm navigation={navigation} />
      </Box>
    </Box>
  );
}

LoginScreen.navigationOptions = {
  // header: null
  title: 'Login',
};
