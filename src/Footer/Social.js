import React from 'react';

import styles from './Social.module.css';


function Social() {
  return (
      <div className={styles.container}>
         <a  href="https://www.linkedin.com/in/roman-bugakov-b27197184/" target='_blank' rel="noopener noreferrer"> <i className="fa fa-linkedin"></i> </a>
          <a href="https://github.com/bugrrom" target='_blank' rel="noopener noreferrer"><i className="fa fa-github"></i></a>
          <a  href="https://t.me/RomanBugakov" target='_blank' rel="noopener noreferrer"><i className="fa fa-telegram"></i></a>




      </div>
  );
}

export default Social;
