import axios from "axios";
import { useEffect, useState } from "react";

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    const getUsers = () => {
        const success = (response) => {
            const users = response.data.users;
            setUsers(users);
            console.log(users);
        };
        const error = (err) => {
            console.log(err);
        };

        axios.get("https://dummyjson.com/users").then(success).catch(error);
    };

    useEffect(getUsers, []);
    return (
        <div className="container mt-5">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Username</th>
                        <th scope="col">Password</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(function (user) {
                        return (
                            <tr>
                                <th scope="row">{user.id}</th>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                            </tr>
                        );
                    })}
                    ;
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;
