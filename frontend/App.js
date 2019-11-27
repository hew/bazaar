import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';
import { AppLoading, registerRootComponent } from 'expo';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';
import { useMachine } from '@xstate/react';
import { HelmetProvider } from 'react-helmet-async';

// Navigator
import Navigator from './src/navigation/AppNavigator';

// Game State
import { MachineContext, Machine } from './src/machines';
import { SignupMachineContext, SignUpMachine } from './src/machines/signupMachine';
import { StateProvider } from './src/state/State';

// App Theme
import theme from './src/theme';
import Global from './src/theme/global';
import { ThemeProvider } from './fork/theme-ui/src';

const App = function App() {
  const [current, send] = useMachine(Machine);
  const machine = [current, send];

  // Signup is kind of different from the app machine. Instead of nesting
  // inside of 'loggedOut', we break it out here into it's own top-level
  // context that can track the navigation changes.
  const [signUpCurrent, signUpSend] = useMachine(SignUpMachine);
  const signUp = [signUpCurrent, signUpSend];

  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  }
  return (
    <HelmetProvider>
      <StateProvider>
        <MachineContext.Provider value={machine}>
          <SignupMachineContext.Provider value={signUp}>
            <ThemeProvider theme={theme}>
              <Global />
              <Navigator />
            </ThemeProvider>
          </SignupMachineContext.Provider>
        </MachineContext.Provider>
      </StateProvider>
    </HelmetProvider>
  );
};

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./src/assets/images/robot-dev.png'), // eslint-disable-line  global-require
      require('./src/assets/images/robot-prod.png'), // eslint-disable-line global-require
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'SFProText-Regular': require('./src/assets/fonts/SF-Pro-Text-Regular.otf'), // eslint-disable-line global-require
      'SFProText-Bold': require('./src/assets/fonts/SF-Pro-Text-Bold.otf'), // eslint-disable-line global-require
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default registerRootComponent(App);
