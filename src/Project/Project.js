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
                        style='memory'
                        name='Memory game'
                        text='A field 6x6. 18 paired cards with different icons. After entering the name, the game starts.'
                        gitSrc='https://github.com/bugrrom/memory-game'
                        hostSrc='https://memory-game-f4181.firebaseapp.com/'
                        tech='html, css, js, ts, webpack, React, Redux'
                        date='2020'
                    />
                    <MyProject
                        style=''
                        name='ProShop'
                        text='ProShop eCommerce Platform'
                        gitSrc='https://github.com/bugrrom/proShop'
                        hostSrc='https://shop-app-pro.herokuapp.com/'
                        tech='MERN'
                        date=''
                    >
                        <div style={{display: "flex", flexDirection: "column", color: "white"}}>
                            <span>
                                <p style={{fontSize: 15, fontWeight: "bold",}}>Frontend:</p>
                                <p>React, Redux, Redux-Thunk, Emotion, TypeScript, React-Router-Dom</p>
                            </span>
                            <span>
                                <p style={{fontSize: 15, fontWeight: "bold",}}>Backend:</p>
                                <p>Node, Express, MongoDB, Json Web Token</p>
                            </span>
                        </div>
                    </MyProject>
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
                        style='calculator'
                        name='Calculator'
                        text='Engineering calculator build by pattern MVC'
                        gitSrc='https://github.com/bugrrom/calculator'
                        hostSrc='https://bugrrom.github.io/calculator-pages/'
                        tech='js, pattern MVC, ts, webpack'
                        date='2020'
                    />
                    {/*<MyProject
                        style='todo'
                        name='Todo List'
                        text='Create your todo list'
                        gitSrc='https://github.com/bugrrom/Todo'
                        hostSrc='https://bugrrom.github.io/ToDoS/'
                        tech='React, Redux'
                        date='2019'
                    />*/}
                </div>

            </div>
        </div>
    );
}


export default Project;
