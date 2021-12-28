import './App.css';

import Dashboard from './Pages/Dashboard';
import Landing from './Pages/Landing';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
    

    <Routes>
    <Route path="/" element={<Landing/>}> </Route>
    <Route path="/Login" element={<Login/>}> </Route>
    <Route path="/Signup" element={<Signup/>}> </Route>
    <Route path="/Dashboard" element={<Dashboard/>}> </Route>
    </Routes>
   
    

   </Router>
  )
}

export default App;
