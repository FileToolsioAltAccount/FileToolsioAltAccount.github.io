import { Suspense } from 'react';
import Advertise from './advertise.tsx';
import Pricing from './pricing.tsx';
import Logo from './logo.tsx';
import SearchBar from './searchBar.tsx';
import Login from './login.tsx';
import '../css/nav.css';

function Nav() {
        return (
            <>
                <Suspense fallback={<div>Loading...</div>}>
                    <nav className='navbar'>
                        <Logo />
                        <SearchBar />
                        <Pricing />
                        <Advertise />
                        <Login />
                    </nav>
                </Suspense>
            </>
        );
     }
     
export default Nav;
     