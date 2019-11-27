import React from 'react';
import LoginForm from '../components/LoginForm';
import logo from '../assets/images/qup-logo@3x.png';
import { Box } from '../theme/primatives';

export default function LoginScreen({ navigation }) {
  return (
    <Box variant="gradient" justifyContent="center">
      <Box width="100%" alignItems="center">
        <img
          src={logo}
          style={{
            height: '74px',
            width: '151px',
          }}
        />
        <LoginForm navigation={navigation} />
        </Box>
    </Box>
  );
}

LoginScreen.navigationOptions = {
  // header: null
  title: 'Login',
};
