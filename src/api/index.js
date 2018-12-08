/**
 * Created by DELL on 2018/12/2.
 */
import ajax from './ajax'
export const reqHomeData = () => ajax('/homedata')
export const reqTopicData = () => ajax('/topicdata')
export const reqNavData = () => ajax('/navdata')


// 账号密码登录
export const pwdLogin = ({name, pwd, captcha}) => ajax('api/pwd_login', {name, pwd, captcha},'POST')
// 手机号验证码登录
export const phoneLogin = ({phone}) => ajax('api/phone_login',{phone}, 'POST')
