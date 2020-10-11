import React, { Component, useState } from 'react';
import {useHistory} from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import loginImg from '../img/login.svg'

import './ComponentStyles/Register.scss'

    const Register = (props) => {
      const [signUpData, setSignUpData] = useState({
        username: "",
        email: "",
        password: ""
      });
      const handleChanges = (event) => {
        setSignUpData({
          ...signUpData,
          [event.target.name]: event.target.value
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .post("/api/auth/register", signUpData)
        .then((res) => {
          console.log(res)
          console.log("user id in sign up", res.data.id);
        })
        .catch((err) => console.log({err}));
      }
    
    
        return (
        <div className="base-container">
            <div className="header">Register</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg} />
                </div>
            <div className="form">
            <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" value={signUpData.username} onChange={handleChanges} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" value={signUpData.email} onChange={handleChanges} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" value={signUpData.password} onChange={handleChanges} />
            </div>
            <div className="footer">
              <button type="submit" className="btn">
              Register
              </button>
            </div>
            </form>
          </div>
      </div>
      </div>
        )
    }
export default Register
