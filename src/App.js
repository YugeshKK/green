import './App.css';
import Dashboard from './Components/Dashboard/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
  return (
 <div className="App">
 <BrowserRouter>
  <Routes>
    <Route element={<Dashboard/>} path='/'/>
    <Route element={<Home/>} path='/home' />
  </Routes>
 </BrowserRouter>
 </div>
  );
}

export default App;
