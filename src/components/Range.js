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
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2'>
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
      <div>
        <button className="hover:shadow-lg text-white rounded-md bg-[#00D35B] py-2 px-4 lg:py-1 w-full md:w-[25%] lg:w-[35%]">Apply</button>
      </div>
    </div>
  );
}
