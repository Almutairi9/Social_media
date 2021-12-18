import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { userLogin } from "../../reducers/users";
import { Container } from "react-bootstrap";
import axios from "axios";
import "./style.css";

const popupTools = require("popup-tools");
const MySwal = withReactContent(Swal);

const Login = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userRegister, setuserRegister] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const state = useSelector((state) => {
    console.log(state);
    return {
      users: state.users,
      token: state.token,
    };
  });

  const log = async (e) => {
    setMessage("");
    try {
      e.preventDefault();
      const result = await axios.post(`${BASE_URL}/login`, {
        userRegister: userRegister,
        password: password,
      });
      console.log(result);

      dispatch(
        userLogin({
          role: result.data.result.role.role,
          token: result.data.token,
          user: result.data.result,
        })
      );
      if(result.data.result.role.role === "Admin"){
        navigate("/users");
      } else{
      navigate("/post");
      }
    } catch (error) {
      console.log(error);
      // setMessage(error.response.data.message);
    }
  };

  const OAuthGoogle = () => {
    popupTools.popup(
      `${BASE_URL}/auth/google`,
      "Google Login",
      { width: 400, height: 600 },
      function (err, user) {
        if (err) {
          console.log(err);
        } else {
          console.log(user);
          dispatch(
            userLogin({
              role: user.result.role.role,
              token: user.token,
              user: user.result,
            })
          );
          navigate("/post");
        }
      }
    );
  };

  const forgotPassword = async () => {
    const { value: email } = await MySwal.fire({
      title: "Forgot Password",
      input: "email",
      inputPlaceholder: "Enter your email address",
      showCancelButton: true,
      confirmButtonColor: "#E07A5F",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    });

    if (email) {
      try {
        await axios.post(`${BASE_URL}/check_email`, {
          email,
        });
        MySwal.fire({
          icon: "success",
          text: "Check your email to reset the password",
          confirmButtonColor: "#E07A5F",
        });
      } catch (error) {
        MySwal.fire({
          icon: "error",
          text: "Something went wrong!",
          confirmButtonColor: "#E07A5F",
        });
      }
    }
  };

  return (
    <div>
      <Container>
        <form>
          <h1>Login </h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label for="e-mail">
            <b>Enter your e-mail OR userName :</b>
          </label>
          <input
            type="text"
            value={userRegister}
            placeholder="Enter you e-mail"
            name="e-mail"
            id="e-mail"
            required
            onChange={(e) => {
              // console.log(e);
              setuserRegister(e.target.value);
            }}
          />
          <label for="password">
            <b>Enter you password :</b>
          </label>
          <input
            type="password"
            value={password}
            placeholder="Enter password "
            name="password"
            id="password"
            required
            onChange={(e) => {
              // console.log(e.target.value);
              setPassword(e.target.value);
            }}
          />
          <hr />
          <p className="forgotPassword" onClick={forgotPassword}>
            Do you forgot your password !
          </p>
          <button onClick={log} type="submit" className="registerbtn">
            login
          </button>
        </form>
        <button type="button" onClick={OAuthGoogle}>
          <button class="btn btn-danger">
            <i>Login with Google</i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-google"
              viewBox="0 0 16 16"
            >
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
            </svg>
          </button>
        </button>
      </Container>
    </div>
  );
};
export default Login;
