import { useState } from "react";
import "./Login.css";
import { TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/authService";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const handleLogin = async (e) => {
    console.log("submit");
    e.preventDefault();
    try {
      await authService.login(email, password);
      navigate("/profile");
      window.location.reload();
    } catch (error) {
      setMessage("Invalid Credentials");
    }
  };
  return (
    <div className="login col-md-5 m-0 p-0">
      <form onSubmit={handleLogin}>
        <div className=" d-flex flex-column justify-content-center align-items-center   mt-md-5">
          <h2 className="mt-md-5  mb-3">Login Account</h2>

          <TextField
            className="mt-md-3 mb-3 shadow"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ width: "64%", backgroundColor: "white" }}
            id="outlined-email-input"
            label="Email"
            type="email"
            autoComplete="email"
            variant="outlined"
            required
          />
          <TextField
            className="mt-md-3 shadow"
            sx={{ width: "64%", backgroundColor: "white" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="password"
            variant="outlined"
            required
          />

          <Button
            variant="contained"
            type="submit"
            style={{
              backgroundColor: "#79D2B9",
              width: "64%",
              borderColor: "#79D2B9",
              color: "#ffffff",
            }}
            className="px-2 py-2  mt-4 mb-3 fw-bold "
          >
            Login
          </Button>
          {message && <div>{message}</div>}

          <Link to="/Forget" style={{ color: "#505050", fontSize: "15px" }}>
            Forgot Password?
          </Link>
          <p style={{ color: "#505050", fontSize: "15px" }}>
            Don’t have an Account?
            <Link to="/register" className="ms-1" style={{ color: "#79D2B9" }}>
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
