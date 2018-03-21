import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './react/containers/App';
import store from './react/store';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
