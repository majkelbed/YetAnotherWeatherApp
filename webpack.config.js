const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["./src/index.tsx", "./src/index.scss"],
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "public")
  },

  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    hot: true,
    https:true,
    port: 3000
  },
  devtool: "source-map",

  mode: "development",

  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.(sass|scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      "@": path.join(__dirname, "src"),
      "@Components": path.join(__dirname, "src/components"),
      "@Views": path.join(__dirname, "src/views"),
      "@UI": path.join(__dirname, "src/components/UI"),
      "@API": path.join(__dirname, "src/api"),
    }
  }
};
