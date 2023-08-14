import request from "@/utils/request"
import { IResult } from '@/types'

/**
 * @description: 用户登录
 * @params { any } params
 * @return {Promise}
 */
export function accountLogin(params: any): Promise<IResult> {
  return request.post("/login/login", params)
}

/**
 * @description: 获取验证码
 * @params { any } params
 * @return {Promise}
 */
 export function getLoginCode(params: any): Promise<IResult> {
  return request.post("/login/getVerificationCode", params)
}

/**
 * @description: 登出
 * @params { any } params
 * @return {Promise}
 */
 export function userLogout(params: any): Promise<IResult> {
  return request.post("/login/logout", params)
}

/**
 * @description: 重置密码
 * @params { any } params
 * @return {Promise}
 */
 export function updatePassword(params: any): Promise<IResult> {
  return request.post("/login/updatePassword", params)
}
