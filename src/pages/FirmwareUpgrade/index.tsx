import React, { FC } from 'react';
import { Icons, Image } from '../../assets/image';
import './index.scss';

const FirmwareUpgrade: FC<any> = () => {
  return (
    <div className="FirmwareUpgrade-page">
        <div className="page-cell" style={{marginLeft: 200}}>
            <div className="firmware-header">
                <span>Firmware Management</span>
            </div>
            <div className="info">
                <span>Current Firmware</span>
                <span className="version">6.x.x</span>
                <span>Updated: March 3, 2023</span>
            </div>
            <div className="control">
                <div className="enterBtn">Select a file to update</div>

                <div className="event defaultButton">Upload</div>
                <div className="event warningButton">Start Update</div>
            </div>
        </div>
        
        <div className="page-cell">
            <div className="firmware-header">
                <span>SD Card Management</span>
            </div>
            <div className="info">
                <div className="event defaultButton">Format SD Card</div>
            </div>
        </div>
    </div>
  );
};

export default FirmwareUpgrade;
