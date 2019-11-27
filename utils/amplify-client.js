import __awsExports from '../frontend/aws-exports';
import * as __mutations from './graphql/mutations';
import * as __queries from './graphql/queries';
import * as __subscriptions from './graphql/subscriptions';
import * as __mutationsCustom from './graphqlCustom/mutations';
import * as __queriesCustom from './graphqlCustom/queries';
import { constants as __constants } from '../lib/constants';

export function Client(Amplify, API, graphqlOperation, awsExports) {
  this.Amplify = Amplify;
  this.API = API;
  this.graphqlOperation = graphqlOperation;
  this.varToString = varObj => Object.keys(varObj)[0];
  this.init = () => {
    this.Amplify.configure(awsExports);

    return {
      API_USE: async (operation, input) => {
        let { API, graphqlOperation } = this;
        let response = await API.graphql(graphqlOperation(operation, input));

        // the rest
      },

      /*
       * These functions prevent you from having to drill down through the
       * query/mutation result's name.
       * */
      API_QUERY: async (operation, c) => {
        let { API, graphqlOperation, varToString } = this;
        let response = await API.graphql(graphqlOperation(operation, c));

        // the rest 
      },
      API_MUTATE: async (operation, input) => {
        let { API, graphqlOperation, varToString } = this;
        let response = await API.graphql(graphqlOperation(operation, { input }));

        // the rest 
      },
    };
  };
}

export const subscriptions = __subscriptions;
export const queries = __queries;
export const mutations = __mutations;

export const queriesCustom = __queriesCustom;
export const mutationsCustom = __mutationsCustom;

export const awsExports = __awsExports;
export const constants = __constants;
