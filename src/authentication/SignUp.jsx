import React, { use, useContext } from "react";
import UserContext from "../provider/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";


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
      return Swal.fire({
        title: "Password must have 6 character",
        icon: "error",
        draggable: true,
      });
    }
    if (!password.match(/[A-Z]/g)) {
      return Swal.fire({
        title: "Password must have 1 uppercase case latter",
        icon: "error",
        draggable: true,
      });
    }
    if (!password.match(/[a-z]/g)) {
      return Swal.fire({
        title: "Password must have 1 lowercase  latter",
        icon: "error",
        draggable: true,
      });
    }

    const userData = {
      displayName: name,
      photoURL: photo,
    };

    // user signUp function call
    signUpUser(email, password)
      .then((res) => {
        updateUserProfile(user, userData)
          .then((res) => {})
          .catch((error) => {});
        navigate(goState);
        Swal.fire({
          title: "Sign up successfully",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) =>
        Swal.fire({
          title: "Something was wrong",
          icon: "error",
          draggable: true,
        })
      );
  };

  // google login
  const loginWithGoogle = () => {
    signInWithGoogle()
      .then((res) => {
        Swal.fire({
          title: "Sign up successfully",
          icon: "success",
          draggable: true,
        });
        navigate(goState);
      })
      .catch((error) => {
        Swal.fire({
          title: "Something was wrong",
          icon: "error",
          draggable: true,
        });
      });
  };

  return (
    <div className="hero  ">
      <title>Sign up</title>
      <div className="mb-8  rounded-xl bg-white  shadow-md  md:w-8/12 xl:w-4/12  lg:w-6/12 ">
        <div className="">
          <div className="space-y-2 mt-5 place-items-center text-center">
            <img
              width="80"
              height="100"
              src="/logo.png"
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
                  required
                  type="text"
                  name="name"
                  className="  rounded-xl bg-gray-100 border p-3 border-gray-300 focus:outline-none w-full"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="label text-gray-700 font-semibold ">
                  Image
                </label>
                <input
                  required
                  type="url"
                  name="photo"
                  className="rounded-xl bg-gray-100 border p-3 border-gray-300 focus:outline-none w-full"
                  placeholder="Photo URL"
                />
              </div>
              <div className="space-y-2">
                <label className="label  text-gray-700 font-semibold ">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  className="rounded-xl bg-gray-100 border p-3 border-gray-300 focus:outline-none w-full"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="space-y-2">
                <label className="label text-gray-700 font-semibold ">
                  Password
                </label>
                <input
                  required
                  type="password"
                  name="password"
                  className="rounded-xl border bg-gray-100 p-3 border-gray-300 focus:outline-none w-full"
                  placeholder="•••••••••"
                />
              </div>

              <button
                type="submit"
                className="p-3 font-bold cursor-pointer hover:bg-blue-500  bg-[#443dff] text-white border-none btn-neutral mt-4 rounded-xl"
              >
                Sign up
              </button>

              <div className="divider">OR</div>
            </form>
            <button
              onClick={loginWithGoogle}
              className="cursor-pointer  p-3 flex items-center hover:bg-gray-300 justify-center font-semibold text-sm gap-2 rounded-xl  bg-gray-100 text-black border-[#e5e5e5]"
            >
              <FcGoogle size={20} /> Signup with Google
            </button>
            <div className="flex gap-2 justify-center mt-4 items-center">
              <span className=" text-sm text-gray-600">
                Already have an account?
              </span>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to={"/signIn"}
                className="font-semibold link link-hover"
              >
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
