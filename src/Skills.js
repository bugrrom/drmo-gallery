import React from 'react';

import styles from './Skills.module.css';
import MySkills from "./MySkills";

function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.interiorContainer0}>
          <span>Мой скилл</span>
        </div>


        <div className={styles.interiorContainer}>
          <MySkills/>
          <MySkills/>
          <MySkills/>
        </div>
      </div>
    </div>
  );
}

export default Skills;
