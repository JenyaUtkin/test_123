import React from 'react'
import Box from '@mui/material/Box';
import Weather from './components/Weather'
import Time from './components/Time'
import SelectCity from './components/SelectCity';

export default function App() {
  return (
    <>
    <Box  sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
      <SelectCity/>
      <Time/>
      <Weather/>
    </Box>
    </>
    
  )
}

