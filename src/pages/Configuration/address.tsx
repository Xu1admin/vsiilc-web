import React, { FC } from 'react';
import './index.scss';

const Address: FC<any> = () => {


    return <div className='ip-address-page'>
        <div className='address-from'>
            <div className='address-lable'>Current IP Address</div>
            <div className='address-value'>192.168.xx.xx</div>
        </div>
        <div className='address-from'>
            <div className='address-lable'>Enter New IP Address</div>
            <div className='address-value'>192.168.xx.xx</div>

            <div className="event defaultButton">Save</div>
            <div className="event warningButton">Reboot</div>
        </div>
    </div>
}


export default Address;
