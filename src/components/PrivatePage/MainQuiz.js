import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import { logout } from "../../redux/actions/auth";
import Admin from "./Admin";
import User from "./User";
import MainLayout from "../layout/MainLayout";
import GameScreen from "./Game/GameScreen";
import SummaryScreen from "./Game/SummaryScreen";

import { getUserInfo } from "../../redux/actions/user";
import '../../resources/scss/mainquiz/mainquiz.scss'

import PermissionRoute from "../../routing/PermissionRoute";

function MainQuiz() {
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { role: currentUser, username } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  let { path, url } = useRouteMatch();
  

  useEffect(() => {
    if(!currentUser){
      dispatch(getUserInfo())
    }

   if (currentUser) {
      setShowAdminBoard(currentUser.includes("admin"));
      console.log(showAdminBoard, 'admin')
    } else {
      setShowAdminBoard(false);
    }
  }, [dispatch,currentUser]);


  const logOut = () => {
    dispatch(logout());
  };

  return (
    <React.Fragment>
      <MainLayout>
        <div>
          {showAdminBoard && (
            <div className="nav-item">
              <Link to={`${url}/admin`} className="nav-link">
                Admin Board
              </Link>
            </div>
          )}

          {currentUser && (
            <div className="nav-item">
              <Link to={`${url}/user`} className="nav-link">
                Hello, {username}
              </Link>
            </div>
          )}
            {/* <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li> */}
           { !showAdminBoard &&
               <div className="nav-item">
               <Link to={`${url}/game`} className="nav-link">
                 Game
               </Link>
             </div>
           }
            <div className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </div>
        </div>
        <Switch>
          <Route path={`${path}/game`} component={GameScreen} />
          <Route path={`${path}/user`} component={User} />
          <PermissionRoute path={`${path}/admin`} component={Admin} isAdmin={showAdminBoard} />
          <Route path={`${path}/summary`} component={SummaryScreen} />
        </Switch>
      </MainLayout>
    </React.Fragment>
  );
}

export default MainQuiz;
