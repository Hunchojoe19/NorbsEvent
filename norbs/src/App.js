import './App.css';
import Login from "./views/authentication/Login"
import Register from "./views/authentication/Register"
import { Routes, Route } from 'react-router-dom';
import Dashboard from './views/dashboard/Dashboard';
import CreateEvents from './views/dashboard/pages/events/CreateEvents';

function App() {
  return (
    <div className="app">
    <Routes>   
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashboard/*' element={<Dashboard/>}/> 
      {/* <Route path='/createEvents' element={<CreateEvents/>}/> */}
    </Routes>
    </div>
  );
}

export default App;
