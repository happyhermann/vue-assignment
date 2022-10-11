const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  // lintOnSave: false,
  devServer: {
    // host: "localhost",
    // port: 80,
    proxy: {
      //proxyTable 설정
      "/group/bbs": {
        target: "http://175.118.126.222",
        changeOrigin: true,
      },
      "/v1": {
        target: "http://175.118.126.222/group",
        changeOrigin: true,
      },
      "/testLee/bbs": {
        target: "http://175.118.126.222",
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
