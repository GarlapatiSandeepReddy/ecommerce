import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";
import Cart from "./Cart";
import Profile from "./Profile";
import Home from "./Home";

function App(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
}

export default App;