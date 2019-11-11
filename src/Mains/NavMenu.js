import React from 'react';

import styles from './NavMenu.module.css';


function NavMenu() {
    return (
        <div className={styles.nav}>
            <ul className={styles.menu}>
                <li className={styles.men}><a href="">HOME</a></li>
                <li className={styles.men}><a href="">ABOUT</a></li>
                <li className={styles.men}><a href="">SERVICES</a></li>
                <li className={styles.men}><a href="">WORK</a></li>
                <li className={styles.men}><a href="">CONTACT</a></li>
            </ul>


        </div>
    );
}

export default NavMenu;
