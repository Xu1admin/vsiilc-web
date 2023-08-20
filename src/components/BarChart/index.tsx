import React, { FC } from 'react';
import './index.scss'

const BarChart: FC<any> = (props: {
  width: number;
  height: number;
  value: number;
  unit: null | string;
}) => {
  const { width, height, value, unit } = props;
  const angle = ((value + 180) / 180) * Math.PI;

  const strokeWidth = 16
  return (
    <div className="bar-char-page">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        style={{ width: width + 'px', height: height + 'px' }}
      >
        <path
          fill="none"
          stroke="rgb(127,127,127)"
          strokeWidth={strokeWidth}
          d={`m0 ${height/2} L${width} ${height/2} `}
        />
        <path fill="none" stroke="rgb(146,208,80)" strokeWidth={strokeWidth} d={`m0 ${height/2} L${value} ${height/2} `} />
      </svg>
      <span className='value'>{ value }{ unit }</span>
    </div>
  );
};

export default BarChart;
