import React from 'react'
import styles from './Button.module.css'

export default class Button extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.contents}>
                    <p className={styles.btn}><a href={this.props.src} target='_blank' rel="noopener noreferrer" >{this.props.text}</a></p>
                </div>
            </div>

        )
    }
}
