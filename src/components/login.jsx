import React, { Component } from "react";
import Axios from "axios";
import { Navigate } from "react-router-dom";

class Login extends Component {
    state = {
        email: "",
        password: "",
    };

    handleEmailChange = (event) => {
        const updatedEmail = event.target.value;
        this.setState({ ...this.state, email: updatedEmail });
    };

    handlePasswordChange = (event) => {
        const updatedPassword = event.target.value;
        this.setState({ ...this.state, password: updatedPassword });
    };

    handleLogin = (event) => {
        event.preventDefault();
        const { email, password } = this.state;

        const successLogin = (success) => {
            this.setState({ ...this.state, user: success.data });

            localStorage.setItem("loggedInUser", true);
        };

        const errorLogin = (error) => {
            alert("Invalid Credentials");
        };

        const body = {
            username: email,
            password,
        };

        Axios.post("https://dummyjson.com/auth/login", body)
            .then(successLogin)
            .catch(errorLogin);
    };

    render() {
        const getUser = localStorage.getItem("loggedInUser");
        return (
            <>
                {getUser && <Navigate to="/about" replace={true} />}
                <form className="container">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            for="exampleInputPassword1"
                            className="form-label"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                        />
                    </div>

                    <button
                        type="btn"
                        className="btn btn-primary"
                        onClick={this.handleLogin}
                    >
                        Login
                    </button>
                </form>
            </>
        );
    }
}

export default Login;
