import React,{ FC } from 'react'
import { Icons, Image } from '../../assets/image'
import './index.scss'

const Home:FC<any> = () => {
  const dataSouce = [
    { index: 1, time: '7/1/2023 9:10:05', info: 'System Level - Excessive inter-string current', state: '3' },
    { index: 2, time: '7/1/2023 9:10:05', info: 'System Level - Excessive inter-string current', state: '2' },
    { index: 3, time: '7/1/2023 9:10:05', info: 'System Level - Excessive inter-string current', state: '1' }
  ]
  const classType:any = {
    '1': 'defaultText',
    '2': 'danger-valueText',
    '3': 'warning-valueText'
  }
  return (
    <div className='Alarm-page'>
      <div className='alarm-header'>
        <div className='con'>
          <span className='icon'><Icons.alarm  /></span>
          
          <span className="button gradient-title">Download Event History</span>
        </div>
      </div>
      <div className='table-container'>
        <div className='table-thead'>
          <div className='column index'>
            <span>#</span>
          </div>
          <div className='column date'>
            <span>Time</span>
          </div>
          <div className='column info'>
            <span>Fault</span>
          </div>
        </div>
        <div className='table-tbody'>
          {
            dataSouce.map(item => {
              return (
                <div key={item.index} className='table-row'>
                  <span className='index cell'>{ item.index }</span>
                  <span className='date cell'>{ item.time }</span>
                  <span className={`info cell ${classType[item.state]}`}>{ item.info }</span>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
  
export default Home