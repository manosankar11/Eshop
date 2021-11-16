import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Cart from "./components/Cart/Cart";
import LoginPage from "./components/Login/Login";
import Register from "./components/Register/Register";
import HeaderLogin from "./components/HeaderLogin/HeaderLogin";

const App = () => {
  return (
    <>
      <Router>
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
