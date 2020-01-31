import React from 'react';

import styles from './MyProject.module.css';
import Button from "../Button";


function MyProject(props) {
    const cls = [styles.container, styles[props.style || null]];
  return (
      <div className={cls.join(' ')}>
          <div className={styles.shadow}>
              <Button text='Open'  src={props.hostSrc}/>
              <span><p>{props.text}</p></span>
              <span><p>{props.tech}</p></span>
              <Button text='Github' src={props.gitSrc}/>
          </div>

      </div>
  );
}

export default MyProject;
