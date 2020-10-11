import React, {useState} from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import loginImg from "../img/login.svg";

import './ComponentStyles/Register.scss'

const Login = (props) => {
  const [logInData, setLogInData] = useState({ username: "", password: "" });

  const handleChanges = (event) => {
    event.preventDefault();
    setLogInData({ ...logInData, [event.target.name]: event.target.value });
    //console.log(logInData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/auth/login", logInData)
      .then((res) => {
        console.log(res.data);
        window.localStorage.setItem("token", res.data.token);
        setLogInData({ username: "", password: "" });
        props.getID(res.data.id);
        console.log("user id in login", res.data.id);
        props.history.push("/dashboard");
      })
      .catch((err) => console.log(err, logInData));
  };

    return (
      <div className="base-container">
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" value={logInData.username}
            onChange={handleChanges} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" value={logInData.password}
            onChange={handleChanges} />
            </div>
        <div className="footer">
          <button type="submit" className="btn">
            Login
          </button>
        </div>
        </form>
      </div>
      </div>
      </div>
    );
  }

  export default Login