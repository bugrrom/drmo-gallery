import React from 'react';

import styles from './Progect.module.css';
import MyProject from "./MyProject";


function Project() {
  return (
    <div className={styles.project}>

      <div className={styles.container}>
        <div className={styles.text}>
          <p>Мои работы</p>
        </div>
        <div className={styles.myproject}>
          <MyProject/>
          <MyProject/>
        </div>

      </div>
    </div>
  );
}

export default Project;
