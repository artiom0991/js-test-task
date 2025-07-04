const path = require("path");

module.exports = {
  webpack: {
    alias: {
      components: path.resolve(__dirname, "src/Components"),
      context: path.resolve(__dirname, "src/context"),
      assets: path.resolve(__dirname, "src/assets"),
      utils: path.resolve(__dirname, "src/utils"),
      i18n: path.resolve(__dirname, "src/i18n"),
    },
    configure: (webpackConfig) => {
      webpackConfig.entry = {
        main: path.resolve(__dirname, "src/index.js"),
        content: path.resolve(__dirname, "src/content.js"),
        background: path.resolve(__dirname, "src/background.js"),
      };

      webpackConfig.output.filename = "static/js/[name].js";
      webpackConfig.output.chunkFilename = "static/js/[name].js";

      // Disable chunk splitting completely for content script
      webpackConfig.optimization.splitChunks = {
        cacheGroups: {
          default: {
            chunks: (chunk) => chunk.name !== "content",
          },
          vendors: {
            chunks: (chunk) => chunk.name !== "content",
          },
        },
      };

      webpackConfig.optimization.runtimeChunk = false;

      return webpackConfig;
    },
  },
};
