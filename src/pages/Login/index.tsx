import React from 'react';
import { useNavigate } from 'react-router-dom';

import useAuth from '../../utils/hooks/useAuth';

const Login: React.FC = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    function handleLogin() {
        const user = { name: 'John Doe', email: '', image: '' };
        auth.login(user, () => {
            navigate("/");
        });
    }

    return (
        <>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Login</button>
        </>
    )
};

export default Login;
