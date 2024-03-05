import axios from 'axios'

// 带cookie请求
axios.defaults.headers.post['Content-Type'] = 'application/json'
//  request 请求拦截器 - 请求之前headers加sid
axios.interceptors.request.use(
  config => {
    //  每次发送请求之前检测都vuex存有token,那么都要放在请求头发送给服务器
    return config
  },
  err => {
    return err
  }
)
//  response 错误统一处理
axios.interceptors.response.use(
  res => {
    return res
  },
  err => {
    console.log('接口访问失败')
    return err
  }
)

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get (url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${url}`, {
        params
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject((err && err.data) || err)
      })
  })
}

/**
 * post方法，对应post请求
@param {String} url [请求的url地址]
@param {Object} params [请求时携带的参数]
*/
export function post (url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${url}`, params)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject((err && err.data) || err)
      })
  })
}
