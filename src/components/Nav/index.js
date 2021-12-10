import React from "react";
import { useNavigate } from "react-router";
import { useDispatch , useSelector } from "react-redux";
import { userLogout } from "./../../reducers/users"; 
import "./style.css";

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      users: state.users,
      TodosFun: state.TodosFun,
    };  
  });

  const logOut = () => {
    navigate(`/`);
    // localStorage.clear();
    dispatch(userLogout({ token: "" }));
    console.log("log out");
  };
  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <img src="/task.jpg" alt="Task" className="nav-logo" />  
          <ul className="nav-menu">
            <li className="nav-item">
              <button className="btn" type="submit" onClick={logOut}>
                Log out
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Nav;