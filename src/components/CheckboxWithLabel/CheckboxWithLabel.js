import React from 'react';
import PropTypes from 'prop-types';

class CheckboxWithLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isChecked: false};
    
    this.onChange = this.onChange.bind(this);
  }
  
  onChange() {
    this.setState(prevState => ({isChecked: !prevState.isChecked}));
  }

  render() {
    return (
      <label>
        <input 
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    );
  }
}

CheckboxWithLabel.propTypes = {
  prop: PropTypes.string,
};

export default CheckboxWithLabel;