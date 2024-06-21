import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import Shop from './Component/Pages/Shop'
import Cart from './Component/Pages/Cart';
import Product from './Component/Pages/Product'
import ShopCategory from './Component/Pages/ShopCategory'
import LoginSignup from './Component/Pages/LoginSignup'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element= {<Shop/>}></Route>
          <Route path='/mens' element={<ShopCategory category ='mens'/>}></Route>
          <Route path='/womens' element={<ShopCategory category = 'womens'/>}></Route>
          <Route path='/kids' element = {<ShopCategory category = 'kids'/>}></Route>
          <Route path='/product'element ={<Product/>}>
          <Route path=':productId' element = {<Product/>}></Route>
          </Route>
          <Route path='/cart' element ={<Cart/>}></Route>
          <Route path='/login' element={<LoginSignup/>}></Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
