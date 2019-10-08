import React from 'react';

import styles from './Progect.module.css';


function Project() {
  return (
    <div className={styles.project}>
      <div className={styles.container}>
        <span>Мои работы</span>
          <div className={styles.container1}>
          <div className={styles.container11}>
            <div className={styles.container111}></div>
          </div>
          <div className={styles.container22}></div>
          <div className={styles.container33}>
            <div className={styles.text}>
              <span>Смотреть</span>
            </div>
            <div className={styles.container331}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
