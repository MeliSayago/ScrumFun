import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './react/containers/App';
import CreateSessionContainer from './react/containers/CreateSessionContainer';
import { store } from './Firebase';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
