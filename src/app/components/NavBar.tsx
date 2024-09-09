'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material'
import { Menu as MenuIcon, Home as HomeIcon, BarChart as BarChartIcon } from '@mui/icons-material'

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <Drawer
        variant="permanent"
        open={isOpen}
        sx={{
          width: isOpen ? 256 : 64,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: isOpen ? 256 : 64,
            boxSizing: 'border-box',
            transition: 'width 0.3s ease-in-out',
            overflowX: 'hidden',
          },
        }}
      >
        <div className="p-4 flex justify-between items-center">
          {isOpen && <h2 className="text-2xl font-bold">Dashboard</h2>}
          <IconButton onClick={() => setIsOpen(!isOpen)}>
            <MenuIcon />
          </IconButton>
        </div>
        <List>
          <ListItem button component={Link} href="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            {isOpen && <ListItemText primary="Home" />}
          </ListItem>
          <ListItem button component={Link} href="/About">
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            {isOpen && <ListItemText primary="About" />}
          </ListItem>
          <ListItem button component={Link} href="/live-analytics">
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            {isOpen && <ListItemText primary="Live Analytics" />}
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}

export default Navbar