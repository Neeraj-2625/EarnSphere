import { useState } from "react";

const Login = ({ onLogin }) => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(user); // Send login data to backend
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F4CCE9 ]">
      <form className="bg-[#56021F] text-[#F4CCE9] p-6 rounded-2xl shadow-md w-80" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 mb-2 border  rounded-2xl"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 mb-2 border rounded-2xl"
          onChange={handleChange}
        />
        <button className="bg-[#F4CCE9] text-[#56021F] w-full p-2 rounded-2xl hover:bg-[#D17D98]">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
