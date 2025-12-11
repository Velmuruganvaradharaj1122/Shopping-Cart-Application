import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold rounded-lg bg-white text-blue-600 p-2">V_Store</Link>
        <div className="flex gap-6 items-center font-medium">
          <Link to="/" className="hover:text-blue-200 transition bg-white text-blue-600 p-2 rounded-lg">Products</Link>
          
          <Link to="/cart" className="hover:text-blue-200 relative transition bg-white text-blue-600 p-2 rounded-lg">Cart            
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-blue-600">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;