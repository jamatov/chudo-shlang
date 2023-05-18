import './App.scss';
import './Responsive.scss'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Products from './components/Products';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Products/>
      <Contact/>
    </div>
  );
}

export default App;
