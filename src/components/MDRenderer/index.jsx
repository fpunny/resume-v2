import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import classnames from 'classnames';
import styles from './MDRenderer.module.scss';

export default function MDRenderer({ data, className }) {
  return (
    <div className={classnames(styles.md, className)}>
      {documentToReactComponents(data.json)}
    </div>
  );
}
