import { defineConfig } from 'umi';

export default defineConfig({
  // proxy: {
  //   '/api': {
  //     // target: 'http://118.195.186.140:3000/',
  //     target: 'http://127.0.0.1:8000/',
  //     // target: 'http://localhost:3000/',
  //     changeOrigin: true,
  //     pathRewrite: { '^/api': '' },
  //   },
  // },
  title: 'NCSU Efficient & Intelligent Computing Lab',
  // publicPath:'http://118.195.186.140/files/',
  runtimePublicPath: true,
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
});
