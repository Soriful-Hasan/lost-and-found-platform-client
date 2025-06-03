import React, { useContext } from "react";
import UserContext from "../provider/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
const SignIn = () => {
  const { signInUser, user } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();
  const goState = location.state?.pathname || "/";

  const handleSignIn = (e) => {
    e.preventDefault();

    //get value from user input
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // user sign in function call
    signInUser(email, password)
      .then((res) => {
        alert("user Login Successfully");
        navigate(goState);
      })
      .catch((error) => console.log("email or password not valid"));
  };

  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignIn} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <Link to={"/signUp"} className="link link-hover">
                  have a account? singIn
                </Link>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                LogIn
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
