import React from 'react';
import { AppContainer } from 'react-hot-loader';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import rootReducer from './reducers';

import { loadColours, loadTones } from './actions/colourActions';

import './styles/index.scss';
import App from './containers/App/App';

import Home from './containers/App/Home';
import Atoms from './containers/App/Atoms';
import Molecules from './containers/App/Molecules';
import Organisms from './containers/App/Organisms';
import Templates from './containers/App/Templates';
import Pages from './containers/App/Pages';

const history = createBrowserHistory();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
    ),
  ),
);

// store.dispatch(loadColours());
// store.dispatch(loadTones());

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}

render();

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./App', () => {
    render()
  })

  // Reload reducers
  module.hot.accept('./reducers', () => {
    store.replaceReducer(connectRouter(history)(rootReducer))
  })
}