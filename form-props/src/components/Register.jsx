import React, { useState } from "react";

const Register = (onRegister) => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [registeredUser, setRegisteredUser] = useState("null");

  const handlechange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDafault();
    onRegister.user;
    setRegisteredUser.user;
    setUser({ name: "", email: "", password: "" });
  };

  return (
    <div>
      <form
        action=""
        onSubmit={submit}
      >
        <input
          type="text"
          value={user.name}
          name="name"
          placeholder="Name"
          onChange={handlechange}
        />
        <input
          type="text"
          value={user.email}
          name="email"
          placeholder="Email"
          onChange={handlechange}
        />
        <input
          type="text"
          value={user.password}
          name="password"
          placeholder="Password"
          onChange={handlechange}
        />

        <button type="submit">Register</button>
      </form>

      {registeredUser && (
        <div>
          <p>Name : {registeredUser.name}</p>
          <p>Email : {registeredUser.Email}</p>
        </div>
      )}
    </div>
  );
};

export default Register;
