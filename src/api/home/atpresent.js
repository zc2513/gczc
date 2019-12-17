/**
 * 众创工厂首页Api请求
 * */
import request from '@/utils/request'
import qs from 'qs'

/**
 * @api getSwiper
 * @description 获取轮播图信息
 */

export function getSwiper(data) {
  return request({
    url: '/table/list',
    method: 'get',
    data: qs.stringify(data)
  })
}

// export function getSwiper() {
//   return request({
//     url: '/v2/movie/top250'
//   })
// }

/**
 * @api getProModule
 * @description 获取项目模块信息
*/
export function getProModule(data) {
  return request({
    url: '/table/list',
    method: 'get',
    data
  })
}
