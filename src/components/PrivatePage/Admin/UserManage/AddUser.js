import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addUser } from "../../../../redux/actions/admin";

function AddUser({ isShow }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const dispatch = useDispatch()

  const handleRegister = (e) => {
    e.preventDefault();

    dispatch(addUser(username, email, password, name, role))
  };

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

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangeRole = (e) => {
    const role = e.target.value;
    setRole(role);
  };

  return (
    isShow && (
      <div className="card-container">
        <form onSubmit={handleRegister}>
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
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={onChangeName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <input
              type="text"
              className="form-control"
              name="role"
              value={role}
              onChange={onChangeRole}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block">Sign Up</button>
          </div>
        </form>
      </div>
    )
  );
}

export default AddUser;
