import React, { useContext } from 'react';
import { darkContext } from '../../pages';
import styles from './Layout.module.scss';

export default function Layout({ header, education, skills, work, projects }) {
    const dark = useContext(darkContext);
    return (
        <main className={styles.container}>
            <div className={styles.body}>
                <div className={styles.side}>
                    <div className={styles.item}>{header}</div>
                    <div className={styles.item}>{skills}</div>
                    <div className={styles.item}>{education}</div>
                </div>
                <div className={styles.content}>
                    <div className={styles.item}>{work}</div>
                    <div className={styles.item}>{projects}</div>
                </div>
            </div>
        </main>
    );
}