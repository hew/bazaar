export default {
  files: [ 
    'amplify/backend/function/**/__tests__/*.test.js'
  ],
  cache: true,
  concurrency: 5,
  failFast: false,
  failWithoutAssertions: false,
  verbose: false, // controlls logging
  compileEnhancements: false,
  require: ['esm'],
  babel: false,
  extensions: ['js'],
};
