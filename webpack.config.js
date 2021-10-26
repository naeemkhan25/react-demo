module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "./dist/bundle.js",
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          plugins: ["transform-runtime"],
          presets: ["es2015", "stage-0", "react"],
        },
      },
    ],
  },
};
