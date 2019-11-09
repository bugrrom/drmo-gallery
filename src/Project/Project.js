import React from 'react';

import styles from './Project.module.css';
import MyProject from "./MyProject";


function Project() {
  return (
    <div className={styles.project}>

      <div className={styles.container}>
        <div className={styles.skillsText}>
          <h1>My Project</h1>
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
