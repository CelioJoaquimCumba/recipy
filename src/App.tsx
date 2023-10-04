import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/Router';

function App() {
  return (
    <div className="h-100 w-100 flex">
      <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
    </div>
  );
}

export default App;
