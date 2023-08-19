import React, { FC } from 'react';
import './index.scss';

const System: FC<any> = () => {


    const dataSouce = [
        { index: 1, info: 'Rated Capacity (Ah) ', value: 190 },
        { index: 2, info: 'Filter Time (seconds)  ', value: 230 },
    ]
    return <div className='router-system-page'>
      <div className='control-header'>
        <div className='enterBtn'>Read</div>
        <div className='write warningButton'>Write</div>
        <div className='errInfo'>
            <p>Clicking on write should have a pop-up message confirming write operation is intended. Once</p>
            <p>Write operation is performed, wait few seconds and click on “read” to read updated values</p>
        </div>
      </div>
      <div className='table-container'>
        <div className='table-thead'>
          <div className='column index'>
            <span>#</span>
          </div>
          <div className='column info'>
            <span>Config Parameter</span>
          </div>
          <div className='column value'>
            <span style={{verticalAlign: '-12px'}}>Value</span>
          </div>
          <div className='column value'>
            <p>Enter New</p>
            <p>Value</p>
          </div>
        </div>
        <div className='table-tbody'>
          {
            dataSouce.map(item => {
              return (
                <div key={item.index} className='table-row'>
                  <span className='index cell'>{ item.index }</span>
                  <span className='info cell'>{ item.info }</span>
                  <span className='value cell'>{ item.value }</span>
                  <span className='value cell'>{ item.value }</span>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
}


export default System;
