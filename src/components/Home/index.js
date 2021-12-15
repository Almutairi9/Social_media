import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Landpage = () => {
  const navigate = useNavigate();
  return (
    <div className="contener">
      <div id="imgDev">
        <img
          id="landImg"
          src="https://i.pinimg.com/originals/ed/9a/18/ed9a18bc848c838e149c93bff028a6c7.jpg"
          alt="landpic"
        />
        <div className="top-right">
          <br />
          <br />
          <Link to="/signup" className="btn" onClick={() => navigate(`/task`)}>
            Sign up
          </Link>
          <Link to="/login" className="btn" onClick={() => navigate(`/task`)}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Landpage;
