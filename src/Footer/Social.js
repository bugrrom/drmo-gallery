import React from 'react';

import styles from './Social.module.css';


function Social() {
  return (
      <div className={styles.container}>
          <a className={styles.iconLn} href="https://www.linkedin.com/in/roman-bugakov-b27197184/"></a>
          <a className={styles.iconTel} href="#"></a>
      </div>
  );
}

export default Social;
