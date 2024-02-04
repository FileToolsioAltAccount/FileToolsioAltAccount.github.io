import React, { useState, useEffect } from 'react';
import '../css/searchBar.css';

interface SearchBarProps {}

type SearchPlaceholderItem = {
    [key: number]: string;
};

const searchPlaceholder: SearchPlaceholderItem[] = [
    { 701: 'Search' },
    { 1001: 'Search for tools' },
    'Search for file tools',
];

const SearchBar: React.FC<SearchBarProps> = () => {
    const [placeholder, setPlaceholder] = useState<string>('');

    useEffect(() => {
        const updatePlaceholder = () => {
            const width = window.innerWidth;
            const selectedPlaceholder: any = searchPlaceholder.find(item => {
                if (typeof item === 'string') return true;
                const breakpoint = Object.keys(item)[0];
                return width < parseInt(breakpoint, 10);
            });

            setPlaceholder(typeof selectedPlaceholder === 'string' ? selectedPlaceholder : selectedPlaceholder[Object.keys(selectedPlaceholder)[0]]);
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