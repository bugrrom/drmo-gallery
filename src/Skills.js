import React from 'react';

import styles from './Skills.module.css';

function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.interiorContainer0}>
          <span>Мой скилл</span>
        </div>


        <div className={styles.interiorContainer}>
          <div className={styles.interiorContainer1}></div>
          <div className={styles.interiorContainer2}></div>
          <div className={styles.interiorContainer3}>
            <div className={styles.interiorContainer31}></div>
          </div>
          <div className={styles.interiorContainer2}></div>
          <div className={styles.interiorContainer3}>
            <div className={styles.interiorContainer32}>
              <div className={styles.interiorContainer321}></div>
              <span>React</span>
            </div>
            <div className={styles.interiorContainer31}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
