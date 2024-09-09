import React from 'react';
import dynamic from 'next/dynamic'

const ThreeScene = dynamic(() => import('./ThreeScene'), { ssr: false })

const DeskSetup: React.FC = () => {
  return (
    <div className="desk-setup-container">
      <ThreeScene />
    </div>
  );
};

export default DeskSetup;