import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/Router';

function App() {
  return (
    <div className="h-100 md:h-screen w-100 flex bg-gray-200 md:p-6">
      <div className='flex-grow hidden md:flex'>
        Laptop View is still in development, please use a mobile phone or a tablet for a better experience
      </div>
      <div className='flex w-full h-full md:max-w-md md:min-w-sm bg overflow-auto bg-white md:rounded-2xl'>
        <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
      </div>
      <div className='flex-grow hidden md:flex'>
        Laptop View is still in development, please use a mobile phone or a tablet for a better experience
      </div>
    </div>
  );
}

export default App;
