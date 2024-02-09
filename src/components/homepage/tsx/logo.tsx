import React, { useState, useCallback, useEffect, useRef } from 'react';
import logo from '../../../public/logo.png';
import '../css/logo.css';

const Logo: React.FC = () => {
    const [size, setSize] = useState<{ width: number, height: number } | null>(null);
    const resizeTimeoutId = useRef<number | undefined>();

    const calculateImageSize = useCallback(() => {
        const img = new Image();
        img.src = logo;
        img.onload = () => {
            setSize({ width: img.width /  1.4, height: img.height /  1.4 });
        };
    }, []);

    const handleResize = useCallback(() => {
        window.clearTimeout(resizeTimeoutId.current);
        resizeTimeoutId.current = window.setTimeout(calculateImageSize,  500);
    }, [calculateImageSize]);

    useEffect(() => {
        calculateImageSize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [calculateImageSize, handleResize]);

    const redirectToHomepage = useCallback(() => {
        try {
            window.location.href = 'https://filetoolsioaltaccount.github.io';
        } catch (error) {
            alert('An error occurred.');
        }
    }, []);

    if (!size) {
        return null;
    }

    return (
        <img
            className='logo'
            src={logo}
            alt='Logo'
            width={size.width}
            height={size.height}
            onClick={redirectToHomepage}
        />
    );
}

export default Logo;
