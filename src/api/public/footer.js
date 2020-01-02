import request from '@/utils/request'

/**
 * @api getfooter
 * @describe 获取底部联系人数据部分
*/

export function getfooter() {
    return request({
        url: 'Common/GetInfo'
    })
}
