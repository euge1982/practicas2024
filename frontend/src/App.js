//frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Register from './components/RegisterForm';
import Gallery from './components/Gallery';
//import Artwork from './components/Artwork';
//import UserProfile from './components/UserProfile';
//import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div>
       
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/gallery" element={<Gallery />} />
          {/*<Route path="/artwork/:id" element={<Artwork />} />*/}
          {/*<Route path="/user-profile" element={<UserProfile />} />*/}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
