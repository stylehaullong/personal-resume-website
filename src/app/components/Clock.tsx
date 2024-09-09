import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const secondsDegrees = (time.getSeconds() / 60) * 360;
  const minutesDegrees = ((time.getMinutes() + time.getSeconds() / 60) / 60) * 360;
  const hoursDegrees = ((time.getHours() % 12 + time.getMinutes() / 60) / 12) * 360;

  return (
    <svg width="100" height="100" viewBox="0 0 100 100">
      {/* Clock face */}
      <circle cx="50" cy="50" r="45" fill="white" stroke="#333" strokeWidth="2" />
      
      {/* Hour markers */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x1 = 50 + 40 * Math.sin(angle);
        const y1 = 50 - 40 * Math.cos(angle);
        const x2 = 50 + 45 * Math.sin(angle);
        const y2 = 50 - 45 * Math.cos(angle);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#333" strokeWidth="2" />;
      })}
      
      {/* Hour hand */}
      <line
        x1="50"
        y1="50"
        x2="50"
        y2="25"
        stroke="#333"
        strokeWidth="4"
        strokeLinecap="round"
        transform={`rotate(${hoursDegrees}, 50, 50)`}
      />
      
      {/* Minute hand */}
      <line
        x1="50"
        y1="50"
        x2="50"
        y2="15"
        stroke="#666"
        strokeWidth="3"
        strokeLinecap="round"
        transform={`rotate(${minutesDegrees}, 50, 50)`}
      />
      
      {/* Second hand */}
      <line
        x1="50"
        y1="50"
        x2="50"
        y2="10"
        stroke="red"
        strokeWidth="1"
        strokeLinecap="round"
        transform={`rotate(${secondsDegrees}, 50, 50)`}
      />
      
      {/* Center dot */}
      <circle cx="50" cy="50" r="3" fill="#333" />
    </svg>
  );
};

export default Clock;