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
          src="https://www.educationalappstore.com/blog/wp-content/uploads/2018/08/best-to-do-list-apps-for-task-management-750x350.jpg"
          alt="landpic"
        />
        <div className="top-right">
          {/* Technology Apps Get all the latest news and details of Technology News
          from India and across the world on mint. Let's Connect Now! */}
          <br />
          <br />
          <Link
            to="/signup"
            className="btn"
            onClick={() => navigate(`/task`)}
          >
            Sign up
          </Link>
          <Link
            to="/login"
            className="btn"
            onClick={() => navigate(`/task`)}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Landpage;