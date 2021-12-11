import React, { useEffect, useState } from "react";
import Nav from "./../Nav";
import "./style.css";
import axios from "axios";
import { useSelector } from "react-redux";

const Post = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState("");
  const [updatePost, setUpdatePost] = useState("");

  const state = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    try {
      const result = await axios.get(`${BASE_URL}/posts`, {
        headers: {
          Authorization: `Bearer ${state.users.token}`,
        },
      });
      console.log(result);
      setPosts(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  //add new post
  const addNewPost = async () => {
    try {
      await axios.post(`${BASE_URL}/posts`, { 
          pic:"https://i.pinimg.com/originals/ed/9a/18/ed9a18bc848c838e149c93bff028a6c7.jpg",
          description: post,

        },
        {
          headers: {
            Authorization: `Bearer ${state.users.token}`,
          },
        }
      );
      // dispatch(addNewTask(result.data));
      getAllPosts(state.users.token);
    } catch (error) {
      console.log(error);
    }
  };

  // edit task
  const updateTask = async (id) => {
    try {
      await axios.put(
        `${process.env.REACT_APP_BASE_URL}/posts/${id}`,
        {
          pic:"https://i.pinimg.com/originals/ed/9a/18/ed9a18bc848c838e149c93bff028a6c7.jpg",
          description: updatePost,
        },
        {
          headers: {
            Authorization: `Bearer ${state.users.token}`,
          },
        }
      );
      getAllPosts(state.users.token);
    } catch (error) {
      console.log(error);
    }
    window.location.reload(false);
  };

  // delete post by id
  const deleteTask = async (_id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BASE_URL}/posts/${_id}`, {
        headers: {
          Authorization: `Bearer ${state.users.token}`,
        },
      });
      deleteTask(state.users.token);
    } catch (error) {
      console.log(error);
    }
    window.location.reload(false);
  };

  return (
    <>
      <Nav />
      <div style={{ marginTop: "0" }}>
        <br />
        <hr />
      </div>
      <div>
        <input
          type="text"
          name="post"
          onChange={(e) => setPost(e.target.value)}
          placeholder="add Post"
        />
        <button
          className="addBtn"
          onClick={addNewPost}
          style={{ color: "white", fontSize: "20px" }}
        >
          +
        </button>
      </div>
      <div className="posts">
        {posts.length &&
          posts.map((item) => (
            <>
              <div key={item._id}>
                <div className="post">
                  <img id="image" src={item.pic}></img>
                  <h2 key={item._id}>{item.description}</h2>
                  <input
                    type="text"
                    onChange={(val) => {
                      setUpdatePost(val.target.value);
                    }}
                  />
                  <button onClick={() => updateTask(item._id)}>
                    {" "}
                    update Your Post{" "}
                  </button>
                  <button onClick={() => deleteTask(item._id)}>Delete</button>
                </div>
              </div>
            </>
          ))}
      </div>
    </>
  );
};
export default Post;
