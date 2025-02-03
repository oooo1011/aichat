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
    v7_startTransition: true,      // 启用过渡功能
    v7_relativeSplatPath: true    // 启用相对路径解析
  }
});

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;