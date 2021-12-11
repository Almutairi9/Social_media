import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Nav from "./../Nav";
import {
  getCommentFunction,
  addCommentFunction,
  updateCommentFunction,
  deleteCommentFunction,
} from "./../../reducers/comment";

const Comments = ({ Post}) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const dispatch = useDispatch();
  const [description, setDescription] = useState([]);
//   const [token, setToken] = useState("");

  const state = useSelector((state) => {
    console.log(state);
    return {
      users: state.users,
      comments: state.comments, 
    };
  });
  console.log(state);
  useEffect(() => {
    getAllComments(state.users.token);
  }, []);

//   const User = () => {
//     const newToken = localStorage.getItem("token");
//     setToken(newToken);
//     getAllComments(newToken);
//   };

  //get all tasks
  const getAllComments = async (token) => {
    try {
      console.log(token);
      const result = await axios.get(`${BASE_URL}/comments`, {
        headers: {
          Authorization: `Bearer ${state.users.token}`,
        },
      });
      console.log(result.data);
      dispatch(getCommentFunction(result.data));
    } catch (error) {
      dispatch(getCommentFunction([]));
      console.log(error);
    }
  };

  // add new task
  const addNewComment = async () => {
    try {
      console.log("state.users.token");
      console.log(state.users);
      const result = await axios.post(
        `${BASE_URL}/comments/${Post._id}`,
        {
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${state.users.token}`,
          },
        }
      );
      dispatch(addCommentFunction(result.data));
    } catch (error) {
      console.log(error);
    }
    // getAllComments(token);
  };

  // update task
  const updateTask = async (id) => {
    const task = prompt("update your comment ... ");
    try {
      console.log(task);
      const result = await axios.put(
        `${BASE_URL}/comments/${id}`,
        {
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${state.users.token}`,
          },
        }
      );
      dispatch(updateCommentFunction(result.data));
      //   getAllComments(token);
    } catch (error) {
      console.log(error);
    }
  };

  // delete task by id
  const deleteTask = async (id) => {
    try {
    //   console.log(token);
      const result = await axios.delete(`${BASE_URL}/comments/${id}`, {
        headers: {
          Authorization: `Bearer ${state.users.token}`,
        },
      });
      dispatch(deleteCommentFunction(result.data));
      //   getAllComments(token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Nav />
      <br />
      <div>
        <input
          onChange={(e) => setDescription(e.target.value)}
          placeholder="add description"
        />{" "}
        <br />
        <br />
        <button className="btn" onClick={addNewComment}>
          Add New comment
        </button>
      </div>
      <div>
        {state.comments.length &&
          state.comments.map((item) => (
            <div key={item._id}>
              <h2>{item.description}</h2>
              <button onClick={() => updateTask(item._id)}>Update</button>
              <button onClick={() => deleteTask(item._id)}>Delete</button>
            </div>
          ))}
      </div>
      <br />
    </>
  );
};

export default Comments;
