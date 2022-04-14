const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")
const { EnvironmentPlugin } = require("webpack")

module.exports = (env) => {
  return {
    mode: "development",
    entry: "./src/js/popup.js",
    output: {
      path: path.resolve("dist"),
      filename: "[name].[contenthash].js",
      publicPath: env.website ? "/smartwm-extension" : "/",
    },
    resolve: {
      extensions: [".js"],
      alias: {
        "@": path.resolve("src"),
        "@components": path.resolve("src", "js", "components"),
      },
    },
    optimization: {
      splitChunks: {
        chunks: "all"
      }
    },
    devServer: {
      port: 5500
    },
    plugins: [
      new EnvironmentPlugin({
        "BUILD_ENV": env.website ? "website" : "extension"
      }),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: path.resolve("public", "index.html")
      }),
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin(env.website ? {
        patterns: [
          {
            from: path.resolve("public", "favicon.ico"),
            to: path.resolve("dist")
          }
        ]
      } : {
        patterns: [
          {
            from: path.resolve("public", "manifest.json"),
            to: path.resolve("dist")
          },
          {
            from: path.resolve("public", "icons"),
            to: path.resolve("dist", "icons")
          },
          {
            from: path.resolve("public", "favicon.ico"),
            to: path.resolve("dist")
          },
        ]
      }),
      new VueLoaderPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader",
        }
      ]
    }
  }
}