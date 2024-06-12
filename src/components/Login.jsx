import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { account } from "../config/appwrite";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true
    try {
      await account.createEmailPasswordSession(email, password);
      navigate("/profile"); // Redirect to dashboard or desired page after login
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
    setIsLoading(false); // Reset loading state after login attempt
  };

  return (
    <>
      <div className="fixed w-full z-10 text-white">
        <div className="flex flex-row justify-between p-3 md:px-32 px-5 bg-backgroundColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className="flex flex-row items-center cursor-pointer">
            <Link to={"/"}>
              <h1 className="text-2xl font-semibold">DiabetesCare.</h1>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center h-screen bg-slate-300">
        <div className="w-96 p-6 rounded-md shadow-lg bg-white mt-6">
          <h1 className="text-center font-semibold text-slate-500 text-2xl mb-2">
            Login
          </h1>

          {error && (
            <div className="bg-red-100 text-red-700 p-2 rounded-md mb-2">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mt-2">
              <input
                type="email"
                required
                className="mb-3 border focus:outline-none focus:ring-1 focus:border-gray-600 px-2 py-1 text-base w-full rounded-md"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                type="password"
                required
                className="mb-3 border focus:outline-none focus:ring-1 focus:border-gray-600 px-2 py-1 text-base w-full rounded-md"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center mt-3">
              <div>
                <input type="checkbox" name="remember-me" id="rememberme" />
                <label className="text-sm ms-2">Remember me</label>
              </div>
              <div>
                <Link
                  to={"/resetpassword"}
                  className="font-semibold text-sm text-indigo-800"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            <div className="mt-4">
              <button
                className="border-2 bg-backgroundColor text-white rounded-md w-full py-1"
                type="submit"
                disabled={isLoading} // Disable button while loading
              >
                {isLoading ? (
                  <span className="flex justify-center items-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.003 8.003 0 014.012 4.61L6.406 6.88A5.965 5.965 0 004 12h2v5.291zM16.594 6.88l2.394-2.27A8.003 8.003 0 0120 12h-2a5.965 5.965 0 00-2.406-4.12zM12 20c3.973 0 7.224-3.014 7.938-6.88h-2C17.324 15.131 15.21 18 12 18v2zm0-16C8.79 4 6.676 6.869 6.06 10.12H4C4.716 5.373 8.027 2 12 2v2z"
                      ></path>
                    </svg>
                    Logging In...
                  </span>
                ) : (
                  <span>Log In</span>
                )}
              </button>
            </div>
            <div className="flex justify-between items-center mt-3">
              <p className="text-sm">Don't have an account?</p>
              <div>
                <Link
                  to={"/register"}
                  className="font-semibold text-sm text-indigo-800"
                >
                  Register
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
