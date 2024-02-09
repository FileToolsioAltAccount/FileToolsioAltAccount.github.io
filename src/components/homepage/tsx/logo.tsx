import logo from '../../../public/logo.png'
import '../css/logo.css'

function Logo() {
    const redirectToHomepage = () => {
        try {
            window.location.href = 'https://filetoolsioaltaccount.github.io';
        } catch (error) {
            alert('An error occurred.');
        }
    }

    return (
        <img
            draggable='false'
            className='logo'
            src={logo}
            width={window.innerWidth / 7.42}
            height={window.innerHeight / 28.35}
            alt='Logo'
            onClick={redirectToHomepage}
        />
    )
}

export default Logo;
