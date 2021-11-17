import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Cart from "./components/Cart/Cart";
import LoginPage from "./components/screen/Login/Login";
import Register from "./components/screen/Register/Register";



const App = () => {
  return (
    <>
      <Router>
        {/* {window.location.pathname !== '/login' ? <Header /> : null} */}
        <Header />
        <div className="App">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
