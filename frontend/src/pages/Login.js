import React, { useState } from "react";
import { login } from "../apis/login";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { setLogin, setUserRole } from '../slices/employeeSlice'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate();


  const handleLogin = async () => {



    const reqData = {
      email,
      password,
    };

    const res = await login(reqData);

    if (!res.isUser) {
      setMessage("invalid credentials");
    }

    if (res.isUser) {
      dispatch(setLogin());
      dispatch(setUserRole(res.role))
    }



    if (res.isUser === true) {
      res.role === 2 ? navigate("/admin", { state: { role: 2 } }) : navigate("/employees", { state: { role: 1 } })
    };
  };

  return (
    <>
      <div>
        <div>
          <h4>{message}</h4>
        </div>
        <div>
          <label>email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>passsword</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>login</button>
      </div>
    </>
  );
};

export default Login;
