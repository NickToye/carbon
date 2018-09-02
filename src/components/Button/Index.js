import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';


class ButtonIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    console.log('clicked');
  }

  render() {
    return (
      <section className="u-margin-bottom-huge">
        <header>
          <h2 className="u-margin-none">Buttons</h2>
          <p>All the various button patterns used in the design system.</p>
        </header>
        
        <Button 
          type='Primary'
          action={this.handleClick}
        >Primary Standard</Button>
      </section>
    );
  }
}

ButtonIndex.propTypes = {
  prop: PropTypes.string,
};

export default ButtonIndex;