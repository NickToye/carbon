import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';

import Main from './Main';

const App = ({ history }) => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  )
}

App.propTypes = {
  history: PropTypes.object
}

export default App;