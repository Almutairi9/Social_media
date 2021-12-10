import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Nav from "./../Nav";

const Post = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [pic, setPic] = useState("");
  const [description, setDescription] = useState("");
  const [token, setToken] = useState("");

  const state = useSelector((state) => {
    console.log(state);
    return {
      users: state.users,
    };
  });

  const getAllPosts = async (token) => {
    try {
      console.log(token);
      const result = await axios.get(`${BASE_URL}/posts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(result);
      setPosts(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createPosts = async () => {
    try {
      console.log(description);
      await axios.post(
        `${BASE_URL}/posts`,
        {
           pic,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
    getAllPosts(token);
  };

  return (
    <>
      <Nav />
      <h1> next-line to the line before</h1>
      <br />
      <div>
        <input
          onChange={(e) => setDescription(e.target.value)}
          placeholder="add Tasks"
        />{" "}
        <br />
        <br />
        <button className="btn" onClick={createPosts}>
          Add New Task
        </button>
      </div>
    </>
  );
};

export default Post;
