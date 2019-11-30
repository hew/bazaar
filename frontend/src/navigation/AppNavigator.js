import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { createAppContainer, createSwitchNavigator } from '@react-navigation/core';
import { createBrowserApp } from '@react-navigation/web';

import { Box, Loading } from '../theme';
import { useMachineValue } from '../machines';

// App Screens
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import OtherScreen from '../screens/OtherScreen';

const createApp = Platform.select({
  web: createBrowserApp,
  default: createAppContainer,
});

const SignedInNavigator = createApp(
  createSwitchNavigator({
    Main: { screen: MainScreen },
    Second: { screen: OtherScreen },
    initialRouteName: 'Main',
  }),
);

const SignedOutNavigator = createApp(
  createSwitchNavigator({ Auth: LoginScreen }, { initialRouteName: 'Auth' }),
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
