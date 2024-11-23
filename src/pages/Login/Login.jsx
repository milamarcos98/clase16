import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import Cookies from "js-cookie"
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState("");

  const {user, setUser, auth} = useContext(AuthContext)

  const handleLogin = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/users/login', userData, {
      headers: {'token': auth}
    })
    .then((res) => {
      console.log(res);
      setUser({
        name: res.data.usuario.name,
        id: res.data.usuario._id,
        username: res.data.usuario.username
    })
      Cookies.set("jwToken", res.data.jwToken, {expires: 3})
      navigate("/")
    })
    .catch((error) => {
      console.log(error)
      setError(error.response.data.message)
    })
  }

  return (
    <div>
      <h1>Login</h1>
      <p>Hola {user.name}!</p>
      <form>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={userData.password}
            onChange={(e) => setUserData({...userData, password: e.target.value})}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={userData.email}
            onChange={(e) => setUserData({...userData, email: e.target.value})}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
        {
            error && <p>{error}</p>
        }
      </form>
    </div>
  );
};

export { Login };
