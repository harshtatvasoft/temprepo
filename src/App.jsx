import { useEffect, useState } from "react";
import AboutUs from "./Components/ContactUs";
import ContactUs from "./Components/AboutUs";

import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingSection/LandingPage";
import Forget from "./Components/Forget";
import Categories from "./Components/Category";
import decodetoken from "./jwt/decodetoken";
import authService from "./services/authService";
import Profile from "../src/Pages/Admin/Profile";
import Register from "./Components/Register/Register";
const App = () => {
  const [token, setToken] = useState("");
  const [role, setRole] = useState("");
  useEffect(() => {
    var user = authService.getCurrentUser();
    console.log("User is here:" + user);
    if (user) {
      console.log("user" + user.token);
      console.log(user.role);
      setToken(user.token);
      var role = decodetoken.getRoleFromToken(user.token);
      setRole(role);
    }
  }, []);
  const renderPanel = () => {
    switch (role) {
      case "1":
        return <Profile />;
      case "2":
        return <LandingPage />;
      case "3":
        return <LandingPage />;
      default:
        return null;
    }
  };

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/forget" element={<Forget />} />
      <Route path="/register" element={<Register />} />
      <Route exact path="/categories" element={<Categories></Categories>} />
      <Route path="/aboutus" element={<AboutUs></AboutUs>} />
      <Route path="/contactus" element={<ContactUs></ContactUs>} />
      <Route
        path="/profile"
        element={token ? renderPanel() : <LandingPage />}
      />
    </Routes>
  );
};

export default App;
