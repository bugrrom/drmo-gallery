import React from 'react';

import styles from './Contacts.module.css';


function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className={styles.container}>
        <h1>Contacts</h1>
        <div className={styles.contactsInfo}>
          <input type="text" placeholder='Name'/>
          <input type="text" placeholder='E-mail'/>
          <input className={styles.message} type="text" placeholder='Message'/>
          <button>Click me</button>
        </div>
        <span>Отправить</span>
      </div>
    </div>
  );
}

export default Contacts;
