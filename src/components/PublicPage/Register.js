import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";


import { register } from "../../redux/actions/auth";

import Header from "./Header";

import "../../resources/scss/form/form.scss";

import { toastError } from "../../ultils/toast/index";


const Register = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cfpassword, setCfPassword] = useState("");

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onCfChangePassword = (e) => {
    const password = e.target.value;
    setCfPassword(password);
  };



  const handleRegister = (e) => {
    e.preventDefault();

    if(cfpassword !== password){
      return toastError({
        message: 'Confirm password not match with password',
      });
    }

    dispatch(register(username, email, password))
      .then((data) => {
        if (data === 1) {
          props.history.push("/mainquiz");
        }
      })
      .catch((err) => {
        console.log(err, "aaaa");
      });
  };

  return (
    <div className="col-md-12">
      <Header />
      <div className="card-container">
        <form onSubmit={handleRegister} ref={form}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={email}
              onChange={onChangeEmail}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
            />
          </div>

          
          <div className="form-group">
            <label htmlFor="password">Confirm password</label>
            <input
              type="password"
              className="form-control"
              name="cfpassword"
              value={cfpassword}
              onChange={onCfChangePassword}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block">Sign Up</button>
          </div>

          <button style={{ display: "none" }} ref={checkBtn} />
        </form>
      </div>
    </div>
  );
};

export default Register;
