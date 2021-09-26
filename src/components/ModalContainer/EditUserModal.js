import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import BaseModal from "../modal/BaseModal";

import { editUser } from "../../redux/actions/admin";
import { showEditUserModal, changeDataEditUserModal } from "../../redux/actions/modal";

function EditUser() {
  const dispatch = useDispatch();

  const { showEditUser, data } = useSelector((state) => state.modal);

 

  const onClose = () => {
    dispatch(showEditUserModal(showEditUser, []));
  };


  const onChangeUsername = (e) => {
    dispatch(changeDataEditUserModal({data: {
      username: e.target.value
    }}))
  };

  const onChangeEmail = (e) => {
  };

  const onChangeScore = (e) => {
 
  };

  const onChangeRole = (e) => {
   
  };

  const handleEdit = (e) => {
    e.preventDefault();

    dispatch(editUser(data.id, { username:data.username, email:data.email}));
  };

  if (!data) return null;
  return (
    <BaseModal show={showEditUser} title="Edit user" onClose={onClose}>
      <div className="card-container">
        <form onSubmit={handleEdit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={data.username}
              onChange={onChangeUsername}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={data.email}
              onChange={onChangeEmail}
            />
          </div>

          <div className="form-group">
            <label htmlFor="score">Score</label>
            <input
              type="text"
              className="form-control"
              name="score"
              value={data.score}
              onChange={onChangeScore}
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">Role</label>
            <input
              type="text"
              className="form-control"
              name="role"
              value={data.role}
              onChange={onChangeRole}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block">Update</button>
          </div>
        </form>
      </div>
    </BaseModal>
  );
}

export default EditUser;
