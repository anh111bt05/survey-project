import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../../../redux/actions/admin";
import { LoadingSpinner } from "../../../../components/Loading";
import AddUser from "./AddUser";

import { deleteUser } from "../../../../redux/actions/admin";
import { showEditUserModal } from "../../../../redux/actions/modal";

import './user-manage.scss'


function UserManage() {
  const dispatch = useDispatch();
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const { users, loading } = useSelector((state) => state.admin);
  const { user: currentUser } = useSelector((state) => state.auth);

  const showAddUser = () => {
    setIsShow(!isShow);
  };

  const handleDelete = useCallback(
    (id) => {
      dispatch(deleteUser(id));
    },
    [dispatch]
  );

  const handleShowEditModal = useCallback(
    (isShow, id) => {
      dispatch(showEditUserModal(isShow, id));
    },
    [dispatch]
  );

  if (!users) return null;
  return (
    <div className="user-manager">
      <h3>User Manage</h3>
      <div className="btn-add" onClick={showAddUser}>
        Add User
      </div>
      <AddUser isShow={isShow} />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <table id='user-manage-table'>
          <tr>
            <th>User name</th>
            <th>Email</th>
            <th>Verified</th>
            <th>Score</th>
            <th>Action</th>
          </tr>
          {users.map((user) => (
            <tr>
              <td> {user.username}</td>
              <td> {user.email}</td>
              <td> {user.isEmailVerified ? 'True' : 'False'}</td>
              <td> {user.score}</td>
              {/* Avoid to use () => handleDelete */}
             {currentUser.id === user.id ? 'Current user' :  <td>
                <div className='button-container'>
                <div onClick={handleShowEditModal.bind(null,isShow, user)} className='btn btn-edit'>Edit</div>
                
                <div onClick={handleDelete.bind(null,user.id)} className='btn btn-delete'>Delete</div>
                </div>
              </td>}
            </tr>
          ))}
        </table>
      )}
    </div>
  );
}

export default UserManage;
