// This project deals with the following files:
// Faq.jsx, Home.jsx, Menu.jsx
// Hooks: useParams, useNavigate
// NavLink, Link, Router, Routes, Route,
// https://vimeo.com/775072298/22e2eedb6c - React - Routing implementeren
// $ npm install react-router-dom
// <Router> in main.jsx. import { BrowserRouter as Router } from 'react-router-dom';
// Conventie om BrowserRouter als Router te schrijven.
// <Routes> en <Route> in App.jsx. import { Routes, Route } from 'react-router-dom';
// Componenten buiten Routes, zijn zichtbaar op iedere pagina. Bijvoorbeeld het <Menu /> component.
// Voor interne links gebruik je een Link component. <Link to="/">Home page</Link>. import { Link } from 'react-router-dom';
// Voor Navigatie gebruik je NavLink. Deze links zijn bewust wanneer zij actief zijn. Zie: Menu component. import { NavLink } from 'react-router-dom';
// Voor de NavLinks gebruik je voor de styling speciale ternary operators. Zie het Menu component.
// Voor externe links gebruik je <a href="etc.">
// * is een catchall voor spelfouten in de url en zal naar de 404/not found pagina leiden.
// CTRL + klik op een component, leidt naar de code van het component.

import { Routes, Route } from 'react-router-dom';
import './App.css';
import Faq from './pages/faq/Faq';
import Home from './pages/home/Home';
import Menu from './components/navigation/Menu';
import NotFound from './pages/notFound/NotFound';

export default function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/faq/:id" element={<Faq />} />
        {/* Beveiligde URL: Niet ingelogged? Doorsturen naar / */}
        {/* <Route
          path="/profile"
          element={isLoggedIn === true ? <Profile /> : <Navigate to="/" />}
        />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}
