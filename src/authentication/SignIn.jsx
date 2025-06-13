import React, { useContext } from "react";
import UserContext from "../provider/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
const SignIn = () => {
  const { signInUser, user, signInWithGoogle } = useContext(UserContext);
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

  const loginWithGoogle = () => {
    signInWithGoogle()
      .then((res) => {
        console.log("Google Login SuccessFully");
        navigate(goState);
      })
      .catch((error) => {
        console.log("something was wrong");
      });
  };

  return (
    <div className="flex justify-center items-center  min-h-screen">
      <div className="p-8 shadow-md md:w-8/12 xl:w-4/12 bg-[#EEEEF2]  lg:w-6/12 mx-auto justify-center">
        <div className="text-center p-4 space-y-4">
          <h1 className="text-2xl font-bold">Login your account</h1>
          <div className="border-b border-gray-300"></div>
        </div>
        <div className="card-body ">
          <form onSubmit={handleSignIn} className="fieldset space-y-4">
            <div className="space-y-2">
              <label className="label text-gray-700 font-semibold ">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                className="rounded-xl bg-white border p-3 border-gray-300 focus:outline-none w-full"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="space-y-2 ">
              <label className="label text-gray-700 font-semibold ">
                Your Password
              </label>
              <input
                type="password"
                name="password"
                className="rounded-xl bg-white border p-3 border-gray-300 focus:outline-none w-full"
                placeholder="* * * * * * * * * "
              />
            </div>

            <button
              type="submit"
              className="p-3 font-bold cursor-pointer  bg-[#443dff] text-white border-none btn-neutral mt-4 rounded-x rounded-xl"
            >
              LogIn
            </button>
          </form>
          <div className="divider">OR</div>
          <button
            onClick={loginWithGoogle}
            className="p-3 cursor-pointer flex items-center justify-center font-semibold text-sm gap-2 rounded-xl  bg-white text-black border-[#e5e5e5]"
          >
            <FcGoogle size={20} /> Signup with Google
          </button>
        </div>
        <div className="justify-center gap-2 flex items-center">
          <p className="text-sm text-gray-700">have a account?</p>
          <Link to={"/signUp"} className="link font-semibold link-hover">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
