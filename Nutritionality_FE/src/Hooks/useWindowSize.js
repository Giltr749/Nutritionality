import { useState, useEffect } from 'react';

export function useWindowSize() {
    const [size, setSize] = useState([window.innerHeight, window.innerWidth]);

    useEffect(() => {
        const resizeHandler = () => {
            setSize([window.innerHeight, window.innerWidth]);
        };
        window.addEventListener("resize", resizeHandler);

        return () => window.removeEventListener("resize", resizeHandler);
    }, []);

    return size;
}