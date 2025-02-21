import React, { useState } from "react";

const Login = (onLogin) => {
  const [credintial, setCredintial] = useState({ email: "", password: "" });
  const handlechange = (e) => {
    setCredintial({ ...credintial, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    onLogin(credintial);
  };

  return (
    <div>
      <form
        action=""
        onSubmit={submit}
      >
        <input
          type="text"
          value={credintial.email}
          name="email"
          placeholder="email"
          onChange={handlechange}
        />
        <input
          type="text"
          value={credintial.password}
          name="password"
          placeholder="Password"
          onChange={handlechange}
        />
      </form>
      <button type="submit">Login</button>
    </div>
  );
};

export default Login;
