import './App.css';
import Announcements from './components/Announcements';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Products from './components/Products';
import Slider from './components/Slider';
// import Home from './pages/Home';

function App() {
  return (
    <div className="App">
     <Announcements/>
     <Navbar/>
     <Slider/>
     <Categories/>
     <Products/>
     <Newsletter/>
    </div>
  );
}

export default App;
