import React from 'react';
import usePortal from '../../utils/usePortal';
import PrintScreen from './PrintScreen';
import ToggleDark from './ToggleDark';
import Repo from './Repo';
import styles from './Menu.module.scss';

export default function Menu() {
    const Portal = usePortal(styles.portal);
    return (
        <Portal>
            <Repo/>
            <PrintScreen/>
            <ToggleDark/>
        </Portal>
    );
}
