import React from 'react';

import styles from './Skills.module.css';
import MySkills from "./MySkills";

export default class Skills extends React.Component {

    render() {
        return (
            <div className={styles.skills} id='My skills'>
                <div className={styles.container}>
                    <div className={styles.interiorContainer0}>
                        <div className={styles.skillsText}><h1>My Skills</h1></div>
                    </div>
                    <div className={styles.interiorContainer}>
                        <MySkills skill={'HTML'}
                                  text={'HTML5'}
                                  style={'Html'}/>
                        <MySkills skill={'CSS'} style={'Css'} text={'CSS3, Flexbox, CSS Modules, Css Framework (Bootstrap), Responsive Web Design'}/>
                        <MySkills skill={'JavaScript'}
                                  text={'ES5, ES6, ES7, Ajax'}
                                  style={'js'}
                        />
                        <MySkills skill={'React'} style={'React'} text={'React, Routing ,PropTypes'}/>
                        <MySkills skill={'Redux'} style={'Redux'} text={'Redux, Redux-Thunk'}/>



                        <MySkills skill={'Webpack'} style={'webpack'}/>
                        <MySkills skill={'Git'} style={'git'}/>
                    </div>

                </div>
            </div>
        );
    }
}


