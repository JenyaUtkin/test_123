import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css'
import { Provider } from 'react-redux'
import { store } from './Redux/store';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    text: {
      primary: '#bebebe',
    },
    mode: 'dark',
    background: {
      default: '#1d1d1d',
      paper: '#121212',
    },
    primary: {
      main: '#bdbdbd',
    },
    secondary: {
      main: '#02dac5',
    },
  },
  
});


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <ThemeProvider theme={darkTheme}>
      <App />
  </ThemeProvider>
  </Provider>
);
