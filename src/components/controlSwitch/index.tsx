import React, { FC, useState } from 'react';
import './index.scss';

const ControlSwitch: FC<any> = (props: {
  value: boolean;
}) => {
  const { value } = props;
  const [checked,setChecked] = useState(value)

  const handleChecke = () => {
    setChecked(state => !state)
  }

  return (
    <div className="switch-bg" onClick={handleChecke}>
        <div
            className={`switch-handle ${checked ? 'checked' : ''}`} 
        >
            {checked ? 'Open' : 'Close'}
        </div>
    </div>
  );
};


export default ControlSwitch;
