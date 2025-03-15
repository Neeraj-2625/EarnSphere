import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({use,setUse}) => {
  const [user, setUser] = useState({ userName: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(user);
  };

  const onLogin = async (user) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_END_POINT}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || "Invalid email or password.");
      }
  
      alert("Login successful!");
      // You can store user data in localStorage or state for session management
      localStorage.setItem("user", JSON.stringify(data.user));
      setUse(user);
      navigate('/');
    } catch (error) {
      console.error("Login Error:", error);
      alert(error.message || "Something went wrong. Please try again.");
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F4CCE9 ]">
      <form className="bg-[#56021F] text-[#F4CCE9] p-6 rounded-2xl shadow-md w-80" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input
          type="text"
          name="userName"
          placeholder="User Name"
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
