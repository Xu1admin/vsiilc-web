import axios,{AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError} from 'axios'
import { IResult, IAnyObject } from '@/types'
import { ClearAuth } from '@/store/action/user'
import store from '@/store'

const baseURL:string = process.env.NODE_ENV === 'development' ? '/consoleApi' : 'https://console.zhundian.ltd/consoleApi';

//设置axios基础路径
const service:AxiosInstance = axios.create({
  timeout: 100000,
  baseURL: baseURL
  // transformRequest: [
  //   function(data) {
  //     //由于使用的 form-data传数据所以要格式化
  //     delete data.Authorization;
  //     data = qs.stringify(data);
  //     return data;
  //   }
  // ]
})

/**
* http request 请求拦截器
*/
service.interceptors.request.use((config:InternalAxiosRequestConfig) => { 
  const {Login} = store.getState()
  // 每次发送请求之前本地存储中是否存在token，也可以通过Redux这里只演示通过本地拿到token
  // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
  // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
  const token:string = Login?.token
  //在请求头中设置token
  
  config.headers!.Authorization = token
  config.headers!['Content-Type'] = 'application/json;charset=utf-8'

  if(config?.responseType=='arraybuffer') {
    delete config.responseType;
    config.headers!['Content-Type'] = 'multipart/form-data'
  }
  return config
}, (error:any) => { 
  return Promise.reject(error);
})

/**
* http response 响应拦截器
*/
service.interceptors.response.use(
  (response:AxiosResponse<IResult>) => {
    const {Login} = store.getState()
    // 拦截响应，如果返回有token，直接存入localStorage
    // if (response?.data?.data && response?.data?.data.token) {
    //   localStorage.setItem('userToken', response.data.data.token);
    // }
    const { status,config: {headers},data} = response
    if (status === 200) {
      if(response.data instanceof Blob){
        return response
      } else if(headers?.data_view) {
        return data.data
      } else if(data.resultCode==200) {
        return response.data
      } else if(data.resultCode==10018) {
        alert('时间已过计划推送时间，请选择未来时间')
        return response.data
      } else {
        // if(data.resultCode==10017) {
        //   message.error('该管理员已存在，请勿重复添加')
        // } else {
          alert(data.resultMessage || showMessage(status))
        // }
        return response.data
      }
    } else {
      alert(data.resultMessage || showMessage(status))
      if (status === 401) {
        store.dispatch(ClearAuth());
        Login.reducerNavigate('/login')
      }
      return response;
    }
  },
  async (error: AxiosError<IResult>) => {
    const {response} = error;
    const {Login} = store.getState()
    if (response) {
      // 请求已发出，但是不在2xx的范围
      await alert(response?.data?.resultMessage || showMessage(response.status))
      if (response.status === 401) {
        store.dispatch(ClearAuth());
        Login.reducerNavigate('/login')
      }
      return Promise.reject(response.data);
    } else {
      alert('网络连接异常,请稍后再试!');
    }
  }
);

const showMessage = (status:number|string) : string => {
  let msg:string = "";
  switch (status) {
    case 400:
      msg = "请求错误(400)";
      break;
    case 401:
      msg = "未授权，请重新登录(401)";
      break;
    case 403:
      msg = "拒绝访问(403)";
      break;
    case 404:
      msg = "请求出错(404)";
      break;
    case 408:
      msg = "请求超时(408)";
      break;
    case 500:
      msg = "服务器错误(500)";
      break;
    case 501:
      msg = "服务未实现(501)";
      break;
    case 502:
      msg = "网络错误(502)";
      break;
    case 503:
      msg = "服务不可用(503)";
      break;
    case 504:
      msg = "网络超时(504)";
      break;
    case 505:
      msg = "HTTP版本不受支持(505)";
      break;
    default:
      msg = `连接出错(${status})!`;
  }
  return msg
};


export default service;