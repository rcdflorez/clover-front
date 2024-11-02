import React, { useState, useEffect, useRef } from 'react';
import '../styles/range.css';

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
      
      // const newVal = Number(((value - min) * 100) / (max - min));
      const bulletPosition = (value - min) / (max - min);
      const space = sliderInput.offsetWidth - sliderThumb.offsetWidth;

      sliderThumb.innerHTML = `$ ${value}.00`;
      sliderThumb.style.left = `${bulletPosition * space}px`;
      sliderLine.style.width = `${bulletPosition * space}px`;
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
    <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 md:gap-0 lg:gap-12'>
      <div className="range-slider mt-[35px] md:mt-[55px]">
        <div
          ref={sliderThumbRef}
          className="range-slider_thumb w-[130px] md:w-[170px]"
          style={{ 
            left: `calc(${(value - min) * 100 / (max - min)}% - (${8 - (value - min) * 100 / (max - min) * 0.15}px))` 
          }}
        >
          {value}
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
    </div>
  );
}
