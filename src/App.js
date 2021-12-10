import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Signin from "./components/signin";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Task from "./components/task";
import Comment from "./components/Comment";
import Like from "./components/Like";
import Post from "./components/Post" 
function App() {
  
  return (
    <>
          <Routes>
          <Route exact path="/nav" element={<Nav />} />
          <Route exact path="/Task" element={<Task />} />
          <Route exact path="/Task" element={<Comment />} />
          <Route exact path="/Post" element={<Post />} />
          <Route exact path="/Like" element={<Like />} />
        </Routes>
        
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signin />} />
          <Route exact path="/login" element={<Login />} />
          </Routes>
    </>
  );
}
export default App;