import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Footer from "./components/footer/Footer";
import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Mockman from "mockman-js";


function App() {


    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/"
                    element={<Home/>}/>
                <Route path="/products"
                    element={<Products/>}/>
                <Route path="/product/:id"
                    element={<Product/>}/>
                <Route path="/cart"
                    element={<Cart/>}/>
                <Route path="/wishlist"
                    element={<Wishlist/>}/>
                <Route path="/login"
                    element={<Login/>}/>
                <Route path="/signup"
                    element={<Signup/>}/>
                <Route path='/mockman'
                    element={<Mockman/>}/>

            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
