import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Container from '@mui/material/Container';
import { Provider } from 'react-redux'
import { store } from './Redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Container fixed>
      <App />
    </Container>
  </Provider>,
  document.getElementById('root')
);
