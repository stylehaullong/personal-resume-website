'use client'

import { useState } from 'react'
import './globals.css'
import Navbar from './components/NavBar'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

if (typeof Promise.withResolvers === 'undefined') {
  (Promise as any).withResolvers = function () {
    let resolve!: (value: unknown) => void;
    let reject!: (reason?: any) => void;
    const promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return { promise, resolve, reject };
  };
}

const theme = createTheme({
  palette: {
    background: {
      default: '#ffffff',
    },
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isNavOpen, setIsNavOpen] = useState(true)

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="flex h-screen overflow-hidden bg-white">
            <Navbar isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
            <main className={`flex-1 overflow-hidden transition-all duration-300 ${isNavOpen ? 'ml-64' : 'ml-16'}`}>
              <div className="h-full overflow-x-auto overflow-y-auto p-6">
                {children}
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}