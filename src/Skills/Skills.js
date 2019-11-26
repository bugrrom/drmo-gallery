import React from 'react';

import styles from './Skills.module.css';
import MySkills from "./MySkills";

export default class Skills extends React.Component {

    render() {
        return (
            <div className={styles.skills}>
                <div className={styles.container}>
                    <div className={styles.interiorContainer0}>
                        <div className={styles.skillsText}><h1>My Skills</h1></div>
                    </div>
                    <div className={styles.interiorContainer}>
                        <MySkills skill={'Html & CSS'}
                                  text={'тут должен быть какой-то текст, много текста, бла бла бла бла'}
                                  cssHtml={'iconHtmlCss'}/>
                        <MySkills skill={'JavaScript'}
                                  text={'тут должен быть какой-то текст, много текста, бла бла бла бла'}/>
                        <MySkills skill={'React & Redax'}
                                  text={'тут должен быть какой-то текст, много текста, бла бла бла бла'}/>
                    </div>

                </div>
            </div>
        );
    }
}


