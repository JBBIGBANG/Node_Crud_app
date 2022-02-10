import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import Details from './components/Details';

function App() {
  return (
   <>
    <Router>
        <Navigation />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addProduct" element={<AddProduct />} />
            <Route path="/editProduct/:id" element={<EditProduct />} />   
            <Route path="/details/:id" element={<Details />} />
        </Routes>
    </Router>
   </>
    
  );
}

export default App;
