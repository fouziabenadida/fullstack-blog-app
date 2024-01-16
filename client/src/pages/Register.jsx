import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err, setError] = useState(null);
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/register",
        JSON.stringify(inputs),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200 || response.status === 201) {
        console.log("User registered successfully!");
        // toast.success('Registration successful!', {
        //   position: toast.POSITION.TOP_RIGHT,
        // });
        setInputs({
          username: "",
          email: "",
          password: "",
        });
      } else {
        console.error("Registration failed");
        // toast.error('Registration failed. Please try again.', {
        //   position: toast.POSITION.TOP_RIGHT,
        // });
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          value={inputs.username}
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          value={inputs.email}
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          value={inputs.password}
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        <p>This is an error!</p>
        <span>
          Don't you have an account <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
