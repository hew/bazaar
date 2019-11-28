
import React from 'react';
import LoginForm from '../components/LoginForm';
import { Box, Text } from '../theme/primatives';
import {Authenticator} from 'aws-amplify-react-native';

export default function MainScreen({ navigation }) {
  return (
    <Box variant="frame">
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
      <Text variant="h1">hey</Text>
        </Box>
    </Box>
  );
}

MainScreen.navigationOptions = {
  // header: null
  title: 'Main',
};
