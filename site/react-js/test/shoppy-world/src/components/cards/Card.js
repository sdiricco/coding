import React from 'react';
import styles from './Card.module.css'
import Button from '../buttons/Button';

class Card extends React.Component {
  static defaultProps={
    title:`Nome Prodotto`,
    shortDescription:`Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s`,
    longDescription:`Lorem Ipsum is simply dummy text of the printing and typesetting
                     industry. Lorem Ipsum has been the industry's standard dummy text
                     ever since the 1500s, when an unknown printer took a galley of type
                     and scrambled it to make a type specimen book. It has survived not
                     only five centuries, but also the leap into electronic typesetting,
                     remaining essentially unchanged. It was popularised in the 1960s
                     with the release of Letraset sheets containing Lorem Ipsum passages,
                     and more recently with desktop publishing software like Aldus
                     PageMaker including versions of Lorem Ipsum`,
  }
  constructor(props){
    super(props);
    this.props = props;
  }
  render(){
    return(
      <div className={styles.ShoppyCard}>
        <div className={styles.Header}>
          <h1>Shoppy</h1>
        </div>
        <div className={styles.Content}>
          <h2 className={`${styles.Title}
                          ${styles.TxtColorSecondary}
                          ${styles.TxtCenter}`}>
                          {this.props.title}
          </h2>
          <p className={`${styles.Txt}
                         ${styles.TxtColorSecondary}
                         ${styles.TxtCenter}`}>
                         {this.props.shortDescription}
          </p>
          <Button />
          <p className={`${styles.LongDescription}
                         ${styles.Txt}
                         ${styles.TxtColorPrimary}
                         ${styles.TxtJustify}`}>
                         {this.props.longDescription}
          </p>
        </div>
        <button className={styles.BtnCircle}> X </button>
      </div>
    );
  }
}

export default Card;
