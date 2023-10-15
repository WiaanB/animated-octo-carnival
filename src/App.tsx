import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import RequireAuth from './components/RequireAuth';
import Login from './pages/Login';
import Home from './pages/Home';
import List from './pages/List';
import Summary from './pages/Summary';

const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <RequireAuth />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/list",
            element: <List />,
          },
          {
            path: "/summary",
            element: <Summary />,
          },
        ]
      },
    ],
  }
];

const router = createBrowserRouter(routes);

const App: React.FC = () => {

  return <RouterProvider router={router} />
};

export default App;
