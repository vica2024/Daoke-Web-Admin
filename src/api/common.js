import { request } from '@/utils/request.js'

export default {
  /**
   * get user list.
   * @returns
   */
  getUserList(params = {}) {
    return request({
      url: 'system/common/getUserList',
      method: 'get',
      params
    })
  },

  /**
   * Get the list basic user information by userid.
   * @returns
   */
   getUserInfoByIds(data = {}) {
    return request({
      url: 'system/common/getUserInfoByIds',
      method: 'post',
      data
    })
  },

  /**
   * Get departments list.
   * @returns
   */
  getDeptTreeList(params = {}) {
    return request({
      url: 'system/common/getDeptTreeList',
      method: 'get',
      params
    })
  },

  /**
   * Get roles list.
   * @returns
   */
  getRoleList(params = {}) {
    return request({
      url: 'system/common/getRoleList',
      method: 'get',
      params
    })
  },

  /**
   * Get positions list.
   * @returns
   */
  getPostList(params = {}) {
    return request({
      url: 'system/common/getPostList',
      method: 'get',
      params
    })
  },

  /**
   * Get notice list.
   * @returns
   */
  getNoticeList(params = {}) {
    return request({
      url: 'system/common/getNoticeList',
      method: 'get',
      params
    })
  },

  /**
   * Clear all caches.
   * @returns
   */
  clearAllCache() {
    return request({
      url: 'system/common/clearAllCache',
      method: 'get'
    })
  },

  /**
   * Get all files.
   * @returns
   */
   getAllFiles (params = {}) {
    return request({
      url: 'system/getAllFiles',
      method: 'get',
      params
    })
  },

  /**
   * Upload picture interface
   * @returns
   */
  uploadImage (data = {}) {
    return request({
      url: 'system/uploadImage',
      method: 'post',
      timeout: 30000,
      data
    })
  },

  /**
   * Upload file interface
   * @returns
   */
  uploadFile (data = {}) {
    return request({
      url: 'system/uploadFile',
      method: 'post',
      timeout: 30000,
      data
    })
  },

  /**
   * Fragment upload interface
   * @returns
   */
  chunkUpload (data = {}) {
    return request({
      url: 'system/chunkUpload',
      method: 'post',
      timeout: 30000,
      data
    })
  },

  /**
   * Save web pictures.
   * @returns
   */
  saveNetWorkImage (data = {}) {
    return request({
      url: 'system/saveNetworkImage',
      method: 'post',
      data
    })
  },

  /**
   * Obtain the login log list.
   */
  getLoginLogList(params = {}) {
    return request({
      url: 'system/common/getLoginLogList',
      method: 'get',
      params
    })
  },

  /**
   * Obtain the operation log list.
   */
   getOperationLogList(params = {}) {
    return request({
      url: 'system/common/getOperationLogList',
      method: 'get',
      params
    })
  },

  /**
   * Get resource list
   */
  getResourceList(params = {}) {
    return request({
      url: 'system/common/getResourceList',
      method: 'get',
      params
    })
  },

  /**
   * Universal import Excel
   */
  importExcel (url, data) {
    return request({ url, method: 'post', data, timeout: 30 * 1000 })
  },

  /**
   * Download General method.
   */
  download(url, method = 'post') {
    return request({ url, method, responseType: 'blob' })
  },

  /**
   * Shortcut query dictionary.
   */
  getDict(code) {
    return request({
      url: 'system/dataDict/list?code=' + code,
      method: 'get'
    })
  },

  /**
   * Quickly query multiple dictionaries.
   */
  getDicts(codes) {
    return request({
      url: 'system/dataDict/lists?codes=' + codes.join(','),
      method: 'get'
    })
  },

  /**
   * Get a list of modules.
   */
  getModuleList() {
    return request({
      url: 'setting/common/getModuleList',
      method: 'get'
    })
  },
  /**
   * Download according to files id.
   */
  downloadById(id) {
    return request({
      url: 'system/downloadById?id=' + id,
      method: 'get',
    })
  },
  /**
   * Download according to hash value.
   */
  downloadByHash(hash) {
    return request({
      url: 'system/downloadByHash?hash=' + hash,
      method: 'get',
    })
  },

  getFileInfoById(id) {
    return request({
      url: 'system/getFileInfoById?id=' + id,
      method: 'get',
    })
  },

  getFileInfoByHash(hash) {
    return request({
      url: 'system/getFileInfoByHash?hash=' + hash,
      method: 'get',
    })
  }
}
