import React from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "./../../reducers/users";
import { Link } from "react-router-dom";
import "./style.css";

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      users: state.users,
    };
  });

  const logOut = () => {
    navigate(`/`);
    dispatch(userLogout({ token: "" }));
    console.log("log out");
  };
  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <img src="/task.jpg" alt="Soial Media" className="nav-logo" />
          {state.users.token.length !== 0 ? (
            <ul>
              {state.users.role === "61b1ed947473faeb6bb570dd" && ( // admin
                <button
                  to="/users"
                  className="btn"
                  onClick={() => navigate(`/post`)}
                >
                  Users
                </button>
              )}
              <ul className="nav-menu">
                <li className="nav-item">
                  <button
                    className="btn"
                    type="submit"
                    onClick={() => navigate(`/post`)}
                  >
                    Posts
                  </button>
                  <button className="btn" type="submit" onClick={logOut}>
                    Log out
                  </button>
                </li>
              </ul>
            </ul>
          ) : (
            console.log("RAWAN ...")
          )}
        </nav>
      </header>
    </div>
  );
};

export default Nav;
