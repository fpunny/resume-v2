import React from 'react';
import classnames from 'classnames';
import { graphql, useStaticQuery } from 'gatsby';
import styles from './Skills.module.scss';

export default function Skills() {
    const { skills } = useStaticQuery(query);
    return (
        <section className='container'>
            <h2 className={classnames(styles.title, 'title')}>{skills.title}</h2>
            <ul className={styles.items}>
                {skills.content.map(({ contentfulid, items, label }) => (
                    <li className={styles.item} key={contentfulid}>
                        <h3 className={styles.label}>{label}</h3>
                        <span className={styles.text}>{items.join(', ')}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

const query = graphql`
    {
        skills: contentfulQuerable(slug: { eq: "skills" }) {
            content {
                ...Skills
            }
            title
        }
    }

    fragment Skills on ContentfulList {
        contentfulid
        items
        label
    }
`;