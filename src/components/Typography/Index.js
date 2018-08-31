import React from 'react';
import PropTypes from 'prop-types';
// import Button from './Button';


class TypographyIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    
  }

  render() {
    return (
      <section className="u-margin-bottom-huge">
        <header>
          <h2 className="u-margin-none">Typography</h2>
          <p>All the typographical elements used throughout the design system.</p>
        </header>
      </section>
    );
  }
}

TypographyIndex.propTypes = {
  prop: PropTypes.string,
};

export default TypographyIndex;


    