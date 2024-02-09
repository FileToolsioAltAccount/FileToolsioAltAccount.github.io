import React, { useState, useEffect } from 'react';
import logo from '../../../public/logo.png';
import '../css/logo.css';

const Logo: React.FC = () => {
    const [size, setSize] = useState<{ width: number, height: number } | null>(null);

    const redirectToHomepage = () => {
        try {
            window.location.href = 'https://filetoolsioaltaccount.github.io';
        } catch (error) {
            alert('An error occurred.');
        }
    }

    useEffect(() => {
        const img = new Image();
        img.src = logo;
        img.onload = () => {
            setSize({ width: img.width / 1.375, height: img.height / 1.375 });
        };
    }, []);

    if (!size) {
        return null;
    }

    return (
        <img
            draggable='false'
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