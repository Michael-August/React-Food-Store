import './App.css';
import "./font-awesome-4.7.0/css/font-awesome.min.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from "react";

import foodItems from './data'

import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import StoreItems from './components/StoreItems';
import Cart from './components/Cart';

const getCat = () => {
  let cats = foodItems.map((i) => i.category)
  return cats
}

function App() {

  const [items, setItems] = useState(foodItems)
  const [cartItems, setCartItems] = useState([])
  const [categories] = useState(['All', ...new Set(getCat())])

  const cartContents = () => {
    let sum = 0
    return items.reduce((p,c) => p + c.quantity, sum)
  }

  const addToCart = (item) => {
    let itemMani = [...items];
    let index = itemMani.indexOf(item);
    itemMani[index] = item;
    itemMani[index].quantity++;

    // Not too necessary, just wanted to get total for one item
    itemMani[index].totalPrice = itemMani[index].quantity * itemMani[index].price

    setItems([...itemMani]);
    let newItem = cartSetUp(item)
    setCartItems([...cartItems, newItem]);
  }

  const cartSetUp = (cartitem) => {
    let cartStuff = [...cartItems]
    let index = cartStuff.indexOf(cartitem);
    cartStuff[index] = cartitem
    return cartitem
  }

  const increament = (item) => {
    let itemIncre = [...items]
    let index = itemIncre.indexOf(item)
    itemIncre[index] = item
    itemIncre[index].quantity++
    itemIncre[index].totalPrice = itemIncre[index].quantity * itemIncre[index].price
    setItems([...itemIncre])
  }

  const decreament = (item) => {
    let itemDecre = [...items]
    let index = itemDecre.indexOf(item)
    itemDecre[index] = item;
    itemDecre[index].quantity--
    itemDecre[index].totalPrice = itemDecre[index].quantity * itemDecre[index].price
    setItems([...itemDecre])
  }

  const remove = (id) => {
    let deletedItem = cartItems.filter((i) => i.id !== id)
    setCartItems([...deletedItem])
  }

  const removeAll = () => {
    cartItems.splice(1, cartItems.length)
    setCartItems([])
  }

  const getTotalPrice = () => {
    let sum = 0
    return cartItems.reduce((p, c) => p + c.totalPrice, sum)
  }

  const filterItems = (cat) => {
    if (cat === 'All') {
      setItems(foodItems)
      return;
    }
    let filteredItems = foodItems.filter((i) => i.category === cat);
    setItems([...filteredItems])
  }
  
  return (
    <Router>
      <div className="container-fluid">
        <NavBar icon="fa fa-cart-plus fa-2x" quantity={cartContents()} />

        <div className="container mt-5">
          <Switch>
            <Route exact path="/">
              <div className="row">
                <div className="col-md-4">
                  <SideBar cats={categories} onFilter={filterItems} />
                </div>

                <div className="col-md-8">
                  <StoreItems
                    items={items}
                    addtocart={addToCart}
                    increase={increament}
                    decrease={decreament}
                  />
                </div>
              </div>
            </Route>
            <Route path="/cart">
              {cartItems.length !== 0 ? <Cart cart={cartItems} onRemoveAll={removeAll} totalprice={getTotalPrice()} onDelete={remove} /> : 'Cart is empty, add some items.'}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
