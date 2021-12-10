import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import axios from "axios";
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
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [passwordValidaty, setPasswordValidaty] = useState({
    minChar: null,
    number: null,
    speialChar: null,
  });
  const [role, setRole] = useState("");

  // const state = useSelector((state) => {
  //   console.log(state);
  //   return {
  //     users: state.users,
  //     TodosFun: state.TodosFun,
  //   };
  // });

  const Sgin = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.post(`${BASE_URL}/signup`, {
        email: email,
        password: password,
        userName: userName,
        role: "61af656c1d6e66117cb9b904",
      });
      console.log(result);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
 
  const onChangePassword = password => {
    setPassword(password);

    setPasswordValidaty({
      minChar: password.length >=8 ? true : false,
      number: isNmuberRegx.test(password) ? true : false, 
      speialChar: speialCharacterRegx.test(password) ? true : false
    });
  };


  return (
    <div>
      <form>
        <h1>Signup</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />
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
        <div>
          <p>Please select your Role:</p>{" "}
          <input
            type="radio"
            id="Admin"
            name="role"
            value="61af656c1d6e66117cb9b904"
            onChange={(e) => {
              e.preventDefault();
              setRole("61af656c1d6e66117cb9b904");
            }}
          />
          <label for="Admin">Admin</label>{" "}
          <input
            type="radio"
            id="user"
            name="role"
            value="61af65831d6e66117cb9b906"
            onChange={(e) => {
              e.preventDefault();
              setRole("61af65831d6e66117cb9b906");
            }}
          />
          <label for="user">User</label>
        </div>
        <hr />
        <button onClick={Sgin} type="submit" className="registerbtn">
          Signup
        </button>
      </form>
    </div>
  );
};
export default Signin;
