import '../css/searchBar.css';
import { useState, useEffect } from 'react';

function SearchBar() {
    const [placeholder, setPlaceholder] = useState('');

    useEffect(() => {
        async function updatePlaceholder() {
            if (window.innerWidth < 701) setPlaceholder('Search');
            else if (window.innerWidth < 1001) setPlaceholder('Search for tools');
            else setPlaceholder('Search for file tools');
        }

        window.addEventListener('resize', updatePlaceholder);
        updatePlaceholder(); 
       
        return () => window.removeEventListener('resize', updatePlaceholder);
    }, []); 

    return (
        <>
            <div className='search-bar'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" color="" width="24"><path d="M779.385-153.846 528.923-404.307q-30 25.538-69 39.538-39 14-78.385 14-96.1 0-162.665-66.529-66.566-66.529-66.566-162.577t66.529-162.702q66.529-66.654 162.577-66.654 96.049 0 162.702 66.565Q610.769-676.101 610.769-580q0 41.692-14.769 80.692-14.769 39-38.769 66.693l250.462 250.461-28.308 28.308ZM381.538-390.769q79.616 0 134.423-54.808Q570.769-500.385 570.769-580q0-79.615-54.808-134.423-54.807-54.808-134.423-54.808-79.615 0-134.423 54.808Q192.308-659.615 192.308-580q0 79.615 54.807 134.423 54.808 54.808 134.423 54.808Z"/></svg>            
                <input className='input' placeholder={placeholder} type='text' />
            </div>
        </>
    );
}

export default SearchBar;