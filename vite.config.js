import { resolve } from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import eslint from 'vite-plugin-eslint';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { vitePluginForArco } from '@arco-plugins/vite-vue'
import configCompressPlugin from './plugin/compress';
import configVisualizerPlugin from './plugin/visualizer';
// import configArcoResolverPlugin from './plugin/arcoResolver';
// import configImageminPlugin from './plugin/imagemin';

// const isDevelopment = import.meta.env.MODE === 'development'

// https://vitejs.dev/config/
export default defineConfig({
  // mode: 'development',
  server: {
    host: '0.0.0.0',
    port: 6100,
    proxy: {
      '/devApi': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/devApi/, ''),
      }
    },
    open: false,
  },
  plugins: [
    vue(),
    vueJsx(),
    vitePluginForArco({
      style: 'css'
    }),
    // isDevelopment ? eslint({
    //   cache: false,
    //   include: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.vue'],
    //   exclude: ['node_modules'],
    // }) : null,

    configCompressPlugin('gzip'),
    configVisualizerPlugin(),
    // configArcoResolverPlugin(),
    // configImageminPlugin(),
],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
      {
        find: 'assets',
        replacement: resolve(__dirname, './src/assets'),
      },
      {
        find: 'vue-i18n',
        replacement: 'vue-i18n/dist/vue-i18n.cjs.js', // Resolve the i18n warning issue
      },
      {
        find: 'vue',
        replacement: 'vue/dist/vue.esm-bundler.js', // compile template
      },
    ],
    extensions: ['.ts', '.js'],
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve(
            'src/assets/style/breakpoint.less'
          )}";`,
        },
        javascriptEnabled: true,
      },
    },
  },
})
