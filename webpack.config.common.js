// Common configurations for Webpack. Included into the other Webpack
// configurations in this directory. See
// https://dev.to/stowball/creating-a-production-ready-eleventy-project-with-webpack-babel-and-sass-35ep
// for more info.
const Fiber = require("fibers");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: "./src/assets/js/index.js",
  output: {
    library: "BUNDLE",
    path: path.resolve(__dirname, "src/compiled-assets"),
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/, // Matches .sass, .scss, .css
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                fiber: Fiber,
                outputStyle: "expanded",
              },
            },
          },
        ],
      },
      {
        // Transpile and polyfill JS with Babel.
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  // Any `import`s from `node_modules` will compiled in to a `vendor.js` file.
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
};
