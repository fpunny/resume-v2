import React from 'react';
import { FiSettings } from 'react-icons/fi';
import usePortal from '../../utils/usePortal';
import styles from './Menu.module.scss';

export default function Menu() {
    const Portal = usePortal(styles.portal);
    return (
        <Portal>
            <button aria-label='Get options for resume' className={styles.button}>
                <FiSettings className={styles.icon}/>
            </button>
        </Portal>
    );
}
