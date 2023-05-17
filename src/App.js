import './App.scss';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Products/>
    </div>
  );
}

export default App;
