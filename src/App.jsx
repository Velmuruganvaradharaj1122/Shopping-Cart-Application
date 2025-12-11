import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + amount;
          return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
        }
        return item;
      })
    );
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans pb-10">
        <Navbar cartCount={cart.length} />
        <Routes>
          <Route 
            path="/" 
            element={
              <ProductList 
                cart={cart} 
                addToCart={addToCart} 
                removeFromCart={removeFromCart} 
              />
            } 
          />
          <Route 
            path="/cart" 
            element={
              <Cart 
                cart={cart} 
                updateQuantity={updateQuantity} 
                removeFromCart={removeFromCart} 
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 