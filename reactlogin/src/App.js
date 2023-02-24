import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';
import Landing from './components/Landing';


function App() {
  return (
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Signup />} path="/signup" />
        <Route element={<Logout />} path="/logout" />
        <Route element={<Landing />} path="/landing" />

      </Routes>


  );
}

export default App;