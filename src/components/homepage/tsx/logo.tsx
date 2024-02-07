import logo from '../../../public/logo.png';
import '../css/logo.css';

function Logo() {
    const redirectToHomepage = () => {
        try {
            window.location.href = 'https://cuddly-palm-tree-5gg57r7gv5gp37qwv-5173.app.github.dev';
        } catch (error) {
            alert('An error occurred.');
        }
    }
    
    return (
            <img
                className='logo'
                src={logo}
                width='183.9px'
                height='27.9px'
                alt='Logo'
                onClick={redirectToHomepage}
            />
    );
};

export default Logo;
