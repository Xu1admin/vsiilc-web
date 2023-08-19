import React, { FC } from 'react';
import './index.scss';

const SystemClock: FC<any> = () => {


    return <div className='SystemClock-page'>
        
        <div className='address-from'>
            <div className='address-lable'>Current Date/Time</div>
            <div className='address-value'>March 22, 2023 – 9:23:12 AM</div>
        </div>
        <div className='address-from'>
            <div className='address-lable'>Enter New Date/Time</div>
            <div className='address-value'>-----------------</div>

            <div className="event defaultButton">Save</div>
        </div>
    </div>
}


export default SystemClock;
