import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Navbar from './components/Navbar';

const App: FC = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart" element={<CartScreen />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
