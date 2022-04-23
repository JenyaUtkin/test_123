import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import weatherApi from '../../common/apis/weatherApi';
import axios from 'axios'

const url = `forecast?q=Moscow&appid=b6beb2c6d184d8cdd203d49cd8160a03`

const weatherFetch = createAsyncThunk('weather/weatherFetch', async () =>{
  const response = await axios('https://api.openweathermap.org/data/2.5/forecast?q=Moscow&appid=b6beb2c6d184d8cdd203d49cd8160a03')
  console.log("weatherFetch -> response", response.data)
  
  return response.data
})

const initialState = {
  weather: {},
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {

  },
  extraReducers: {
    [weatherFetch.pending] : () => {
      console.log('pending')
    },
    [weatherFetch.fulfilled] : (state, {payload}) => {
      console.log('Fethc')
      return {...state, weather: payload}
    }
  }
})


export const getAllWeather = (state) => state.weather.weather;

export default weatherSlice.reducer
