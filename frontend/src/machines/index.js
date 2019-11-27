import { createContext, useContext } from 'react';
import { AppMachine } from './appMachine';

export const Machine = AppMachine;
export const MachineContext = createContext();
export const useMachineValue = () => useContext(MachineContext);
