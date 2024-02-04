import React from 'react';
import logo from '../../../public/logo.png';
import '../css/logo.css';

function Logo() {
    const redirectToHome = () => {
         try {
            window.location.href = 'https://curly-guide-7vvwj5jv7vqx3pqgv-5173.app.github.dev';
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
