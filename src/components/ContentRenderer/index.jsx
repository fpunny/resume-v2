import React from 'react';
import classnames from 'classnames';
import { graphql } from 'gatsby';
import dateFormat from '../../dateFormat';
import MDRenderer from '../MDRenderer';
import styles from './ContentRenderer.module.scss';

export default function ContentRenderer({ title, position, start, end, content, dateConfig }) {
    const f = dateFormat(dateConfig);
    return (
        <>
            <div className={styles.header}>
                {title && <h3 className={classnames(styles.title, 'title')}>{title}</h3>}
                {(start || end) && <span className={styles.dates}>{f(start)} - {f(end)}</span>}
            </div>
            {position && <p className={styles.subtitle}>{position}</p>}
            <MDRenderer className={styles.md} data={content}/>
        </>
    )
}

export const contentFragment = graphql`
    fragment contentFragment on ContentfulContent {
        content {
            json
        }
        position
        title
        start
        end
    }
`;