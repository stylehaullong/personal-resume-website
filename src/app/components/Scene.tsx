'use client';

import DeskSetup from './DeskSetup'
import Clock from './Clock'

export default function Scene() {
  return (
    <div className="w-full max-w-4xl h-[600px] relative overflow-hidden rounded-lg shadow-lg">
      <DeskSetup />
    </div>
  )
}