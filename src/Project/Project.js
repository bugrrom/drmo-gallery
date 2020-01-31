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
              text='Опросник с возможностью создание тестов и регистрацией.'
              gitSrc='https://github.com/bugrrom/Quizs'
              hostSrc='https://react-quiz-bc79e.firebaseapp.com/'
              tech = 'Технологии: html, css, React, Redux, API firebase'
          />
          <MyProject
              style='todo'
              text='Создай свой список дел'
              gitSrc='https://github.com/bugrrom/Todo'
              hostSrc='https://bugrrom.github.io/ToDoS/'
              tech = 'Технологии: html, css, React, Redux'
          />
        </div>

      </div>
    </div>
  );
}

export default Project;
