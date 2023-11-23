import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/login";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/contact";
import AllUsers from "./components/users";

class App extends Component {
    state = {};
    render() {
        return (
            <>
                <Navbar />

                <Routes>
                    <Route path="/login" Component={Login}></Route>
                    <Route path="/about" Component={About}></Route>
                    <Route path="/users" Component={AllUsers}></Route>
                    <Route path="/contact" Component={Contact}></Route>
                </Routes>
            </>
        );
    }
}

export default App;
