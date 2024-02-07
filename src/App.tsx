import { Suspense } from 'react';
import Nav from './components/homepage/tsx/nav';

function App() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Nav />
            </Suspense>
        </>
    );
}

export default App;
