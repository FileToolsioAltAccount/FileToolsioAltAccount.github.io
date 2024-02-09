import { Suspense, lazy } from 'react';
import Advertise from './advertise.tsx';
import Pricing from './pricing.tsx';
import SearchBar from './searchBar.tsx';
import Login from './login.tsx';
import '../css/nav.css';

const Logo = lazy(() => import('./logo.tsx'));

function Nav() {
        return (
            <>
                <Suspense>
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
     