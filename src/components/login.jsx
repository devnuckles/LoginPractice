import { useState } from "react";
import Axios from "axios";
import { Navigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [user, setUser] = useState(null);

    const handleLogin = (event) => {
        event.preventDefault();
        const successLogin = (success) => {
            setUser(success.data);
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
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>

                <button
                    type="btn"
                    className="btn btn-primary"
                    onClick={handleLogin}
                >
                    Login
                </button>
            </form>
        </>
    );
}

export default Login;
