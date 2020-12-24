import { useState } from "react";
import { auth } from "../../config/firebase";
import "../../styles/login.css";

function Login() {
  const [email, setEmail] = useState("test@test.test");
  const [password, setPassword] = useState("test@test.test");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((err) => alert(err.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__singin__button"
            onClick={signIn}
            type="submit"
          >
            Sign In
          </button>
        </form>

        <button className="login__createAccount__button" onClick={register}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Login;
