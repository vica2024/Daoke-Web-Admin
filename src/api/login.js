import { request } from '@/utils/request.js'

export default {

  /**
   * get code.
   * @returns
   */
  getCaptch() {
    return request({
      url: 'system/captcha',
      method: 'get'
    })
  },

  /**
   * user login.
   * @param {object} params
   * @returns
   */
  login(params = {}) {
    return request({
      url: 'system/login',
      method: 'post',
      data: params
    })
  },

  /**
   * user logout.
   * @param {object} params
   * @returns
   */
  logout(params = {}) {
    return request({
      url: 'system/logout',
      method: 'post',
      data: params
    })
  },

  /**
   * get user info.
   * @param {object} params
   * @returns
   */
  getInfo(params = {}) {
    return request({
      url: 'system/getInfo',
      method: 'get',
      data: params
    })
  }
}
