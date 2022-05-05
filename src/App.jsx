import './App.css';
import Announcements from './components/Announcements';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
     <Announcements/>
     <Navbar/>
     <Slider/>
    </div>
  );
}

export default App;
