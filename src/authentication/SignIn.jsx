import React, { useContext } from "react";
import UserContext from "../provider/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
const SignIn = () => {
  const { signInUser, user, setUser, signInWithGoogle } =
    useContext(UserContext);
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
        Swal.fire({
          title: "Sign in successfully",
          icon: "success",
          draggable: true,
        });
        navigate(goState);
      })
      .catch((error) =>
        Swal.fire({
          title: "Email or password not valid",
          icon: "error",
          draggable: true,
        })
      );
  };

  const loginWithGoogle = () => {
    signInWithGoogle()
      .then((res) => {
        Swal.fire({
          title: "Sign in successfully",
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
    <div className="flex justify-center  items-center m-4">
      <title>Sign in</title>
      <div className="p-8 rounded-xl shadow-md  md:w-8/12 xl:w-4/12  lg:w-6/12  bg-white w-full  mx-auto justify-center">
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
                required
                type="email"
                name="email"
                className="rounded-xl bg-gray-100 border p-3 border-gray-300 focus:outline-none w-full"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="space-y-2 ">
              <label className="label text-gray-700 font-semibold ">
                Your Password
              </label>
              <input
                required
                type="password"
                name="password"
                className="rounded-xl bg-gray-100 border p-3 border-gray-300 focus:outline-none w-full"
                placeholder="•••••••••"
              />
            </div>

            <button
              type="submit"
              className="p-3 hover:bg-blue-500 font-bold cursor-pointer  bg-[#443dff] text-white border-none btn-neutral mt-4 rounded-x rounded-xl"
            >
              Sign in
            </button>
          </form>
          <div className="divider">OR</div>
          <button
            onClick={loginWithGoogle}
            className="p-3 cursor-pointer hover:bg-gray-300 flex items-center justify-center font-semibold text-sm gap-2 rounded-xl  bg-gray-100 text-black border-[#e5e5e5]"
          >
            <FcGoogle size={20} /> Signin with Google
          </button>
        </div>
        <div className="justify-center gap-2 flex items-center">
          <p className="text-sm text-gray-700">have a account?</p>
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to={"/signUp"}
            className="link font-semibold link-hover"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
