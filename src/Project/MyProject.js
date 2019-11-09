import React from 'react';

import styles from './MyProject.module.css';
import Button from "../Button";


function MyProject() {
  return (
      <div className={styles.container}>

              <Button text={'Open'}/>
      </div>
  );
}

export default MyProject;
