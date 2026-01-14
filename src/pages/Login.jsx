// src/components/LoginForm.jsx
import React, { useState } from "react";

const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
   const [loading, setLoading] = useState(false);

   const handleSubmit = (e) => {
      e.preventDefault();
      setError("");

      if (!email || !password) {
         setError("Please fill in all fields.");
         return;
      }

      setLoading(true);
      // Simulate login API call
      setTimeout(() => {
         setLoading(false);
         if (email === "test@example.com" && password === "123456") {
            alert("Login successful! 🎉");
         } else {
            setError("Invalid email or password.");
         }
      }, 1500);
   };

   return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-500 via-pink-500 to-red-400 p-6">
         <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md animate-fade-in">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
               Welcome Back
            </h2>
            <p className="text-center text-gray-500 mb-6">
               Login to your account to continue
            </p>

            {error && (
               <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm">
                  {error}
               </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
               {/* Email */}
               <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                     type="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder="you@example.com"
                     className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                  />
               </div>

               {/* Password */}
               <div>
                  <label className="block text-gray-700 mb-2">Password</label>
                  <input
                     type="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     placeholder="********"
                     className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                  />
               </div>

               {/* Forgot Password */}
               <div className="text-right">
                  <a
                     href="#"
                     className="text-sm text-purple-600 hover:underline"
                  >
                     Forgot Password?
                  </a>
               </div>

               {/* Submit */}
               <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold shadow hover:bg-purple-700 transition flex justify-center items-center space-x-2"
               >
                  {loading && (
                     <svg
                        className="animate-spin h-5 w-5 text-white"
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
                           d="M4 12a8 8 0 018-8v8z"
                        ></path>
                     </svg>
                  )}
                  <span>{loading ? "Logging in..." : "Login"}</span>
               </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
               <hr className="flex-1 border-gray-300" />
               <span className="mx-4 text-gray-500">or</span>
               <hr className="flex-1 border-gray-300" />
            </div>

            {/* Social login buttons */}
            <div className="flex gap-4">
               <button className="flex-1 py-2 px-4 border rounded-xl hover:bg-gray-100 transition flex items-center justify-center space-x-2">
                  <img
                     src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/google.svg"
                     alt="Google"
                     className="h-5 w-5"
                  />
                  <span>Google</span>
               </button>
               <button className="flex-1 py-2 px-4 border rounded-xl hover:bg-gray-100 transition flex items-center justify-center space-x-2">
                  <img
                     src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
                     alt="GitHub"
                     className="h-5 w-5"
                  />
                  <span>GitHub</span>
               </button>
            </div>
         </div>
      </div>
   );
};

export default Login;
