import React from 'react';

import styles from './MySkills.module.css';


export default class MySkills extends React.Component {

    render() {
        const cls = styles[this.props.style];
        return (
            <div className={styles.myskills}>

                <div className={cls}>
                </div>
                <span className={styles.name}>{this.props.skill}</span>
                <span>{this.props.text}</span>


            </div>
        );
    }
};
