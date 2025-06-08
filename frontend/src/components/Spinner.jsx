import React from 'react';
import './Spinner.css'; // Create this CSS file for animations

const Spinner = ({ size = 'medium', color = '#3b82f6', variant = 'dots' }) => {
  // Size classes
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  // Spinner variants
  const spinnerVariants = {
    dots: (
      <div className={`spinner-dots ${sizeClasses[size]}`}>
        <div style={{ backgroundColor: color }}></div>
        <div style={{ backgroundColor: color }}></div>
        <div style={{ backgroundColor: color }}></div>
      </div>
    ),
    ring: (
      <div 
        className={`spinner-ring ${sizeClasses[size]}`}
        style={{ borderColor: `${color} transparent transparent transparent` }}
      ></div>
    ),
    bars: (
      <div className={`spinner-bars ${sizeClasses[size]}`}>
        <div style={{ backgroundColor: color }}></div>
        <div style={{ backgroundColor: color }}></div>
        <div style={{ backgroundColor: color }}></div>
      </div>
    ),
    infinity: (
      <div className={`spinner-infinity ${sizeClasses[size]}`}>
        <svg viewBox="0 0 100 100">
          <path 
            fill="none" 
            stroke={color} 
            strokeWidth="8" 
            d="M20,50 C20,-50 80,150 80,50 C80,-50 20,150 20,50 Z" 
          />
        </svg>
      </div>
    )
  };

  return (
    <div className="flex justify-center items-center">
      {spinnerVariants[variant] || spinnerVariants.dots}
    </div>
  );
};

export default Spinner;