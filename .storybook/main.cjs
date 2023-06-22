const { mergeConfig } = require("vite");
const react = require("@vitejs/plugin-react");
const svgr = require("vite-plugin-svgr");

module.exports = {
  async viteFinal(config, { configType }) {
    // fix: storybook not rendered anything when deploy to Github page
    if (configType === "PRODUCTION") {
      config.base = "./";
    }

    // return the customized config
    return mergeConfig(config, {
      // customize the Vite config here
      resolve: {
        alias: { foo: "bar" },
      },
      plugins: [react(), svgr()],
    });
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
};
