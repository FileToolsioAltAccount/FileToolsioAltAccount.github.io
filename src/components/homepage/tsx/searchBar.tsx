import React, { useState, useEffect } from 'react';
import '../css/searchBar.css';

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
    const [placeholder, setPlaceholder] = useState<string>('');

    useEffect(() => {
        const updatePlaceholder = () => {
            if (window.innerWidth < 701) setPlaceholder('Search');
            else if (window.innerWidth < 1001) setPlaceholder('Search for tools');
            else setPlaceholder('Search for file tools');
        };

        window.addEventListener('resize', updatePlaceholder);
        updatePlaceholder();

        return () => window.removeEventListener('resize', updatePlaceholder);
    }, []); 

    return (
        <div className='search-bar'>
            <span className='material-symbols-outlined'>search</span>
            <input className='input' placeholder={placeholder} type='text' />
        </div>
    );
}

export default SearchBar;
