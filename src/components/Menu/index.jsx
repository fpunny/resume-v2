import React from 'react';
import usePortal from '../../utils/usePortal';
import ToggleDark from './ToggleDark';
import styles from './Menu.module.scss';

export default function Menu() {
    const Portal = usePortal(styles.portal);
    return (
        <Portal>
            <ToggleDark/>
        </Portal>
    );
}
