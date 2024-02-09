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

    const originalWidth = 262;
    const originalHeight = 40;

    return (
        <img
            className='logo'
            src={logo}
            alt='Logo'
            style={{
                width: `${originalWidth /   1.4}px`,
                height: `${originalHeight /   1.4}px`
            }}
            onClick={redirectToHomepage}
        />
    );
}

export default Logo;
