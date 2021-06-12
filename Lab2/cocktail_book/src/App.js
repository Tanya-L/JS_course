import React from 'react';
import { Routing } from './routes/Routing'
import { NavBar } from './components/NavBar'
import { UserProvider } from './utils/UserContext'


function App() {
    return (
        <UserProvider>
            <Routing>
                <NavBar />
            </Routing>
        </UserProvider>
    );
}

export default App;
