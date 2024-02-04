import '../css/nav.css';
import React from 'react';
import Logo from './logo.tsx';
import SearchBar from './searchBar.tsx';

function Nav() {
        return (
            <>
               <nav className='navbar'>
                        <Logo />
                        <SearchBar />
                </nav>
            </>
        );
     }
     
export default Nav;
     