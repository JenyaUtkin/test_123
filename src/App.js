import React from 'react'
import WeatherCard from './components/WeatherCard'
import Time from './components/Time'
import SelectCity from './components/SelectCity';
import { Paper } from '@mui/material';
import Container from '@mui/material/Container';
import './style.css'
export default function App() {
  
  return (

    <Paper className="paper">
      <Container fixed>
      <br/>
      <SelectCity/>
      <br/>
      <Time/>
      <br/>
      <WeatherCard/>
      </Container>
    </Paper>
    
  )
}

