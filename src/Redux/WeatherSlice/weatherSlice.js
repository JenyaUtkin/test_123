import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const fetchAsyncWeather = createAsyncThunk('weather/fetchAsyncWeather', async (city) => {
    const response = await axios(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b6beb2c6d184d8cdd203d49cd8160a03`)
    console.log(response.data)
    return response.data
})

const initialState = {
    weather: {},
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAsyncWeather.pending]: () => {
            console.log('Pending')
        },
        [fetchAsyncWeather.fulfilled]: (state, { payload }) => {
            console.log('Fetched Success!')
            return {...state, weather: payload}
        },
    }
})

export const getAllWeather = (state) => state.weather.weather
export default weatherSlice.reducer
