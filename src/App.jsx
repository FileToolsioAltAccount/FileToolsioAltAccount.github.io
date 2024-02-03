import { useEffect } from 'react';
import Nav from './components/jsx/nav';

function App() {
    useEffect(() => {
        function checkOnlineStatus() {
            if (navigator.onLine) {
                console.log("You are online");
            } else {
                console.log("You are offline");
            }
        }

        // Initial check
        checkOnlineStatus();

        // Event listener for online/offline events
        window.addEventListener('online', checkOnlineStatus);
        window.addEventListener('offline', checkOnlineStatus);

        // Cleanup: remove event listeners when the component is unmounted
        return () => {
            window.removeEventListener('online', checkOnlineStatus);
            window.removeEventListener('offline', checkOnlineStatus);
        };
    }, []);

    return (
        <>
            <Nav />
        </>
    );
}

export default App;
