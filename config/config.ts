import { defineConfig } from 'umi';
import { routes } from './routes';

export default defineConfig({
    // layout: {
    //     name: 'Ant Design Pro',
    //     logo: 'https://preview.pro.ant.design/static/logo.f0355d39.svg',
    //     // copy from pro site
    //     navTheme: 'light',
    //     primaryColor: '#1890ff',
    //     layout: 'top',
    //     contentWidth: 'Fluid',
    //     fixedHeader: true,
    //     fixSiderbar: false,
    //     title: 'Ant Design Pro',
    //     pwa: false,
    //     iconfontUrl: '',
    // },
    routes: routes,
    publicPath: 'http://118.195.186.140/files/',
    fastRefresh: {},
    theme: {
        '@primary-color': '#1DA57A',
    },
});
