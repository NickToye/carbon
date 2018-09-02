import React from 'react';
import PropTypes from 'prop-types';
// import Button from './Button';


class AnimationIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    
  }

  render() {
    return (
      <section className="u-margin-bottom-huge">
        <header>
          <h2 className="u-margin-none">Animation</h2>
          <p>Demonstration of the animations used on the page.</p>
        </header>
      </section>
    );
  }
}

AnimationIndex.propTypes = {
  prop: PropTypes.string,
};

export default AnimationIndex;


    