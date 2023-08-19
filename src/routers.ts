import Home from './pages/home';
import Alarm from './pages/Alarm';
import DataLog from './pages/DataLog';
import FirmwareUpgrade from './pages/FirmwareUpgrade';
import Configuration from './pages/Configuration';

interface IRouter {
  name: string;
  path: string;
  title: string;
  component?: any;
}

const routers: IRouter[] = [
  {
    name: '主页',
    path: '/',
    title: 'Home Page',
    component: Home,
  },
  {
    name: 'alarm',
    path: '/alarm',
    title: 'Alarm Page',
    component: Alarm,
  },
  {
    name: 'Configuration',
    path: '/configuration',
    title: 'Configuration Page',
    component: Configuration,
  },
  {
    name: 'Data Log',
    path: '/dataLog',
    title: 'Data Log Page',
    component: DataLog,
  },
  {
    name: 'Firmware Upgrade',
    path: '/firmware',
    title: 'Firmware Upgrade Page',
    component: FirmwareUpgrade,
  },
];

export default routers;
