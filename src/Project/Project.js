import React from 'react';

import styles from './Project.module.css';
import MyProject from "./MyProject";


function Project() {
    return (
        <div className={styles.project} id='Project'>

            <div className={styles.container}>
                <div className={styles.skillsText}>
                    <h1>My Project</h1>
                </div>
                <div className={styles.myproject}>
                    <MyProject
                        style='quiz'
                        name='Questionnaire'
                        text='A questionnaire with the ability to create tests and register'
                        gitSrc='https://github.com/bugrrom/Quizs'
                        hostSrc='https://react-quiz-bc79e.firebaseapp.com/'
                        tech='React, Redux, API firebase'
                        date='2019'
                    />
                    <MyProject
                        style='todo'
                        name='Todo List'
                        text='Create your todo list'
                        gitSrc='https://github.com/bugrrom/Todo'
                        hostSrc='https://bugrrom.github.io/ToDoS/'
                        tech='React, Redux'
                        date='2019'
                    />
                    <MyProject
                        style='calculator'
                        name='Calculator'
                        text='Engineering calculator build by pattern MVC'
                        gitSrc='https://github.com/bugrrom/calculator'
                        hostSrc='https://bugrrom.github.io/calculator-pages/'
                        tech='js, pattern MVC, ts, webpack'
                        date='2020'
                    />
                    <MyProject
                        style='excel'
                        name='Excel'
                        text='Creating my framework and build this project on my framework'
                        gitSrc='https://github.com/bugrrom/excel'
                        hostSrc='https://bugrrom.github.io/excel/'
                        tech='html, css(sass), js, ts, webpack, localstorage'
                        date='2020'
                    />
                    <MyProject
                        style='nodeCurses'
                        name='Shop curses'
                        text='Course store with authorization'
                        gitSrc='https://github.com/bugrrom/shopCurses'
                        hostSrc='https://morning-chamber-34437.herokuapp.com/'
                        tech='handlebars, node, express, mongodb'
                        date='2020'
                    />
                </div>

            </div>
        </div>
    );
}


export default Project;
