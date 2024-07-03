// // import { App } from 'vue';
import permission from './permission';

export default {
  install(Vue) {
    Vue.directive('permission', permission);
  },
};
