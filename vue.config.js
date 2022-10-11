const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  // lintOnSave: false,
  devServer: {
    // host: "localhost",
    // port: 80,
    proxy: {
      //proxyTable 설정
      // "/bbs": {
      //   target: "http://175.118.126.222/group",
      //   changeOrigin: true,
      // },
      // "/v1": {
      //   target: "http://175.118.126.222/group",
      //   changeOrigin: true,
      // },
      "/bbs": {
        target: "http://175.118.126.222/testLee",
        changeOrigin: true,
      },
    },
  },
  lintOnSave: false,
  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
});
