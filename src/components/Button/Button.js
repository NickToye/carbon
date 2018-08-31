import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.scss';

class Button extends React.Component {
  
  
  
  
  render() {
    const cx = classNames.bind(styles),
          size = this.props.size,
          type = this.props.type,
          btnClass = cx(
            size,
            type, 
            {
              Button: true,
              Soft: this.props.soft,
            },
            `c-btn`
          );
    
    return (
      <button 
        className={btnClass} 
        onClick={this.props.action}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  prop: PropTypes.string,
  action: PropTypes.func
};

export default Button;