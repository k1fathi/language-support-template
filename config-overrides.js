const TerserPlugin = require("terser-webpack-plugin");

module.exports = function override(config, env) {
  if (!config.optimization) {
    config.optimization = {};
  }

  config.optimization = {
    ...config.optimization,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ["console.log"],
          },
          mangle: {
            safari10: true,
            properties: false,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
      }),
    ],
  };

  // Disable source maps
  config.devtool = false;

  // Preserve module names for React components
  config.optimization.moduleIds = "named";

  return config;
};
