import React from 'react'  
import {InputLabel, Grid, FormControl, Select, MenuItem, Box} from '@mui/material';
import { useDispatch } from 'react-redux';
import { fetchAsyncWeather } from '../Redux/WeatherSlice/weatherSlice';

const cities = [
  'Moscow',
  'Volgograd',
  'Minsk',
  'Sochi',
  'Kazan',
]


export default function SelectCity() {
  const dispatch = useDispatch()
  const selectHandler = (e) => {
    dispatch(fetchAsyncWeather(e.target.value))
  }

  return (
    <Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
  >
    <Box sx={{ minWidth: 220 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="City"
          onChange={selectHandler}
        >
          {cities.map((city,index)=> {
            return <MenuItem key={index} value={city}>{city}</MenuItem>
          })}
        </Select>
      </FormControl>
    </Box>
    </Grid>
  )
}

