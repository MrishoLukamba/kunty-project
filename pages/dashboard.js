import React from 'react';
import styles from '../styles/dash.module.css'


function dashboard() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <button className={styles.button}>add student</button>
            </header>

            <main className={styles.card}></main>
        </div>
    )
}

export default dashboard
