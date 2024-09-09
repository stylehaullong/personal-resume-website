'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const ThreeMonitor = dynamic(() => import('./ThreeMonitorClient'), { ssr: false });

interface MonitorProps {
  x: number;
  y: number;
}

const Monitor: React.FC<MonitorProps> = ({ x, y }) => {
  return <ThreeMonitor x={x} y={y} />;
};

export default Monitor;