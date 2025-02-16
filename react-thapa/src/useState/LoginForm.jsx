import { useState } from "react";
import "./index.css";

const LoginForm = () => {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  function handleInputChange(event) {
    console.log(">> event", event);

    const { name, value } = event.target;

    setLoginForm((prevForm) => {
      return { ...prevForm, [name]: value };
    });
  }
  function handleLogin(event) {
    event.preventDefault();
    console.log(">> loginForm", loginForm);
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Login Form</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="">Username</label>
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            onChange={handleInputChange}
          />

          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            required
            autoComplete="off"
            onChange={handleInputChange}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
