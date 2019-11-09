import React from 'react';

import styles from './Contacts.module.css';
import Button from "../Button";


function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className={styles.container}>
        <h1>Contact</h1>
        <div className={styles.contactsInfo}>
          <input type="text" placeholder='Name'/>
          <input type="text" placeholder='E-mail'/>
          <input className={styles.message} type="text" placeholder='Message'/>

        </div>
        <Button text={'Click me'}/>
      </div>
    </div>
  );
}

export default Contacts;
