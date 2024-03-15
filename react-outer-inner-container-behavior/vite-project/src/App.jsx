// https://github.com/Aphelion-im/opdracht-frontend-html-css-flexbox
// #root element heeft display: block; en kan zijn children met display: flex; in de war schoppen, omdat het normaliter via body gaat.

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainContent from './components/mainContent/MainContent';
import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}
