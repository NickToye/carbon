import React from 'react';
import PropTypes from 'prop-types';
// import Button from './Button';


class FormControlIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    
  }

  render() {
    return (
      <section className="u-margin-bottom-huge">
        <header>
          <h2 className="u-margin-none">Form Controls</h2>
          <p>Various form controls used throughout the design system.</p>
        </header>
      </section>
    );
  }
}

FormControlIndex.propTypes = {
  prop: PropTypes.string,
};

export default FormControlIndex;


    