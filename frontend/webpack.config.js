const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const merge = require('webpack-merge');

const modelLoaderConfiguration = {
  test: /\.mjs$/,
  include: /node_modules/,
  type: 'javascript/auto',
};

module.exports = async (env, argv) => {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Turn off the import-only-in-src restriction
  const scopePluginIndex = config.resolve.plugins.findIndex(
    ({ constructor }) => constructor && constructor.name === 'ModuleScopePlugin',
  );
  config.resolve.plugins.splice(scopePluginIndex, 1);

  // Maybe you want to turn off compression in dev mode.
  // if (config.mode === 'development') {
  //   config.devServer.compress = false;
  // }

  // Or prevent minimizing the bundle when you build.
  // if (config.mode === 'production') {
  //   config.optimization.minimize = false;
  // }

  // Finally return the new config for the CLI to use.
  return merge(config, {
    output: {
      publicPath: '/',
    },
    module: {
      rules: [modelLoaderConfiguration],
    },
    devServer: {
      historyApiFallback: true,
    },
  });
};
