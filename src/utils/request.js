import axios from 'axios'
import qs from 'qs'

// 添加请求拦截器
axios.interceptors.request.use(config => {
  return config
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
  return response;
}, error => {
  return Promise.reject(error);
});

// post
export function post(url, data) {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: 'POST',
      data: qs.stringify(data),
    })
      .then(res => resolve(res))
      .catch(err => console.log(err))
  })
}

// get
export function get(url, data = '') {
  return new Promise((resolve, reject) => {
    axios.get(url, { params: data })
      // axios({
      //   url,
      //   method: 'GET',
      //   params: qs.stringify(data),
      // })
      .then(res => resolve(res))
      .catch(err => console.log(err))
  })
}

