import React from 'react';
import PropTypes from 'prop-types';

class Palette extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Palette Component</h1>
      </div>
    );
  }
}

Palette.propTypes = {
  prop: PropTypes.string,
};

export default Palette;