import '../css/nav.css';
import Advertise from './advertise.tsx';
import Pricing from './pricing.tsx';
import Logo from './logo.tsx';
import SearchBar from './searchBar.tsx';

function Nav() {
        return (
            <>
               <nav className='navbar'>
                        <Logo />
                        <SearchBar />
                        <Pricing />
                        <Advertise />
                </nav>
            </>
        );
     }
     
export default Nav;
     