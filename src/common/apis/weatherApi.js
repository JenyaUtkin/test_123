import axios from "axios";

export default axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/'
})

//https://api.openweathermap.org/data/2.5/forecast?q=Moscow&appid=b6beb2c6d184d8cdd203d49cd8160a03
