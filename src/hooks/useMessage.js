import { useI18n } from 'vue-i18n';

import { Message } from '@arco-design/web-vue';

export default function useMessage() {
  const { t } = useI18n();
  /**
   * 
   * @param {*} type  // success error
   * @param {*} action // add edit delete operations
   */
  const MessageFn = (type, action) => {
    Message[type](t(`message.${type}.${action}`));
  }
  return {
    MessageFn
  }
}