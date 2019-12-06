import React from 'react';

import styles from './MySkills.module.css';


export default class MySkills extends React.Component {

    render() {
        let icon;
        let cssHtml = styles.iconHtmlCss;
        let js = styles.iconJs;
        let react = styles.iconReactRedax;
        if (this.props.skill === 'Html & CSS') {
            icon = cssHtml
        } else if (this.props.skill === 'JavaScript') {
            icon = js
        } else {
            icon = react
        }
        return (
            <div className={styles.myskills}>

                <div className={icon}>
                </div>
                <span className={styles.name}>{this.props.skill}</span>
                <span>{this.props.text}</span>


            </div>
        );
    }
};
