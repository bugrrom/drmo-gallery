import React from 'react';

import styles from './Footer.module.css';
import Social from "./Social";


function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <span>Иван Иванов</span>
        <div className={styles.container1}>
          <Social/>
          <Social/>
          <Social/>
          <Social/>
        </div>
        <span>2019 Все права защищены</span>
      </div>
    </div>
  );
}

export default Footer;
