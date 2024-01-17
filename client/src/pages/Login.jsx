import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../toastStyles.css";
import { AuthContext } from "../context/authContext";
const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState("");
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(formData);
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        JSON.stringify(formData),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      if (response.status === 200 || response.status === 201) {
        console.log("User login successfully!", response);
        toast.success("Login successful!", { position: "top-right" });
        setFormData({
          username: "",
          password: "",
        });
        navigate("/");
      } else {
        console.error("loginfailed");
        toast.error("Login failed", {
          position: "top-right",
        });
      }
    } catch (err) {
      console.error("Error during login:", err);
      setError(err.response.data.error);
    }
  };

  return (
    <div className="auth">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          name="username"
          value={formData.username}
          className="registerInput"
          type="text"
          placeholder="username"
          onChange={handleChange}
        />
        <input
          name="password"
          required
          value={formData.password}
          className="registerInput"
          type="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button>Login</button>
        {err && <p>{err}</p>}
        <span>
          Don't you have an account <Link to="/register">Register</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
