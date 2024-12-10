import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  title: 'Agile Design',
  outputPath: 'doc-site',
  resolve: {
    atomDirs: [{ type: 'component', dir: 'components' }]
  },
  alias: {
    'agile-design': path.join(__dirname, 'components')
  },
  themeConfig: {
    name: 'Agile Design',
    // logo: '/logo.png',
    socialLinks: {
      github: 'https://github.com/Ocean-H1/AgileUI',
    },
    nav: [
      {
        title: '组件',
        order: 2,
        link: '/components/overview',
      },
    ],
  },
  // 修改dumi默认主题的主色, 更多变量详见：https://github.com/umijs/dumi/blob/master/src/client/theme-default/styles/variables.less
  // theme: { '@c-primary': '#1677ff' },
});
