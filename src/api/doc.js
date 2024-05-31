import { request } from '@/utils/request.js'

/**
 * Interface documents.
 */
export default {
  /**
   * Login Interface documents
   * @returns
   */
  login (data = {}) {
    return request({
      url: 'apiDoc/login',
      method: 'post',
      data
    })
  },

  /**
   * Get app information and interface list.
   * @returns
   */
   getAppAndInterfaceList (appId = null) {
    return request({
      url: 'apiDoc/getAppAndInterfaceList/' + appId,
      method: 'get'
    })
  },

  /**
   * Get field list.
   * @returns
   */
  getColumnList (apiId = null) {
    return request({
      url: 'apiDoc/getColumnList/' + apiId,
      method: 'get'
    })
  }
}
