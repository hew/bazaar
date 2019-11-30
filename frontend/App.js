import * as Font from 'expo-font';
import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';
import { useMachine } from '@xstate/react';
import { HelmetProvider } from 'react-helmet-async';
import Amplify from 'aws-amplify';
import                myAWSExports from './aws-exports';

// App Theme
import theme from './src/theme';
import Global from './src/theme/global';
import { ThemeProvider } from './src/theme-ui';

// Navigator
import Navigator from './src/navigation/AppNavigator';

// State - Context + Machines
import { MachineContext, Machine } from './src/machines';
// State - Context + Hooks
import { StateProvider } from './src/state/State';

// Configure AWS
Amplify.configure(myAWSExports);


const App = function App() {
  const [current, send] = useMachine(Machine);
  const machine = [current, send];

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
          <ThemeProvider theme={theme}>
            <Global />
            <Navigator />
          </ThemeProvider>
        </MachineContext.Provider>
      </StateProvider>
    </HelmetProvider>
  );
};

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./src/assets/icon.png'), // eslint-disable-line  global-require
    ]),
    Font.loadAsync({
      ...Ionicons.font,
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

export default App;
