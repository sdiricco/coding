import React from 'react';
import styles from './Button.module.css';

class Button extends React.Component {
  render(){
    return(
      <div className={styles.BtnContainer}>
        <button className={styles.BtnRounded}>compra</button>
      </div>
    );
  }
}

export default Button;
