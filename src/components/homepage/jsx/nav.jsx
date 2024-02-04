import '../css/nav.css';
import React from 'react';
import Logo from './logo';
import SearchBar from './searchBar';

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
     