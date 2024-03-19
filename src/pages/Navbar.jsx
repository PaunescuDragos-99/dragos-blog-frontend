import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Navbar() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [username, setUsername] = useState("");
  useEffect(() => {
    fetch("http://localhost:8080/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo.username);
        setUsername(userInfo.username);
      });
    });
  }, []);

  useEffect(() => {
    if (userInfo !== null) {
      setUsername(userInfo?.username);
    }
  }, [userInfo]);

  function logout() {
  fetch(process.env.REACT_APP_URL_ADRESS + "/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
    setUsername(null);
  }

  return (
    <div className="navbar-container">
      <header className="header-nav">
        <div className="left-btn">
          <Link to={"/"}>Home</Link>
        </div>
        {username && (
          <div className="right-btn">
            <Link to="/create">Create new post</Link>
            <a onClick={logout}>Logout ({username})</a>
          </div>
        )}
        {!username && (
          <div className="right-btn">
            <Link to={"/login"}>Login</Link>
            <Link to={"/register"}>Register</Link>
          </div>
        )}
      </header>
    </div>
  );
}
