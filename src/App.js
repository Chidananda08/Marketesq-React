import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './store';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import OrderComplete from './pages/OrderComplete';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order-complete" element={<OrderComplete />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
