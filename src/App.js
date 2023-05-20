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

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Products/>
      <About/>
      <Cards/>
      <Contact/>
      <Location/>
      <Footer/>
    </div>
  );
}

export default App;
