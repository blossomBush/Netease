/**
 * Created by DELL on 2018/12/2.
 */
import {
  RECEIVE_HOMEDATA,
  RECEIVE_NAVDATA,
  RECEIVE_TOPICDATA,
  RECEIVE_INDEX,
  RECEIVE_DETAIL
}from './mutations-type'

//同步更新状态的函数
export default {
  [RECEIVE_HOMEDATA](state, {homeData}) {
    state.homeData = homeData
  },
  [RECEIVE_TOPICDATA](state, {topicData}) {
    state.topicData = topicData
  },
  [RECEIVE_NAVDATA](state, {navData}) {
    state.navData = navData
  },
  [RECEIVE_INDEX](state, {index}) {
    state.navIndex = index
  },
  [RECEIVE_DETAIL](state) {
    state.navDetail = state.navData[state.navIndex]
  }
}
