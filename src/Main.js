import React from 'react';

import styles from './Main.module.css';

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.text1}>
          <span>Привет!</span>
          <span>Я Иванов Иван</span>
          <span>Я front-end developer</span>
        </div>
        <div className={styles.photo}>

        </div>
      </div>
    </div>
  );
}

export default Main;
