const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  // lintOnSave: false,
  transpileDependencies: true,
  lintOnSave: false,

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
});
