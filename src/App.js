
import './App.css';
//to avoid clumsy code imports, simply use a named component as below
//but you have to create an index.js file, and export default as (e.g export { default as Navbar } from './Navbar/Navbar';)
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart} from './components';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
const App = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
  
  setProducts(data);
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
  
    setCart(cart)
  }

  const handleOnAddToCart = async (productId, quantity) => {
const item = await commerce.cart.add(productId, quantity);

setCart(item.cart);
} 

  useEffect(() => {
fetchProducts();
fetchCart();
  }, []);
  
  console.log(products)
  
  return (
    <>
        <Router>
  <div>
    <Navbar totalItems = {cart.total_items} />
    <Switch>
      <Route exact path='/'>
      <Products products = {products} onAddToCart = {handleOnAddToCart}/>
      </Route>

      <Route exact path='/cart'>
      <Cart cart={cart} />
      </Route>
    </Switch>
    </div>
    </Router>
    </>

  );
}

export default App;
