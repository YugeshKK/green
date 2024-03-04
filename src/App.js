import './App.css';
import Dashboard from './Components/Dashboard/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Employee from './Components/Employee/Employee';

function App() {
  return (
 <div className="App">
 <BrowserRouter>
  <Routes>
    <Route element={<Dashboard/>} path='/'/>
    <Route element={<Home/>} path='/home' />
    <Route element={<Employee/>} path='/employees' />
  </Routes>
 </BrowserRouter>
 </div>
  );
}

export default App;
