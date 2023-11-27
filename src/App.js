import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Main } from './components/Main';
import { CartProvider } from './context/cartContext';

function App() {
  return (
    <CartProvider >
    <div className="App">
      <Navbar />
      <Main />
    </div>
    </CartProvider>
  );
}

export default App;
