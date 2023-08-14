import { Dispatch } from 'redux';
import { actionProps } from '@/types'
import { accountLogin, userLogout } from '@/services/login'

// 获取权限
const actionAuthApps = (data: string[]): actionProps => ({
	type: "AUTH_CHANGE",
	payload: data
});
// 获取token
const actionToken = (data: string): actionProps => ({
	type: "TOKEN_CHANGE",
	payload: data
});
// 用户信息
const actionUser = (data: string): actionProps => ({
	type: "USER_CHANGE",
	payload: data
});
// 清空
const claerUser = (): actionProps => ({
	type: "CLEAR_AUTH",
	payload: ''
});

type TResData = {
	resultCode: number
	resultDesc:string;
	resultMessage:string;
}

// 登录
export const Login =
	(params: any, callback?: (res:TResData) => void) => async (dispatch: Dispatch) => {
		const { resultCode, data, resultDesc, resultMessage } = await accountLogin(params)
		if (resultCode == 200) {

		}
		callback && callback({resultCode, resultDesc, resultMessage});
	};


// 清空登录信息
export const ClearAuth =
  () => (dispatch: Dispatch) => {
    dispatch(claerUser());
  };

 // 登出
export const LoginOut =
(callback?: (res:TResData) => void) => async (dispatch: Dispatch,getState:any) => {
	const {Login:{token}} = getState()
  const { resultCode, data, resultDesc, resultMessage } = await userLogout({token})
	if (resultCode == 200) {
		await dispatch(claerUser());
	}
	callback && callback({resultCode , resultDesc, resultMessage});
};
