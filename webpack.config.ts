import path from "path";

import type { Configuration } from "webpack";

const config: Configuration = {
  entry: ["./src/frontend"],
  mode: "production",
  target: "web",
  output: {
    path: path.resolve(__dirname, "./dist/server/public"),
    filename: "app.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
};

export default config;
