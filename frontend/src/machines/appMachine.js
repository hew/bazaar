import { AsyncStorage } from 'react-native';
import { Machine, assign, send } from 'xstate';

export const AppMachine = Machine(
  {
    id: 'app',
    initial: 'beep',
    context: {},
    states: {
      beep: {
        on: { SOME_ACTION: 'blap', },
      },
      blap: {
        on: { SOME_OTHER_ACTION: 'beep' }
      },
    },
  },
  {
    services: {},
    actions: {},
    activities: {},
  },
);
