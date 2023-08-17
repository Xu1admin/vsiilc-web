import React,{ FC } from 'react'
import ControlSwitch from '../../components/controlSwitch'
import './index.scss'

const Home:FC<any> = () => {
  return (
    <div className='home-page'>
      <div className="col-item">
        <div className="title-info">
          <span className="button gradient-title">System Status</span>
          <span className="label defaultText">Heartbeat</span>
          <span className="danger-valueText">98</span>
        </div>
        <div className="echart"></div>

        <div className="table-list">
          <div className="label">Volt</div>
          <div className="control">1</div>
        </div>
        <div className="table-list">
          <div className="label">SoC</div>
          <div className="control">2</div>
        </div>
        <div className="table-list">
          <div className="label">Charge Rate</div>
          <div className="control">3</div>
        </div>
        <div className="table-list">
          <div className="label">Discharge Rate</div>
          <div className="control">4</div>
        </div>
        <div className="table-list">
          <div className="label">System Status</div>
          <div className="control">
            <span className="danger-valueText">Discharging</span>
          </div>
        </div>
        <div className="table-list">
          <div className="label">Active Faults</div>
          <div className="control">
            <p className="warning-valueText">Excessive inter-string current</p>
            <p className="date defaultText">7/1/2023 9:10:05</p>
          </div>
        </div>
        <div className="table-list">
          <div className="label">Past Faults</div>
          <div className="control">
            <p className="warning-valueText">BCMS Communication Failure</p>
            <p className="date defaultText">7/1/2023 9:10:05</p>
          </div>
        </div>
        <div className='control-page'>
          <div className='control-box'>
            <div className='control-list'>
              <div className='label'>ALL Contactor Command</div>
              <div className='control-button'>
                <ControlSwitch />
              </div>
            </div>
            <div className='control-list'>
              <div className='label'>Fault Reset</div>
              <div className='control-button'>
                <div className='reset-button'>Reset</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-item">
        <div className="title-info">
          <span className="button gradient-title">String Status</span>
          <span className="defaultText">Heartbeat</span>
          <span className="danger-valueText">98</span>
        </div>
        <div className="echart"></div>

        <div className="table-list">
          <div className="label">Volt</div>
          <div className="control">1</div>
          <div className="control">1</div>
        </div>
        <div className="table-list">
          <div className="label">SoC(%)</div>
          <div className="control">2</div>
          <div className="control">2</div>
        </div>
        <div className="table-list" style={{alignItems: 'center'}}>
          <div className="label">Contactor Status</div>
          <div className="control contactor"><ControlSwitch /></div>
          <div className="control contactor"><ControlSwitch /></div>
        </div>
        <div className="table-list gradient" style={{alignItems: 'center'}}>
          <div className="label">Contactor Command </div>
          <div className="control contactor"><ControlSwitch /></div>
          <div className="control contactor"><ControlSwitch /></div>
        </div>
        <div className="table-list">
          <div className="label">Cell V Max (volts)</div>
          <div className="center control">
            <span className="defaultText">11.5, Cell #”X”</span>
          </div>
          <div className="center control">
            <span className="defaultText">11.5, Cell #”X”</span>
          </div>
        </div>
        <div className="table-list">
          <div className="label">Cell V Min (volts)</div>
          <div className="center control">
            <span className="defaultText">11.5, Cell #”X”</span>
          </div>
          <div className="center control">
            <span className="defaultText">11.5, Cell #”X”</span>
          </div>
        </div>
        <div className="table-list">
          <div className="label">Cell T Max (C)</div>
          <div className="center control">
            <span className="defaultText">11.5, Cell #”X”</span>
          </div>
          <div className="center control">
            <span className="defaultText">11.5, Cell #”X”</span>
          </div>
        </div>
        <div className="table-list">
          <div className="label">Cell T Min (C)</div>
          <div className="center control">
            <span className="defaultText">11.5, Cell #”X”</span>
          </div>
          <div className="center control">
            <span className="defaultText">11.5, Cell #”X”</span>
          </div>
        </div>
        <div className="table-list">
          <div className="label">System Status</div>
          <div className="center control">
            <span className="danger-valueText">Discharging</span>
          </div>
          <div className="center control">
            <span className="danger-valueText">Discharging</span>
          </div>
        </div>
        <div className="table-list">
          <div className="label">Active Faults</div>
          <div className="control">
            <p className="warning-valueText">Excessive inter-string current</p>
            <p className="defaultText">7/1/2023 9:10:05</p>
          </div>
          <div className="control">
            <p className="warning-valueText">Excessive inter-string current</p>
            <p className="defaultText">7/1/2023 9:10:05</p>
          </div>
        </div>
        <div className="table-list">
          <div className="label">Past Faults</div>
          <div className="control">
            <p className="warning-valueText">BCMS Communication Failure</p>
            <p className="defaultText">7/1/2023 9:10:05</p>
          </div>
          <div className="control">
            <p className="warning-valueText">BCMS Communication Failure</p>
            <p className="defaultText">7/1/2023 9:10:05</p>
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default Home