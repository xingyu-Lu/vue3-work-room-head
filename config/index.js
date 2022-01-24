export default {
  development: {
    baseUrl: '/apis' // 测试接口域名
  },
  beta: {
    baseUrl: '//backend-api-02.newbee.ltd/manage-api/v1' // 测试接口域名
  },
  release: {
    baseUrl: '//backend-api-02.newbee.ltd/manage-api/v1' // 正式接口域名
  },
  production: {
    baseUrl: 'http://120.26.124.151:8001' // 正式接口域名
  }
}