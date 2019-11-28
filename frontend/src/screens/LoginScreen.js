import React from 'react';
import LoginForm from '../components/LoginForm';
import { Box } from '../theme/primitives';

export default function LoginScreen({ navigation }) {
  return (
    <Box variant="gradient" justifyContent="center">
      <Box width="100%" alignItems="center">
      {/*
        <img
        src={logo}
        style={{
          height: '74px',
          width: '151px',
        }}
        />
      */}
          <LoginForm navigation={navigation} />
        </Box>
    </Box>
  );
}

LoginScreen.navigationOptions = {
  // header: null
  title: 'Login',
};
