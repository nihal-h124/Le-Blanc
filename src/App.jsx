import './App.css';
import Announcements from './components/Announcements';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
// import Home from './pages/Home';

function App() {
  return (
    <div className="App">
     <Announcements/>
     <Navbar/>
     <Slider/>
     <Categories/>
    </div>
  );
}

export default App;
