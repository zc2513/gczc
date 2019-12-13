import request from '@/utils/request'

export function uploadFile(data) {
  return request({
    url: '/file/upload',
    method: 'post',
    data,
    processData: false,
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}
