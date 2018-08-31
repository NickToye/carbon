import React from 'react';
import PropTypes from 'prop-types';
import ColourList from './ColourList';

class ColourIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    
  }

  render() {
    return (
      <section className="u-margin-bottom-huge">
        <header>
          <h2 className="u-margin-none">Colours</h2>
          <p>The colour palette contains Brand, Neutral and Utility colours used throughout the design system.</p>
        </header>
        <ColourList />
      </section>
    );
  }
}

ColourIndex.propTypes = {
  prop: PropTypes.string,
};

export default ColourIndex;


    