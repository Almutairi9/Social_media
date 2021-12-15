import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
//import PasswordChecklist from "react-password-checklist";
import axios from "axios";
import { Container } from "react-bootstrap";
import "./style.css";

import PasswordStrength from "../ComplexPassword";

const isNmuberRegx = /\d/;
const speialCharacterRegx = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>\/?]/;

const Signin = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [passwordValidaty, setPasswordValidaty] = useState({
    minChar: null,
    number: null,
    speialChar: null,
  });
  // const [role, setRole] = useState("");

  const Sgin = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.post(`${BASE_URL}/signup`, {
        email: email,
        password: password,
        userName: userName,
        role: "61b1edd77473faeb6bb570df", // for user
      });
      // if (result.status === 204) {
      //   setMessage(
      //     "this email or username already hava an account! login or change your email.."
      //   );
      // } else if (result.status === 210) {
      //   setMessage("Enter a complix password .");
      // } else {
      //   setMessage(result.data);
      // }
      // if (result.status === 201) {
      //   window.alert("you will receive a confirmation email");
      navigate("/login");
      // }
      console.log(result);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const onChangePassword = (password) => {
    setPassword(password);

    setPasswordValidaty({
      minChar: password.length >= 8 ? true : false,
      number: isNmuberRegx.test(password) ? true : false,
      speialChar: speialCharacterRegx.test(password) ? true : false,
    });
  };

  return (
    <div>
      <Container>
        <div className="container">
          <form>
            <h1>Signup</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />
            {/* <div className="mesage">{message} </div> */}
            <label for="e-mail">
              <b>Enter you e-mail :</b>
            </label>
            <input
              type="text"
              value={email}
              placeholder="Enter you e-mail"
              name="e-mail"
              id="e-mail"
              required
              onChange={(e) => {
                // console.log(e);
                setEmail(e.target.value);
              }}
            />
            <label for="e-mail">
              <b>Enter you User Name :</b>
            </label>
            <input
              type="text"
              value={userName}
              placeholder="Enter you e-mail"
              name="e-mail"
              id="e-mail"
              required
              onChange={(e) => {
                // console.log(e);
                setUserName(e.target.value);
              }}
            />
            <label for="password">
              <b>Enter you password :</b>
            </label>
            <input
              type="password"
              value={password}
              onFocus={() => setPasswordFocused(true)}
              placeholder="Enter password "
              name="password"
              id="password"
              required
              onChange={(e) => {
                // console.log(e.target.value);
                onChangePassword(e.target.value);
              }}
            />
            {passwordFocused && (
              <PasswordStrength validity={passwordValidaty} />
            )}
            <hr />
            <button onClick={Sgin} type="submit" className="registerbtn">
              Signup
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};
export default Signin;
