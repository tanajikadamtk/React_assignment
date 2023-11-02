import React from "react";
import { useState } from "react";
import logo from "../products/image/logo.png";
import { Link } from "react-router-dom";
import Footer from "../products/Footer";

const formSignin = {
  width: "100%",
  maxWidth: "330px",
  padding: "15px",
  margin: "auto",
};

function Login() {
  const [getDataFromLogin, setGetDataFromLogin] = useState({
    email: "",
    password: "",
  });

  const handler = (event) => {
    const { name, value } = event.target;
    setGetDataFromLogin({ ...getDataFromLogin, [name]: value });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    console.log(getDataFromLogin);
  };

  return (
    <>
      <main style={{ backgroundColor: "whitesmoke", height: "603px" }}>
        <form style={formSignin} onSubmit={formSubmit}>
          <img src={logo} alt="logo" style={{ width: "100%" }} />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="email"
              name="email"
              className="form-control mb-2"
              id="floatingInput"
              placeholder="name@example.com"
              onClick={handler}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              name="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onClick={handler}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <Link to="/products">
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Log in
            </button>
          </Link>
          <p className="mt-5 mb-3 text-muted">&copy; 2021-2022</p>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default Login;
