/**
 * Created by DELL on 2018/12/2.
 */
import {
  RECEIVE_HOMEDATA,
  RECEIVE_NAVDATA,
  RECEIVE_TOPICDATA
}from './mutations-type'

//同步更新状态的函数
export default {
  [RECEIVE_HOMEDATA](state, {homeData}) {
    state.homeData = homeData
  }
}
