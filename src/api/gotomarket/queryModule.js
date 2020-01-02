import request from '@/utils/request'

/**
 * @api GetSubstation
 * @describe 获取工程团队页面信息
 * */
export function GetSubstation(params) {
    return request({
        url: 'SiteHandler/TeamHandler.ashx',
        method: 'get',
        params
    })
}
