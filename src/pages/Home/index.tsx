import React from 'react';
import { Outlet } from 'react-router-dom';

import useAuth from '../../utils/hooks/useAuth';

const Home: React.FC = () => {
    const auth = useAuth();

    function handleLogout() {
        auth.logout(() => console.log('bye bye drivah'));
    }

    return (
        <>
            <h1>Home Page</h1>
            <ul>
                <li><a href="/list">List</a></li>
                <li><a href="/summary">Summary</a></li>
            </ul>
            <button onClick={handleLogout}>logout</button>
            <Outlet context={auth} />
        </>
    )
};

export default Home;
