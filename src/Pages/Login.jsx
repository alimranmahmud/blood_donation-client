import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
  const { handleGoogleSignIn, signInUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log("Login success:", result.user);
        toast.success("Welcome back! You are logged in 🩸");
      })
      .catch((error) => {
        console.error(error.message);
        toast.error("Invalid email or password");
      });
  };

  const handleGoogle = () => {
    handleGoogleSignIn()
      .then((result) => {
        console.log("Google login success:", result.user);
        toast.success("Google login successful 🩸");
      })
      .catch((error) => {
        console.error(error.message);
        toast.error("Google login failed. Try again!");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome Back 🩸
          </h1>
          <p className="text-gray-500 mt-2">
            Login to continue saving lives
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute top-4 left-4 text-gray-400" />
            <input
              name="email"
              type="email"
              placeholder="Email address"
              className="w-full pl-12 p-3 rounded-xl border focus:ring-2 focus:ring-red-500 outline-none"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute top-4 left-4 text-gray-400" />
            <input
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              className="w-full pl-12 p-3 rounded-xl border focus:ring-2 focus:ring-red-500 outline-none"
              required
            />
          </div>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition"
          >
            Login
          </motion.button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="px-3 text-sm text-gray-500">OR</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        {/* Google Login */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGoogle}
          type="button"
          className="w-full flex items-center justify-center gap-3 border py-3 rounded-xl font-medium hover:bg-gray-50 transition"
        >
          <FaGoogle className="text-red-600" />
          Continue with Google
        </motion.button>

        {/* Register */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-red-600 font-semibold hover:underline"
          >
            Register as Donor
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
