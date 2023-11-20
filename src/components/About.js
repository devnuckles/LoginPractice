import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class About extends Component {
    state = {};
    render() {
        const getUser = localStorage.getItem("loggedInUser");
        return (
            <>
                {!getUser && <Navigate to="/login" replace={true} />}
                <h2 className="container text-center my-5">
                    This is about page
                </h2>
            </>
        );
    }
}

export default About;
