import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(e) {
    e.preventDefault();
    const response = await fetch(
      process.env.REACT_APP_URL_ADRESS + "/register",
      {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.status === 200) {
      alert("Registration succesful!");
    } else {
      alert("registration failed");
    }
  }

  return (
    <div className="connect-container" onSubmit={register}>
      <form action="">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Register</button>
      </form>
    </div>
  );
}
