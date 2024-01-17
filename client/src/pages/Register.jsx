import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../toastStyles.css";
const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err, setError] = useState("");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/register",
        JSON.stringify(formData),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200 || response.status === 201) {
        console.log("User registered successfully!", response.data);
        toast.success("Registration successful!", { position: "top-right" });
        setFormData({
          username: "",
          email: "",
          password: "",
        });
        // navigate('/');
      } else {
        console.error("Registration failed");
        toast.error("Registration failed", {
          position: "top-right",
        });
      }
    } catch (err) {
      console.error("Error during registration:", err);
      setError(err.response.data.message);
    }
  };
  return (
    <div className="auth">
      <h1>Register</h1>
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
          name="email"
          value={formData.email}
          className="registerInput"
          type="email"
          placeholder="example@example.com"
          onChange={handleChange}
          required
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
        <button>Register</button>
        {err && <p>{err}</p>}
        <span>
          Don't you have an account <Link to="/login">Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
