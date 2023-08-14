
interface IRouter {
  name: string;
  path: string;
  component?: string;
}


const routers:IRouter[] = [
  { 
    name: '主页',
    path: '/index',
    component: 'home'
  },
  {
    name: '药品管理',
    path: '/medicineManage',
  },
  {
    name: '打卡管理',
    path: '/cardManage',
  },
  {
    name: '用户管理',
    path: '/userManage/feedback',
    component: 'userManage/feedback'

  }
]


export default routers