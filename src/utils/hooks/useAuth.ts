import React from 'react';
import { AuthContext } from '../../components/AuthProvider';

export default function useAuth() {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
}