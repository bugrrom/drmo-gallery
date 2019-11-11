import React from 'react';

import styles from './Slogan.module.css';
import Button from "../Button";

function Slogan() {
  return (
    <div className={styles.slogan}>
      <div className={styles.container}>
        <span>Рассматриваю вариант удаленной работы</span>
        <Button text={"click"}/>
      </div>
    </div>
  );
}

export default Slogan;
