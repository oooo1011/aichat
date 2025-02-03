import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Auth from './pages/Auth';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/auth",
    element: <Auth />,
  }
], {
  future: {
    // React Router v6 中的正确 future 配置
    v7_relativeSplatPath: true
  }
});

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;