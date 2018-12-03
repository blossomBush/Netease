/**
 * Created by DELL on 2018/12/2.
 */
//发送ajax请求
import axios from 'axios'

export default function ajax(url, data={}, type='GET') {
  return new Promise(function (resolve, reject) {
    let promise
    if (type === 'GET') {
      //准备URL，query参数
      let dataStr = ''
      //返回可枚举属性的数组
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, data.length-1)
        url = url + '?' + dataStr
      }
      promise = axios.get(url)
    }else {
      promise = axios.post(url, data)
    }
    promise.then(response => {
      resolve(response.data)
    })
      .catch(error => {
        reject(error)
      })

  })
}

