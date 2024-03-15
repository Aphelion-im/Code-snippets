// https://github.com/hogeschoolnovi/frontend-react-routing-tandartspraktijk
// https://edhub.novi.nl/study/courses/516/content/12751 (Opdracht: Tandartspraktijk)
// React Router DOM: useParams, :id, Link (to), Router, Routes, Route (path, element), useNavigate, navigate('/')

import React from 'react';
import Whitening from './pages/whitening/Whitening';
import Home from './pages/home/Home';
import Appointments from './pages/appointments/Appointments';
import Cavities from './pages/cavities/Cavities';
import Navigation from './components/navigation/Navigation';
import { Routes, Route } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/afspraken" element={<Appointments />} />
        <Route path="/gaatjes" element={<Cavities />} />
        <Route path="/tanden-bleken" element={<Whitening />} />
      </Routes>
    </>
  );
}
