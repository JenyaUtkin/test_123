import React from 'react'  
import {InputLabel, Grid, FormControl, Select, MenuItem, Box} from '@mui/material';
import { useSelector } from 'react-redux';
import { getAllWeather } from '../Redux/WeatherSlice/weatherSlice';

const cities = [
  'Moscow',
  'Volgograd',
  'Lipeck',
  'Novosibirsk',
  'Ryazan',
]


export default function SelectCity() {
  const [city, setCity] = React.useState('');

  const selectHandler = (e) => {
    setCity(e.target.value)
  }
  const weather = useSelector(getAllWeather)
  console.log("SelectCity -> weather", weather)
  // React.useEffect(()=>{

  // },[])
//console.log('vity', city)
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
          value={city}
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

