import React, { useState } from "react";
const LoginPage = ({ setIsLogin }) => {

  const [username, setUsername] = useState("");

  const handleLogin = () => {

    if (username.trim() === "") {
      alert("Please enter username");
      return;
    }

    setIsLogin(true);
  };

  return (
    <div className="app">

      <h1 className="title">Login Page</h1>

      <div className="main-container">

        <h2 className="live-time">Welcome</h2>

        <img
          className="cat"
          src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
          alt="cat"
        />

        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />

        <br />

        <button
          className="increase"
          onClick={handleLogin}
        >
          Login
        </button>

      </div>

    </div>
  );
};

export default LoginPage;