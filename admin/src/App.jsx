import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Rooms from './pages/Rooms';
import Reservations from './pages/Reservations';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-8">
          <Routes>
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/reservations" element={<Reservations />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;