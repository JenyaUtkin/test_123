import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios'; 
import { Grid } from '@mui/material';
import { useSelector } from "react-redux";
import { getAllWeather} from '../Redux/WeatherSlice/weatherSlice';




export default function WeatherCard() {

  const weather = useSelector(getAllWeather)
  console.log("WeatherCard -> weather", weather)
  console.log("WeatherCard -> ", weather)
  let renderWeather = ''
  

  renderWeather = weather.cod === '200' ? (
    weather.list.slice(0, 5).map((el, index) => (
      <Grid 
        item xs={2}
        key={index}
      > 
        <Card sx={{ maxWidth: 150 , border: '1px solid white', borderRadius: '5%'}}>
        <CardMedia
            component="img"
            height="100"
            image={`http://openweathermap.org/img/wn/${el.weather[0].icon}.png`}
            alt={el.weather[0].main}
          />
        <CardContent>
          <Typography variant="h6" component="div">
            <p>{weather.city.name}</p>
          </Typography>
          <Typography >
            <p>{el.dt_txt}</p>
          </Typography>
          <Typography variant="h6" component="div">
            <p>Min t: {~~(el.main.temp_min - 273.15)} ℃</p>
            <p>Max t: {~~(el.main.temp_max - 273.15)} ℃</p>
          </Typography>
          
        </CardContent>
      </Card>
      </Grid>
    ))
    ) : ( <h1>Выбери город</h1> ) ;
  
  return (
    <>
    <Grid container rowSpacing={1}
    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    direction="row"
    justifyContent="center"
    alignItems="center"
    >
          {renderWeather}
    </Grid>
    </>
  );
}

