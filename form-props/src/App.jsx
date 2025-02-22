import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [userData, setUserData] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleRegister = () => {
    setUserData(user);
    alert(`Registration successfully, Welcome ${user.name}`);
  };

  const handleLogin = (credential) => {
    if (
      userData &&
      userData.email === credential.email &&
      userData.password === credential.password
    ) {
      setLoggedInUser(userData);
      alert(`Welcome,${userData.name} !`);
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      <Login onLogin={handleLogin} />
      <Register onRegister={handleRegister} />

      {loggedInUser && (
        <div>
          <h3>Welcome,{loggedInUser.name} !</h3>
          <p>Your Successfully Logged In</p>
        </div>
      )}
    </>
  );
}

export default App;
