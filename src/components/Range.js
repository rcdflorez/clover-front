import React, { useState, useEffect, useRef } from 'react';
import '../styles/range.css'

export default function Range({ min, max, step }) {
  const [value, setValue] = useState(min);
  const sliderInputRef = useRef(null);
  const sliderThumbRef = useRef(null);
  const sliderLineRef = useRef(null);

  useEffect(() => {
    if (sliderInputRef.current && sliderThumbRef.current && sliderLineRef.current) {
      const sliderInput = sliderInputRef.current;
      const sliderThumb = sliderThumbRef.current;
      const sliderLine = sliderLineRef.current;
      
      const newVal = Number(((value - min) * 100) / (max - min));
      const bulletPosition = (value / sliderInput.max);
      const space = sliderInput.offsetWidth - sliderThumb.offsetWidth;
      
      sliderThumb.innerHTML = `$${value}`; // Add $ symbol here
      sliderThumb.style.left = `${bulletPosition * space}px`;
      sliderLine.style.width = `${newVal}%`;
    }
  }, [value, min, max]);

  useEffect(() => {
    const handleResize = () => {
      if (sliderInputRef.current) {
        const event = new Event('input', { bubbles: true });
        sliderInputRef.current.dispatchEvent(event);
      }
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
      <div className="range-slider">
        <div
          ref={sliderThumbRef}
          className="range-slider_thumb"
          style={{ 
            left: `calc(${(value - min) * 100 / (max - min)}% + (${8 - (value - min) * 100 / (max - min) * 0.15}px))` 
          }}
        >
          ${value} {/* Add $ symbol here */}
        </div>
        <div className="range-slider_line">
          <div ref={sliderLineRef} className="range-slider_line-fill"></div>
        </div>
        <input
          ref={sliderInputRef}
          className="range-slider_input"
          type="range"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={handleChange}
        />
      </div>
      <button className="sm:w-[50%] xs:w-[100%] sm:ml-10 xs:ml-0 mt-8 sm:mt-1 xs:mx-auto xs:text-xl lg:text-xs successApplyBtn hover:shadow-lg text-white spy-1 px py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 bg-[#00D35B]">
        Apply
      </button>
    </div>
  );
}
