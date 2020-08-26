import React from 'react';

import styles from './Main.module.css';

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.text1}>
          <div className={styles.content}>
            <div className={styles.content__container}>

              <ul className={styles.content__container__list}>
                <li className={styles.content__container__list__item}>I'm Roman Bugakov</li>
                <li className={styles.content__container__list__item}>I'm Full Stack Web developer</li>
                <li className={styles.content__container__list__item}>I can create awesome stuff</li>
                <li className={styles.content__container__list__item}>Let's work together</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.photo}>

        </div>
      </div>
    </div>
  );
}

export default Main;
