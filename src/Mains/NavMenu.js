import React from 'react';

import styles from './NavMenu.module.css';


function NavMenu() {
    return (
        <div className={styles.nav}>
            <ul className={styles.menu}>
                <li><a href="">HOME</a></li>
                <li><a href="">ABOUT</a></li>
                <li><a href="">SERVICES</a></li>
                <li><a href="">WORK</a></li>
                <li><a href="">CONTACT</a></li>
            </ul>


        </div>
    );
}

export default NavMenu;
