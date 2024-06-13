import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { TextField, Typography } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Register/Register.css";
import authService from "../../services/authService";
import { Link } from "react-router-dom";
import validator from "validator";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logoImage from "../../assets/logo.png";
const strongPassword = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [Emailerror, setEmailError] = useState(false);
  const [Passworderror, setPasswordError] = useState(false);
  const [EmailLabel, setEmailLabel] = useState("");
  const [PasswordLabel, setPasswordLabel] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [usernameLabel, setUsernameLabel] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.trim().length === 0 || Emailerror) {
      setEmailError(true);
      if (!Emailerror) setEmailLabel("Email must not empty");
      else setEmailLabel("Email is not valid");
    }
    if (password.trim().length === 0 || Passworderror) {
      setPasswordError(true);
      if (!Passworderror) setPasswordLabel("Password must not be empty");
      else
        setPasswordLabel(
          "Password must contains at least 8 characters, including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character."
        );
    }
    if (username.trim().length === 0) {
      setUsernameError(true);
      setUsernameLabel("Field must not be empty");
      return false;
    }
    if (
      password.trim().length === 0 ||
      email.trim().length === 0 ||
      Passworderror ||
      Emailerror
    )
      return false;
    try {
      await authService.register(username, email, password);
      // setError('');
      toast.success("Registration Successfull !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      // toaster of successfull regsitration
      window.location.href = "/login"; // Redirect to login page after successful registration
    } catch (err) {
      // toaster of error regsitration
    }
  };
  const EmailHandler = (e) => {
    setEmail(e.target.value);
    if (!validator.isEmail(e.target.value)) {
      setEmailError(true);
      setEmailLabel("Email is not valid");
    } else {
      setEmailError(false);
      setEmailLabel("");
    }
  };
  const PasswordHandler = (e) => {
    setPassword(e.target.value);
    if (!strongPassword.test(e.target.value)) {
      setPasswordError(true);
      setPasswordLabel(
        "Password must contains at least 8 characters, including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character."
      );
    } else {
      setPasswordError(false);
      setPasswordLabel("");
    }
  };
  const UserNameHandler = (e) => {
    setUsername(e.target.value);
    if (username.trim().length === 0) {
      setUsernameError(true);
      setUsernameLabel("Field must not be empty");
    } else {
      setUsernameError(false);
      setUsernameLabel("");
    }
  };
  return (
    <>
      <ToastContainer />
      {/* <div className="d-flex justify-content-center align-content-center">
        <div className=" col-lg-5 col-md-7 col-12 p-3 p-md-0">
          <Container className="my-5 bg-light">
            <header className=" text-success text-center py-3">
              <Typography variant="h4" className="text-bolder text-black">
                Registration Form
              </Typography>
            </header>
            <Row className="justify-content-md-center">
              <Col md={8}>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <TextField
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      value={username}
                      error={usernameError}
                      helperText={usernameLabel}
                      onChange={UserNameHandler}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <TextField fullWidth label="Last Name" variant="outlined" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <TextField
                      fullWidth
                      label="Email"
                      type="text"
                      variant="outlined"
                      value={email}
                      error={Emailerror}
                      onChange={EmailHandler}
                      helperText={EmailLabel}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <TextField
                      fullWidth
                      label="Password"
                      type="password"
                      variant="outlined"
                      value={password}
                      error={Passworderror}
                      onChange={PasswordHandler}
                      helperText={PasswordLabel}
                    />
                  </Form.Group>
                  <Button
                    className="w-100 my-5 border text-white fw-medium"
                    type="submit"
                    style={{ backgroundColor: "#79D2B9" }}
                  >
                    Register
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div> */}
      <div className="header-register-bg d-flex justify-content-center align-content-center ">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5 p-3 p-md-0">
          <Container className="mt-5 bg-light py-4 shadow rounded">
            <div className="d-flex justify-content-center mb-5 mt-4">
              <img alt="Logo" src={logoImage} height={55} className="mt-2" />
            </div>
            <Row className="justify-content-md-center">
              <Col md={8} className="mt-2 d-flex justify-content-start">
                <Link
                  to="/"
                  className="backbtn rounded p-2 mb-2"
                  variant="outlined"
                >
                  &lt; Back
                </Link>
              </Col>
            </Row>
            <header className=" text-success text-center pt-1 pb-4">
              <Typography variant="Containt" className="header-register">
                Registration Form
              </Typography>
            </header>
            <Row className="justify-content-md-center">
              <Col md={8}>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <TextField
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      value={username}
                      error={usernameError}
                      helperText={usernameLabel}
                      onChange={UserNameHandler}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <TextField fullWidth label="Last Name" variant="outlined" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      variant="outlined"
                      value={email}
                      error={Emailerror}
                      onChange={EmailHandler}
                      helperText={EmailLabel}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <TextField
                      fullWidth
                      label="Password"
                      type="password"
                      variant="outlined"
                      value={password}
                      error={Passworderror}
                      onChange={PasswordHandler}
                      helperText={PasswordLabel}
                    />
                  </Form.Group>
                  <Button
                    variant="contained"
                    id="register-button"
                    className="w-100 my-3 py-2 text-white rounded"
                    type="submit"
                  >
                    Register
                  </Button>
                </Form>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col md={8}>
                <Typography className="d-flex  my-3">
                  Already have an Account?{" "}
                  <Link to="/" className="singIn">
                    Sign In
                  </Link>
                </Typography>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Register;
