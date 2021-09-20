import React, { useState } from "react";
import { loginUser } from "../../controllers/login";

const UserLogin = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [status, setStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {};
    data.email = email;
    data.password = password;
    loginUser(data)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setStatus("Login success!");
          document.getElementById("form").reset();
        } else setStatus("Invalid credentials!");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} id="form">
        <input
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button type="submit">Login</button>
        {status ? status : null}
      </form>
    </div>
  );
};

export default UserLogin;
