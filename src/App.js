import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Logearse from './Pages/Logearse';
import Dashboard from './Pages/Dashboard';
import Tres from './Pages/Tres';



function App() {
  return (
    
    <BrowserRouter>

      <Routes>




        <Route path='/' element={<Logearse/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/tres' element={<Tres/>}/>


      </Routes>

    </BrowserRouter>
  );
}

export default App;
