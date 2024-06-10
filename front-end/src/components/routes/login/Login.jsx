import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import apiRequest from "../../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";
const Login = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { updateUser } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    const formdate = new FormData(e.target);
    const username = formdate.get("username");
    const password = formdate.get("password");
    try {
      const res = await apiRequest.post("auth/login", {
        username,
        password,
      });
      console.log(res.data);
      updateUser(res.data);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="password" type="password" placeholder="Password" />
          {error && <span>{error}</span>}
          <button disabled={isLoading}> Login</button>
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default Login;
