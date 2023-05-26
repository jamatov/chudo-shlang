import './App.scss';
import './Responsive.scss'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Location from './components/Location';
import About from './components/About';
import Cards from './components/Cards';
import HeaderCarusel from './components/HeaderCarusel';
import i18n from "i18next";
import i18next from "i18next";
import { useTranslation, initReactI18next } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TranslationRU from './locale/Ru';
import TranslationUZ from './locale/Uz';

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: TranslationRU },
    uz: {translation: TranslationUZ}
  },
  lng: "uz",
  fallbackLng: "uz",
});

function App() {
  const changeLang = (value) => {
    i18next.changeLanguage(value);
  };


  return (
    <div className="App">
      <Navbar changeLang={changeLang}/>
      <HeaderCarusel/>
      {/* <Header/> */}
      <Products/>
      <About/>
      {/* <Cards/> */}
      <Contact/>
      {/* <Location/> */}
      <Footer/>
    </div>
  );
}

export default App;
