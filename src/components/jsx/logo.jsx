import React from 'react';
import logo from '../../public/logo.png';
import '../css/logo.css';

function Logo() {
    const redirectToHome = () => {
         try {
            window.location.href = '/';
         } catch (error) {
            alert('An error occured.');
         }
    };

    return (
        <>
            <img
                className='logo'
                src={logo}
                width='183.9px'
                height='27.9px'
                alt='Logo'
                onClick={redirectToHome}
            />
        </>
    );
}

export default Logo;
