import React, { useState } from "react";
import { registerUser } from "../../controllers/register";

const UserRegister = () => {
  const [firstName, setFirstName] = useState(null);
  const [middleName, setMiddleName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [location, setLocation] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {};
    data.first_name = firstName;
    if (middleName) data.middle_name = middleName;
    data.last_name = lastName;
    data.email = email;
    data.password = password;
    data.city = location;
    registerUser(data)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="first name"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="middle name"
          onChange={(event) => {
            setMiddleName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="last name"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
        <input
          type="email"
          placeholder="email name"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="location"
          onChange={(event) => {
            setLocation(event.target.value);
          }}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UserRegister;
