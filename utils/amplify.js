import Amplify, { API, graphqlOperation } from 'aws-amplify';
import __awsExports from '../frontend/aws-exports';
import * as __mutations from './graphql/mutations';
import * as __queries from './graphql/queries';
import * as __subscriptions from './graphql/subscriptions';
import { constants as __constants } from './constants';

// Configure AWS
Amplify.configure(__awsExports);

export const API_QUERY = async (operation, input) => API.graphql(graphqlOperation(operation, input));
export const API_MUTATE = async (operation, input) => API.graphql(graphqlOperation(operation, { input }));

export const subscriptions = __subscriptions;
export const queries = __queries;
export const mutations = __mutations;

export const awsExports = __awsExports;
export const constants = __constants;

export const { Auth } = Amplify;
