import React from 'react';
import { getAllWeather } from '../Redux/WeatherSlice/weatherSlice';
import { useSelector } from 'react-redux';
import {Button, Grid} from '@mui/material';



export default function Weather() {

  const [weather, setWeather] =  React.useState({
    name: '',

  });

  const weatherApi = useSelector(getAllWeather)
  

  // React.useEffect(() => {
  //   setWeather(weatherApi)
  // }, [])

  return (
    <>
      <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      >
        <Button variant="contained">
          Погода
        </Button>
      </Grid>
    </>
  )
}
