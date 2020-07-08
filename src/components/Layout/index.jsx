import React from 'react';
import Seo from '../Seo';
import styles from './Layout.module.scss';

export default function Layout({ seo, header, education, skills, work, projects }) {
    return (
        <main className={styles.container}>
            <Seo {...seo}/>
            <div className={styles.side}>
                <div className={styles.item}>{header}</div>
                <div className={styles.item}>{skills}</div>
                <div className={styles.item}>{education}</div>
            </div>
            <div className={styles.content}>
                <div className={styles.item}>{work}</div>
                <div className={styles.item}>{projects}</div>
            </div>
        </main>
    );
}