import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import Login from './pages/Login';
import ProductItem from './pages/ProductItem';
import Register from './pages/Register';
import Products from './components/Products';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
        <div className="App">
          <Router>
            <Switch>
              <Route exact path='/'> <Home /> </Route>
              <Route path='/register'> <Register/> </Route>
              <Route path='/login'> <Login /> </Route>
              <Route path='/cart'> <Cart /> </Route>
              <Route path='/product'> <ProductItem /> </Route>
              <Route path='/productlist'> <ProductList /> </Route>
            </Switch>
          </Router>
        </div>
  );
}

export default App;
