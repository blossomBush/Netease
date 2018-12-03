import {
  reqHomeData,
  reqNavData,
  reqTopciData
} from '../api'

import {
  RECEIVE_HOMEDATA,
  RECEIVE_NAVDATA,
  RECEIVE_TOPICDATA
}from './mutations-type'

//异步获取信息的函数
export default {
  async getHomeData({commit},callback) {
    const result = await reqHomeData()
    console.log(result);
    if (result.code===0) {
      const homeData = result.data
      commit(RECEIVE_HOMEDATA, {homeData})
      callback && callback()
    }
  }
}
