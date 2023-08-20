import React, { FC } from 'react';
import './index.scss'

const GaugeChart: FC<any> = (props: {
  width: number;
  height: number;
  value: number;
}) => {
  const { width, height, value } = props;
  const angle = ((value + 180) / 180) * Math.PI;

  const svgRadius = height;
  const svgStartX = 20;
  const svgStartY =  width / 2.2;

  // 圆心坐标
  const x0 = svgRadius + svgStartX;
  const y0 = svgStartY;

  const endX = x0 + svgRadius * Math.cos(angle)
  const endY = y0 + svgRadius * Math.sin(angle)
  return (
    <div className="char-page" style={{ width: width + 'px', height: height + 'px' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        style={{ width: width + 'px', height: height + 'px' }}
      >
        <path
          fill="none"
          stroke="rgb(127,127,127)"
          strokeWidth="14"
          d={`m${svgStartX} ${svgStartY} A${svgRadius} ${svgRadius} 0 0 1 ${svgStartX + 2 * svgRadius} ${svgStartY}`}
        />
        <path
            fill="none"
            stroke="rgb(146,208,80)"
            strokeWidth="14"
            d={`m${svgStartX} ${svgStartY} A${svgRadius} ${svgRadius} 0 0 1 ${endX} ${endY}`}
        />
      </svg>
      <span className='value'>{ value }</span>
    </div>
  );
};

export default GaugeChart;
