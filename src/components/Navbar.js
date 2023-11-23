import React, { Component } from "react";
import Navitem from "./Navitem";

class Navbar extends Component {
    state = {};

    handleLogout = () => {
        localStorage.removeItem("loggedInUser");
        window.location.reload();
    };
    render() {
        return (
            <>
                <nav className=" container navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            Navbar
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarNav"
                        >
                            <ul className="navbar-nav">
                                <Navitem content="Home" navUrl="/home" />
                                <Navitem content="Users" navUrl="/users" />
                                <Navitem content="About" navUrl="/about" />
                                <Navitem content="Contact" navUrl="/contact" />
                                <Navitem content="Login" navUrl="/login" />
                                <Navitem
                                    content="Logout"
                                    onClick={this.handleLogout}
                                />
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar;
