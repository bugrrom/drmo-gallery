import React from 'react';

import styles from './Contacts.module.css';


function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className={styles.container}>
        <span>Контакты</span>
        <div className={styles.contactsInfo}>
          <div className={styles.contactsInfo1}></div>
          <div className={styles.contactsInfo2}></div>
          <div className={styles.contactsInfo1}></div>
          <div className={styles.contactsInfo2}></div>
          <div className={styles.contactsInfo3}></div>
        </div>
        <span>Отправить</span>
      </div>
    </div>
  );
}

export default Contacts;
