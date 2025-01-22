import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar';

function App() {

  return (
    <> 
      <Navbar />

      <Outlet />

    </>
  )
}

export default App
