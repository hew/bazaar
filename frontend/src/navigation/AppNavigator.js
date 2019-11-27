import React, { useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native';
import { createAppContainer, createSwitchNavigator } from '@react-navigation/core';
import { createBrowserApp } from '@react-navigation/web';
import { Platform } from 'react-native';

import { Box, Loading } from '../theme';
import { useMachineValue } from '../machines';

// Screens
import MainTabNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';
import GameNavigator from './GameNavigator';
import SignUpNavigator from './SignupNavigator';
import TestingScreen from '../screens/TestingScreen';

const createApp = Platform.select({
  web: createBrowserApp,
  default: createAppContainer,
});

const SignedInNavigator = createApp(
  createSwitchNavigator(
    {
      main: MainTabNavigator,
      game: GameNavigator,
      testing: TestingScreen,
    },
    { initialRouteName: 'main' },
  ),
);

const SignedOutNavigator = createApp(
  createSwitchNavigator(
    {
      auth: AuthNavigator,
      signup: SignUpNavigator,
      testing: TestingScreen,
    },
    { initialRouteName: 'auth', resetOnBlur: false },
  ),
);

export default function Navigation() {
  const [{ context, value }, send] = useMachineValue();
  const [loggedIn, setLoggedIn] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    send('LOGIN_CHECK');
  }, []);

  useEffect(() => {
    if (context.loggingOut) {
      setLoggedIn(false);
      setAuthChecked(false);
      window.location.href = '/';
    }

    if (!context.authChecked) return;

    if (value === 'loggedIn') {
      setLoggedIn(true);
      setAuthChecked(true);
    }

    if (value === 'loggedOut') {
      setAuthChecked(true);
    }
  }, [value]);

  switch (authChecked) {
    case true:
      return loggedIn ? <SignedInNavigator /> : <SignedOutNavigator />;

    default:
      return (
        <Box variant="gradient" justifyContent="center">
          <Loading />
        </Box>
      );
  }
}
