import { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function usePortal(className) {
    const el = useRef();
    useEffect(() => {
        el.current = document.createElement('div');
        return () => el.current.remove();
    }, []);

    useEffect(() => {
        el.current.classList.add(className);
        document.body.appendChild(el.current);
    }, [ className ]);

    return el.current
        ? ({ children }) => ReactDOM.createPortal(children, el.current)
        : () => null;
}