import 'babel-polyfill';
import React from 'react';
// import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
// import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import routes from './routes';
// import rootReducer from './reducers';

import { loadColours, loadTones } from './actions/colourActions';

import './styles/index.scss';
import App from './containers/App/App';



// const history = createBrowserHistory();

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = configureStore();

store.dispatch(loadColours());
store.dispatch(loadTones());

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// const render = () => {
//   ReactDOM.render(
//     <AppContainer>
//       <Provider store={store}>
//         <App history={history} />
//       </Provider>
//     </AppContainer>,
//     document.getElementById('root')
//   )
// }

// render();
// 
// // Hot reloading
// if (module.hot) {
//   // Reload components
//   module.hot.accept('./containers/App/App', () => {
//     render()
//   })
// 
//   // Reload reducers
//   module.hot.accept('./reducers', () => {
//     store.replaceReducer(connectRouter(history)(rootReducer))
//   })
// }