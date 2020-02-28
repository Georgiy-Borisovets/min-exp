import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, ReactReduxContext } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import 'styles/index.scss';
import { ReactComponent as Sprite } from 'assets/sprite.svg';
import store, { history } from 'store/store';
import App from './App';

ReactDOM.render(
  <Provider store={store} context={ReactReduxContext}>
    <ConnectedRouter history={history} context={ReactReduxContext}>
      <Sprite />
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
