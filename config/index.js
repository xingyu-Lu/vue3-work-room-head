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
    baseUrl: '//127.0.0.1' // 正式接口域名
  }
}