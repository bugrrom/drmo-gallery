import React from 'react';

import styles from './Footer.module.css';


function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <span>Иван Иванов</span>
        <div className={styles.container1}>
          <div className={styles.container11}></div>
          <div className={styles.container12}></div>
          <div className={styles.container11}></div>
          <div className={styles.container12}></div>
          <div className={styles.container11}></div>
          <div className={styles.container12}></div>
          <div className={styles.container11}></div>
        </div>
        <span>2019 Все права защищены</span>
      </div>
    </div>
  );
}

export default Footer;
