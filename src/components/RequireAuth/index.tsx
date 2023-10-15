import React from 'react';
import { useLocation, Outlet, Navigate } from 'react-router-dom';

import useAuth from '../../utils/hooks/useAuth';

const RequireAuth: React.FC = () => {
    const auth = useAuth();
    const location = useLocation();

    if (auth.user === null) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return <Outlet />;
};

export default RequireAuth;