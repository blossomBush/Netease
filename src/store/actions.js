import {
  reqHomeData,
  reqNavData,
  reqTopicData,
  pwdLogin,
  phoneLogin
} from '../api'

import {
  RECEIVE_HOMEDATA,
  RECEIVE_NAVDATA,
  RECEIVE_TOPICDATA,
  RECEIVE_PWD,
  RECEIVE_PHONE,
  RECEIVE_INDEX,
  RECEIVE_DETAIL
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
  },
  async getTopicData({commit},callback) {
    const result = await reqTopicData()
    console.log(result);
    if (result.code===0) {
      const topicData = result.data
      commit(RECEIVE_TOPICDATA, {topicData})
      callback && callback()
    }
  },
  async getNavData({commit},callback) {
    const result = await reqNavData()
    console.log(result);
    if (result.code===0) {
      const navData = result.data
      commit(RECEIVE_NAVDATA, {navData})
      callback && callback()
    }
  },
  setNavIndex({commit},index) {
    commit(RECEIVE_INDEX, {index})
  },
  getNavDetail({commit},callback) {
    commit(RECEIVE_DETAIL)
    callback && callback()
  }
}
