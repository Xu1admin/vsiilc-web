import React, { FC, useState } from 'react';
import { Icons, Image } from '../../assets/image';
import System from './system';
import Vmi from './Vmi';
import Address from './address';
import SystemCLock from './SystemClock';

import './index.scss';

const Configuration: FC<any> = () => {
    const [key,setKey] = useState(2)

    const handleSwitchRoute = (key:number) => {
        setKey(key)
    }

    const switchElement = (key:number) => {
        switch (key) {
            case 2:
                return <System />
                break;

            case 3:
                return <Vmi />
                break;
        
            case 4:
                return <Address />
                break;
        
            case 5:
                return <SystemCLock />
                break;
        
            default:
                break;
        }
    }
    return <div className='Configuration-page'>
        <div className='header-switch-router'>
            <div onClick={() => handleSwitchRoute(1)} className={`config-switch-link gradient-title ${key==1?'active':''}`}>Protection Parameter</div>
            <div onClick={() => handleSwitchRoute(2)} className={`config-switch-link gradient-title ${key==2?'active':''}`}>System Parameter </div>
            <div onClick={() => handleSwitchRoute(3)} className={`config-switch-link gradient-title ${key==3?'active':''}`}>VMI Config</div>
            <div onClick={() => handleSwitchRoute(4)} className={`config-switch-link gradient-title ${key==4?'active':''}`}>IP Address</div>
            <div onClick={() => handleSwitchRoute(5)} className={`config-switch-link gradient-title ${key==5?'active':''}`}>System Clock</div>
        </div>
        <div className='switch-route-childer'>
            { switchElement(key) }
        </div>
    </div>
}


export default Configuration;
