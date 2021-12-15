import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./style.css";

const Users = () => {
  let navigate = useNavigate();
  const [allUsers, setAllUsers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getAllUsers();
  }, []);

  const state = useSelector((state) => {
    return state;
  });
  const getAllUsers = async () => {
    const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/user`, {
      headers: {
        Authorization: `Bearer ${state.users.token}`,
      },
    });
    console.log(result.data)
    setAllUsers(result.data);
  };
  const deleteUser = async (_id) => {
     await axios.delete(
      `${process.env.REACT_APP_BASE_URL}/user/${_id}`,
      {
        headers: {
          Authorization: `Bearer ${state.users.token}`,
        },
      }
    );
    deleteUser(state.users.token);
  };

  return (
    <div className="contener">
      {allUsers &&
        allUsers.map((ele) => {
          return (
            <div key={ele._id} className="users">
              <button className="btn" onClick={() => deleteUser(ele._id)}>
                delete
              </button>
              <h4 className="name">
              {ele.userName}
              <br></br>
              {ele.email}
              <br></br>
              {ele.createdAt}
              <br></br>
            <img className="img3" src={ele.pic} alt="img"/>
              </h4>
            </div>
          );
        })}

      {!allUsers.length && <h2>there is no user OR you are forbidden !!</h2>}
    </div>
  );
};
export default Users;
