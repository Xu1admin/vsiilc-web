import Home from "./pages/home";


interface IRouter {
  name: string;
  path: string;
  component?: any;
}


const routers:IRouter[] = [
  { 
    name: '主页',
    path: '/',
    component: Home
  }
]


export default routers