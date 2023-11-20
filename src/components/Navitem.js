import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navitem extends Component {
    state = {
        content: this.props.content,
        navUrl: this.props.navUrl,
        onClick: this.props.onClick,
    };

    render() {
        return (
            <>
                <li className="nav-item">
                    <Link
                        className="nav-link active"
                        aria-current="page"
                        to={this.state.navUrl}
                        onClick={this.state.onClick}
                    >
                        {this.state.content}
                    </Link>
                </li>
            </>
        );
    }
}

export default Navitem;
