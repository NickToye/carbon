import React from 'react';
import PropTypes from 'prop-types';
// import Button from './Button';


class FontIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    
  }

  render() {
    return (
      <section className="u-margin-bottom-huge">
        <header>
          <h2 className="u-margin-none">Fonts</h2>
          <p>These are all the fonts used throughout the design system.</p>
        </header>
      </section>
    );
  }
}

FontIndex.propTypes = {
  prop: PropTypes.string,
};

export default FontIndex;


    