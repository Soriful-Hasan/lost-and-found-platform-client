import React, { use, useContext } from "react";
import UserContext from "../provider/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";

const SignUp = () => {
  const { signUpUser, updateUserProfile, user } = useContext(UserContext);
  
  // redirect user when user access private route
  const location = useLocation();
  const navigate = useNavigate();
  const goState = location.state?.pathname || "/";


  const handleSignUp = (e) => {
    e.preventDefault();
    //get value from user input
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;

    // password validation
    if (password.length < 6) {
      return console.log("password must have 6 character");
    }
    if (!password.match(/[A-Z]/g)) {
      return console.log("password must have 1 lower case latter");
    }
    if (!password.match(/[a-z]/g)) {
      return console.log("password must have 1 up er case latter");
    }


    const userData = {
      displayName: name,
      photoURL: photo,
    };

  // user signUp function call
    signUpUser(email, password)
      .then((res) => {
        updateUserProfile(user, userData)
          .then((res) => console.log("user profile updated", res))
          .catch((error) => console.log(error));
        navigate(goState);
        alert("user signUp Successfully");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignUp} className="fieldset">
              <label className="label">Full Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Full Name"
              />
              <label className="label">Photo URL</label>
              <input
                type="url"
                name="photo"
                className="input"
                placeholder="Photo URL"
              />
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
                <Link to={"/signIn"} className="link link-hover">
                  have a account? singIn
                </Link>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                SignUp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
