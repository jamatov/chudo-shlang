import './App.scss';
import './Responsive.scss'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Location from './components/Location';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Products/>
      <Contact/>
      <Location/>
      <Footer/>
    </div>
  );
}

export default App;
