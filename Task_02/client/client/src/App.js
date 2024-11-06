import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Forgotpassword from "./pages/components/forgotpassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        
      </Routes>
    </Router>
  );
}

export default App;
