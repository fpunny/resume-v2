import React, { useContext } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import classnames from 'classnames';
import { darkContext } from '../../pages';
import styles from './Menu.module.scss';

export default function ToggleDark() {
    const ctx = useContext(darkContext);
    return (
        <button
            onClick={() => ctx.set(!ctx.get)}
            aria-label='Toggle dark mode'
            className={styles.button}
        >
            <FiSun className={classnames(styles.icon, ctx.get || styles[`icon--hidden`])} />
            <FiMoon className={classnames(styles.icon, styles[`icon--abs`], ctx.get && styles[`icon--hidden`])} />
        </button>
    )
}