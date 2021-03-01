module.exports = {
  presets: [
    [
      "next/babel",
      {
        "preset-react": {
          runtime: "automatic",
          importSource: "@emotion/react",
        },
      },
    ],
  ],
  plugins: [
    "@emotion/babel-plugin",
    "babel-plugin-macros",
    [
      "module-resolver",
      {
        root: "./",
        alias: {
          "@components": "./components",
          "@styles": "./styles",
          "@generated": "./generated",
        },
      },
    ],
  ],
}
