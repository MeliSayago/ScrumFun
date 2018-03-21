import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './react/containers/App';
import CreateSesionContainer from './react/containers/CreateSesionContainer'
import store from './react/store';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter, Route,Switch } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/createsesion" component={CreateSesionContainer} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
