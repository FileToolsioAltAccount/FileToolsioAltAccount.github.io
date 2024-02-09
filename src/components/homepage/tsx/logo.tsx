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
            width={screen.width / 7.427}
            height={screen.height / 32.688}
            alt='Logo'
            onClick={redirectToHomepage}
        />
    )
}

export default Logo;
