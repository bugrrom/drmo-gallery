import React from 'react';

import styles from './Slogan.module.css';

function Slogan() {
  return (
    <div className={styles.slogan}>
      <div className={styles.container}>
        <span>Рассматриваю вариант удаленной работы</span>
        <span>Нанять меня</span>
      </div>
    </div>
  );
}

export default Slogan;
