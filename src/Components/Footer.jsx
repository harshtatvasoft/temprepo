import Logo from "../assets/FundHiveLogo.png";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import "./Footer.css";
import validator from "validator";
import { useState } from "react";
const Footer = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [ValidEmail,SetValidEmail]=useState(false);
    const handleSendEmail = (e) => {
      e.preventDefault();
      if(!validator.isEmail(email)){
        SetValidEmail(true);
        return;
      }
      // const emailConfig = {
      //   host: 'smtp.example.com',
      //   port: 587,
      //   secure: false, // or 'STARTTLS'
      //   auth: {
      //     user: 'your-email@example.com',
      //     pass: 'your-email-password',
      //   },
      // };
      
      // const emailMessage = {
      //   from: 'your-email@example.com',
      //   to: 'recipient-email@example.com',
      //   subject: 'Contact Form Submission',
      //   body: `
      //     <p>Hello,</p>
      //     <p>You received a new contact form submission from  (${email}).</p>
      //     <p>Message: ${message}</p>
      //   `,
      // };
  
    //   Email.send(emailConfig, emailMessage)
    //     .then((response) => {
    //       console.log('Email sent successfully!');
    //     })
    //     .catch((error) => {
    //       console.error('Error sending email:', error);
    //     });
    };
   const EmailHandler=(e)=>{
     setEmail(e.target.value);
     if(!validator.isEmail(e.target.value)){
        SetValidEmail(false);
      }
      else{
        SetValidEmail(true);
      }
   }
   const MessageHandler=(e)=>{
    setMessage(e.target.value);
   }
  return (
    <>
      <div className="d-flex flex-md-row flex-column px-5 bg-dark-subtle gap-5 justify-content-between">
        <div className="d-flex justify-content-center align-items-center flex-column gap-3">
          <img alt="Logo" src={Logo} height={60} className="mt-2" />
          <Link
            className="ms-2 text-decoration-none mt-3 fw-medium text-black"
            to="/About"
          >
            About Us
          </Link>
          <Link
            className="ms-2 text-decoration-none fw-medium text-black"
            to="/Campaign"
          >
            Campaign
          </Link>
          <Link
            className="ms-2 text-decoration-none fw-medium text-black"
            to="/"
          >
            Login
          </Link>
          <Link
            className="ms-2 text-decoration-none fw-medium text-black"
            to="/"
          >
            Sign Up
          </Link>
          <div className="p-3 d-flex align-items-center gap-3">
            <FaFacebook size={40} className="facebook-icon pointer " />
            <FaLinkedin size={40} className="linkedin-icon" />
            <FaGithub size={40} className="github-icon" />
            <BsInstagram size={40} className="instagram-icon" />
          </div>
        </div>
        <div className="d-flex flex-column me-sm-5 justify-content-center align-items-md-center">
          <h3 className="text-center">Contact Us</h3>
          <form className="d-flex flex-column gap-3" onSubmit={handleSendEmail}>
            <TextField id="outlined-error" 
            label="Email"
            className="align-self-center w-100"
            value={email}
            error={ValidEmail}
            onChange={EmailHandler}
             />
            <TextField
              id="outlined-multiline-static"
              label={message}
              multiline
              rows={4}
              onChange={MessageHandler}
            />
            <Button type="submit" variant="contained" style={{ background: "black" }}>
              Submit
            </Button>
          </form>
        </div>
      </div>
      
    </>
  );
};

export default Footer;
