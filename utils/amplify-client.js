import Amplify, { API, graphqlOperation } from 'aws-amplify';
// import __awsExports from '../frontend/aws-exports';
// import * as __mutations from './graphql/mutations';
// import * as __queries from './graphql/queries';
// import * as __subscriptions from './graphql/subscriptions';
// import * as __mutationsCustom from './graphqlCustom/mutations';
// import * as __queriesCustom from './graphqlCustom/queries';
import { constants as __constants } from './constants';

export const API_QUERY = async input => {
  let response = await API.graphql(graphqlOperation(operation, input));

  // the rest
};
export const API_MUTATE = async input => {
  let response = await API.graphql(graphqlOperation(operation, { input }));

  // the rest
};

// export const subscriptions = __subscriptions;
// export const queries = __queries;
// export const mutations = __mutations;

// export const queriesCustom = __queriesCustom;
// export const mutationsCustom = __mutationsCustom;

// export const awsExports = __awsExports;
export const constants = __constants;

export const { Auth } = Amplify;
