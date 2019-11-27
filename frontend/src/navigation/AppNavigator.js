import React, { useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native';
import { createAppContainer, createSwitchNavigator } from '@react-navigation/core';
import { createBrowserApp } from '@react-navigation/web';
import { Platform } from 'react-native';

import LoginScreen from '../screens/LoginScreen.js';
import { Box, Loading } from '../theme';
import { useMachineValue } from '../machines';

const createApp = Platform.select({
  web: createBrowserApp,
  default: createAppContainer,
});

export default createApp(
  createSwitchNavigator(
    {
      main: LoginScreen,
    },
    { initialRouteName: 'main', resetOnBlur: false },
  ),
);

