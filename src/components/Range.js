import React, { useState, useEffect } from 'react';
import * as rangeStyle from '../styles/range.module.css';

export default function Range({ min, max, step }) {
  
  const [value, setValue] = useState((min + max) / 2);
  const [bubblePosition, setBubblePosition] = useState('50%');

  useEffect(() => {
    const newVal = Number(((value - min) * 100) / (max - min));
    setBubblePosition(`calc(${newVal}% + (${8 - newVal * 0.15}px))`);
  }, [value, min, max]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
      <div className={`${rangeStyle.rangeWrap}`}>
        <input
          type="range"
          className="range"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={handleChange}
        />
        <div className="bubble" style={{ left: bubblePosition }}>
          {`$ ${value}.00`}
        </div>
      </div>
      <button className="w-[50%] h-[30px] ml-10 mt-1 text-xs successApplyBtn hover:shadow-lg text-white py-1 px rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          Apply
      </button>
    </div>
  );
};


