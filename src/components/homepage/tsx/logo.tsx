import logo from '../../../public/logo.png';
import '../css/logo.css';

const Logo = () => {
    const redirectToHomepage = () => {
        try {
            window.location.href = 'https://filetoolsioaltaccount.github.io';
        } catch (error) {
            alert('An error occurred.');
        }
    };

    return (
        <img
            className='logo'
            src={logo}
            alt='Logo'
            style={{
                width: `${262 / 1.4}px`,
                height: `${40 / 1.4}px`
            }}
            onClick={redirectToHomepage}
        />
    );
}

export default Logo;
