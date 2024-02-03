import { useEffect, useState } from 'react';
import Nav from './components/jsx/nav';

function App() {
    const [online, setOnline] = useState(navigator.onLine);

    useEffect(() => {
        const checkOnlineStatus = () => {
            setOnline(navigator.onLine);
        };

        checkOnlineStatus();

        window.addEventListener('online', checkOnlineStatus);
        window.addEventListener('offline', checkOnlineStatus);

        return () => {
            window.removeEventListener('online', checkOnlineStatus);
            window.removeEventListener('offline', checkOnlineStatus);
        };
    }, []);

    return (
        <>
            {online ? (
                <Nav />
            ) : (
                <div>
                    <p>You are currently offline. Please check your internet connection.</p>
                </div>
            )}
        </>
    );
}

export default App;
