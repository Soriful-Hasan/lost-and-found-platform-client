import React, { useContext, useState } from "react";
import UserContext from "../provider/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";
import Swal from "sweetalert2";
const SignIn = () => {
  const { signInUser, user, setUser, isLoading, signInWithGoogle } =
    useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();
  const goState = location.state?.pathname || "/";
  const [showPassword, setShowPassword] = useState(false);
  const GoogleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
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
        {/* Header Section */}
        <div className="text-center">
          <div
            className="mx-auto h-16 w-16 rounded-full flex items-center justify-center mb-6"
            style={{ backgroundColor: "#443dff" }}
          >
            <Lock className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back
          </h2>
          <p className="text-gray-600">Sign in to your account to continue</p>
        </div>
        <div className="card-body ">
          <form onSubmit={handleSignIn} className="fieldset space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200"
                  style={{ "--tw-ring-color": "#443dff" }}
                  placeholder="example@gmail.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200"
                  style={{ "--tw-ring-color": "#443dff" }}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                  )}
                </button>
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              style={{
                backgroundColor: "#443dff",
                "--tw-ring-color": "#443dff",
              }}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                  Signing in...
                </div>
              ) : (
                <div className="flex items-center">
                  Sign in
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              )}
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 font-medium">
                  OR
                </span>
              </div>
            </div>

            {/* Google Sign In */}
            <button
              type="button"
              onClick={loginWithGoogle}
              className="w-full flex justify-center items-center py-3 px-4 border border-gray-300 rounded-xl bg-white text-gray-700 font-semibold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-md"
            >
              <GoogleIcon />
              <span className="ml-3">Continue with Google</span>
            </button>
          </form>
        </div>
        {/* Sign Up Link */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a
              href="/signUp"
              className="font-semibold hover:underline transition-colors"
              style={{ color: "#443dff" }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Sign up here
            </a>
          </p>
        </div>
        
      </div>
      
    </div>
  );
};

export default SignIn;
