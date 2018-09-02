import React from 'react';
import PropTypes from 'prop-types';
// import Button from './Button';


class ImageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    
  }

  render() {
    return (
      <section className="u-margin-bottom-huge">
        <header>
          <h2 className="u-margin-none">Images</h2>
          <p>Images in various aspect ratios.</p>
        </header>
      </section>
    );
  }
}

ImageIndex.propTypes = {
  prop: PropTypes.string,
};

export default ImageIndex;


    