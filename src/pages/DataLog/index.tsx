import React, { FC } from 'react';
import { Icons, Image } from '../../assets/image';
import './index.scss';

const DataLog: FC<any> = () => {
  const topLogs = ['March 1, 2023, 3:30:45 AM'];
  const faultLogs = [
    'March 1, 2023, 3:30:45 AM',
    'March 1, 2023, 3:30:45 AM',
    'March 1, 2023, 3:30:45 AM',
    'March 1, 2023, 3:30:45 AM',
  ];

  return (
    <div className="DataLog-page">
      <div className="content-box">
        <div className="dataLog-item">
          <div className="dataLog-header">
            <span className="tit">On Demand Logs</span>
            <div className="control"></div>
          </div>
          <div className="content">
            <div className="content-cell">
              <div className="enterBtn">Enter Sampling Rate in ms</div>
            </div>
            <div className="content-cell">
              <div className="event successButton">Start Log</div>
              <div className="event warningButton">Stop Log</div>
              <div className="event defaultButton">
                Download On Demand Data Logs
              </div>
            </div>
          </div>
        </div>
        <div className="dataLog-item">
          <div className="dataLog-header">
            <span className="tit">Regular Data Logs</span>
            <div className="control"></div>
          </div>
          <div className="content">
            <div className="content-cell">
              <div className="date-picker">
                <span>Select a date</span>
                <Icons.datePick />
              </div>
            </div>
            <div className="content-cell">
              <div className="event defaultButton">
                Download On Demand Data Logs
              </div>
              <div className="event defaultButton">Save File Mid Month</div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-box">
        <div className="dataLog-item">
          <div className="dataLog-header">
            <span className="tit">Event History</span>
            <div className="control"></div>
          </div>
          <div className="content">
            <div className="content-cell">
              <div className="downEvent defaultButton">
                Download Event History
              </div>
            </div>
          </div>
        </div>
        <div className="dataLog-item">
          <div className="dataLog-header">
            <span className="tit">Top of Charge/Discharge Logs</span>
            <div className="control">
              <div className="down defaultButton">Download TOP Logs</div>
            </div>
          </div>
          <div className="list-content">
            {topLogs.map((item, index) => {
              return (
                <div className="list" key={index}>
                  <span className="index">{index + 1}</span>
                  <span className="info">{item}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="dataLog-item">
          <div className="dataLog-header">
            <span className="tit">Fault Triggered Data Logs</span>
            <div className="control">
              <div className="down defaultButton">Download Fault Logs</div>
            </div>
          </div>
          <div className="list-content">
            {faultLogs.map((item, index) => {
              return (
                <div className="list" key={index}>
                  <span className="index border">{index + 1}</span>
                  <span className="info">{item}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataLog;
