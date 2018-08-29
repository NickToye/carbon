import React, { Component } from 'react';
import logo from '../../logo.svg';
import styles from './App.scss';

import Button from '../../components/Button/Button';
import Link from '../../components/Link/Link';

class App extends Component {  
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    console.log('clicked');
  }
  

  
  render() {
    
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h1 className={styles.title}>Welcome to React</h1>
        </header>
        <p className={styles.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <Button 
          type='Primary' 
          size='Large' 
          soft={true} 
          action={this.handleClick}
        >
          Getting started
        </Button>
        
        <Link>
          This is a link 
        </Link>
        
        
      
      </div>
    );
  }
}

export default App;
