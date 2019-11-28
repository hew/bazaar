import React, { useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native';
import { createAppContainer, createSwitchNavigator } from '@react-navigation/core';
import { createBrowserApp } from '@react-navigation/web';
import { Platform } from 'react-native';
import { Box, Loading } from '../theme';
import { useMachineValue } from '../machines';

// App Screens
import LoginScreen from '../screens/LoginScreen.js';
import MainScreen from '../screens/MainScreen.js';

const createApp = Platform.select({
  web: createBrowserApp,
  default: createAppContainer,
});

const SignedInNavigator = createApp(
  createSwitchNavigator(
    { main: MainScreen },
    { initialRouteName: 'main' },
  ),
);

const SignedOutNavigator = createApp(
  createSwitchNavigator(
    { auth: LoginScreen },
    { initialRouteName: 'auth' },
  ),
);

export default function Navigation() {
  const [{ context, value }, send] = useMachineValue();
  const [authChecked, setAuthChecked] = useState(false);

  // Only run the login check when the app first loads
  useEffect(() => {
    send('LOGIN_CHECK');
  }, []);

  useEffect(() => {
    if (!context.authChecked) return;

    if (value === 'loggedIn') {
      setAuthChecked(true);
    }

    if (value === 'loggedOut') {
      setAuthChecked(true);
    }
  }, [value]);

  switch (authChecked) {
    case true:
      return value === 'loggedIn' ? <SignedInNavigator /> : <SignedOutNavigator />;

    default:
      return (
        <Box variant="gradient" justifyContent="center">
          <Loading />
        </Box>
      );
  }
}
