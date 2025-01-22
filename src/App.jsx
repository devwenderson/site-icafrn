import { Outlet } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';

function App() {

  return (
    <> 
      <Navbar />
      <div className='container mt-3'>
        <Outlet />
      </div>
    </>
  )
}

export default App
