import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from './WeatherSlice/weatherSlice'

export const store = configureStore({
  reducer: {
    weather: weatherReducer
  },
})
