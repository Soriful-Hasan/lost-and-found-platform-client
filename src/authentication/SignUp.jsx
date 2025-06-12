import React, { use, useContext } from "react";
import UserContext from "../provider/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const { signUpUser, updateUserProfile, user, signInWithGoogle } =
    useContext(UserContext);

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

  // google login
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
    <div className="hero">
      <div className="  rounded-xl bg-[#F6F6F6]   shadow-md  md:w-8/12 xl:w-4/12  lg:w-6/12 ">
        <div className="">
          <div className="space-y-2 place-items-center text-center">
            <img
              width="100"
              height="100"
              src="https://img.icons8.com/stickers/100/smartthings-find.png"
              alt="smartthings-find"
            />
            <h1 className="font-bold text-xl">Join us today</h1>
            <p className="text-sm text-gray-600 m-4">
              Sign up today and unlock a world of possiblilities. <br />
              Your adventure beings here
            </p>
          </div>
          <div className="card-body">
            <form onSubmit={handleSignUp} className="fieldset">
              <div className="space-y-2">
                <label className="label text-gray-700 font-semibold ">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="  rounded-xl bg-white border p-3 border-gray-300 focus:outline-none w-full"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="label text-gray-700 font-semibold ">
                  Image
                </label>
                <input
                  type="url"
                  name="photo"
                  className="rounded-xl bg-white border p-3 border-gray-300 focus:outline-none w-full"
                  placeholder="Photo URL"
                />
              </div>
              <div className="space-y-2">
                <label className="label  text-gray-700 font-semibold ">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="rounded-xl bg-white border p-3 border-gray-300 focus:outline-none w-full"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="space-y-2">
                <label className="label text-gray-700 font-semibold ">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="rounded-xl border bg-white p-3 border-gray-300 focus:outline-none w-full"
                  placeholder="**********"
                />
              </div>

              <button
                type="submit"
                className="p-3 font-bold cursor-pointer  bg-blue-400 text-white border-none btn-neutral mt-4 rounded-xl"
              >
                Sign up
              </button>
              <div className="divider">OR</div>
            </form>
            <button
              onClick={loginWithGoogle}
              className="cursor-pointer p-3 flex items-center justify-center font-semibold text-sm gap-2 rounded-xl  bg-white text-black border-[#e5e5e5]"
            >
              <FcGoogle size={20} /> Signup with Google
            </button>
            <div className="flex gap-2 justify-center mt-4 items-center">
              <span className=" text-sm text-gray-600">
                Already have an account?
              </span>
              <Link to={"/signIn"} className="font-semibold link link-hover">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
