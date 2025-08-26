// App.jsx
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Dashboard from "./components/Web Component/dashboard";
import Signin from "./components/Web Component/signin";
import Signup from "./components/Web Component/signup";
import Payment from "./components/Web Component/payment";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signin" />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
}

export default App;
