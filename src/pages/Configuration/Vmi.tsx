import React, { FC, useState } from 'react';
import { Icons, Image } from '../../assets/image';
import './index.scss';

type IDATASOUCE = {
    [propName:string]: any;
}

const vmiDataList:IDATASOUCE[] = [
    { name: 'Number Cells 15 ', vmi: true, v: true, t: true },
    { name: 'Number Cells 15 ', vmi: true, v: true, t: true },
    { name: 'Number Cells 15 ', vmi: true, v: true, t: true },
    { name: 'Number Cells 15 ', vmi: true, v: true, t: true },
    { name: 'Number Cells 15 ', vmi: true, v: true, t: true },
    { name: 'Number Cells 15 ', vmi: true, v: true, t: true },
    { name: 'Number Cells 15 ', vmi: true, v: true, t: true },
    { name: 'Number Cells 15 ', vmi: true, v: true, t: true },
    { name: 'Number Cells 15 ', vmi: true, v: true, t: true },
    { name: 'Number Cells 15 ', vmi: true, v: true, t: true }
]
const VMI: FC<any> = () => {
    const [dataSouce,setDataSouce] = useState<IDATASOUCE[]>(vmiDataList)


    const change = (index:number,type:string) => {
        setDataSouce(state => {
            const newState = state.map((item,t) => {
                if(t === index){
                    return {...item,[type]:!item[type]}
                } else {
                    return {...item}
                }
            })
            return newState
        })
    }

    return <div className='router-Vmi-page'>
        <div className='control-header'>
            <div className='enterBtn'>Read</div>
            <div className='write warningButton'>Write</div>
        </div>
        <div className='vmi-list-box'>
            {
                dataSouce.map((item,index) => {
                    return (
                        <div key={index} className='vmi-control-item'>
                            <div onClick={() => change(index,'vmi')} className='checked-label'>
                                <div className='check-icon'>{ item.vmi ? <Icons.check /> : null }</div>
                                <div className='name'>VMI {index+1}</div>
                            </div>
                            <div onClick={() => change(index,'v')} className='checked-label'>
                                <div className='check-icon'>{ item.v ? <Icons.check /> : null }</div>
                                <div className='name'>V Tap</div>
                            </div>
                            <div onClick={() => change(index,'t')} className='checked-label'>
                                <div className='check-icon'>{ item.t ? <Icons.check /> : null }</div>
                                <div className='name'>T Tap</div>
                            </div>
                            <div className='name-tack threeEllipsis'>{ item.name }</div>
                        </div>
                    )
                })
            }
        </div>
    </div>
}


export default VMI;
