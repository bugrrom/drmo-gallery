import React from 'react';

import styles from './Footer.module.css';
import Social from "./Social";


function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerShadow}>
                <div className={styles.container}>
                    <span>Bugakov Roman</span>
                    <div className={styles.container1}>
                        <Social/>
                    </div>
                    <span>2019 Все права защищены</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
