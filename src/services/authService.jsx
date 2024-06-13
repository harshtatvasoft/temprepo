import axios from 'axios';
import { json } from 'react-router-dom';


const API_URL = "http://localhost:5047/api/Auth/";

const authHeaders = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
});

const register = (username, email, password) => {
    return axios.post(API_URL + "register", {
        username,
        email,
        password
    });
};

const login = (email, password) => {
    console.log("Login");
    return axios.post(API_URL + "login", {
        email,
        password
    }).then(response => {

        if (response.data.result.token) {
            console.log(response.data.result.token + "data");
            localStorage.setItem("token", JSON.stringify(response.data.result));
        }
        return response.data;
    });
};
const logout = () => {
    localStorage.removeItem("user");
};
const getCurrentUser = () => {
    console.log(JSON.parse(localStorage.getItem("token")));
    return JSON.parse(localStorage.getItem("token"));
};


const GetBooks = async () => await axios.get(API_URL + "id", authHeaders());

export default {
    register,
    login,
    logout,
    getCurrentUser,
    GetBooks
};
