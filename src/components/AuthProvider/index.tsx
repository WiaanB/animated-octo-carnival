import React from 'react';

type User = {
    name: string;
    email: string;
    image: string;
}

type Token = {
    token: string;
    refresh_token: string;
    expires_in: number;
}

type AuthContext = {
    user: User | null;
    token: Token | null;
    login: (user: User, callback: VoidFunction) => void;
    logout: (callback: VoidFunction) => void;
}

export const AuthContext = React.createContext<AuthContext>(null!);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const storageUser = localStorage.getItem('user');
    const storageToken = localStorage.getItem('token');
    const [user, setUser] = React.useState<User | null>(storageUser ? JSON.parse(storageUser) : null);
    const [token, setToken] = React.useState<Token | null>(storageToken ? JSON.parse(storageToken) : null);

    function login(newUser: User, callback: VoidFunction) {
        const token = getToken();
        localStorage.setItem('user', JSON.stringify(newUser));
        localStorage.setItem('token', JSON.stringify(token));
        setUser(newUser);
        setToken(token);
        callback();
    }

    function getToken() {
        return {
            token: '123',
            refresh_token: '123',
            expires_in: 123
        };
    }

    function logout(callback: VoidFunction) {
        setUser(null);
        setToken(null);
        callback();
    }

    const value = { user, token, login, logout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
