/**
 * Created by DELL on 2018/12/2.
 */
import ajax from './ajax'
export const reqHomeData = () => ajax('/homedata')
export const reqTopciData = () => ajax('/topicdata')
export const reqNavData = () => ajax('/navdata')
