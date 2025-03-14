import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid"; // Import eye icons

const Register = ({ onRegister }) => {
    const [user, setUser] = useState({
      name: "",
      phone: "",
      email: "",
      password: "",
      course: "premium", // Default course selection
    });
    const [showPassword, setShowPassword] = useState(false);
  
    const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(user);
      onRegister(user);
    };
  
    return (
      <div className="flex justify-center font-bold font-serif items-center min-h-screen bg-[#F4CCE9]">
        <form
          className="bg-[#56021F] text-[#F4CCE9] p-6 rounded-2xl shadow-md w-96"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
  
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-3 mb-2 border rounded-2xl"
            onChange={handleChange}
            required
          />
  
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full p-3 mb-2 border rounded-2xl"
            onChange={handleChange}
            required
          />
  
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 mb-2 border rounded-2xl"
            onChange={handleChange}
            required
          />
  
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full p-3 mb-2 border rounded-2xl pr-10"
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOffIcon className="h-5 w-5 text-gray-400" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
  
          {/* Course Selection */}
          <h3 className="text-lg font-semibold mb-2">Select a Course:</h3>
          <div className="mb-4 space-y-2">
            {[
              { name: "Starter", price: "RS. 150" },
              { name: "Basic", price: "RS. 299" },
              { name: "Standard", price: "RS. 599" },
              { name: "Diamond", price: "RS. 1199" },
              { name: "Platinum", price: "RS. 2299" },
              { name: "Premium", price: "RS. 3999" },
            ].map((course) => (
              <label key={course.name} className="flex font-bold font-serif items-center">
                <input
                  type="radio"
                  name="course"
                  value={course.name.toLowerCase()}
                  checked={user.course === course.name.toLowerCase()}
                  onChange={handleChange}
                  className="mr-2"
                />
                {course.name} - <span className="ml-2 font-semibold">{course.price}</span>
              </label>
            ))}
          </div>
  
          <button className="bg-[#F4CCE9] text-[#56021F] w-full p-2 rounded-2xl hover:bg-[#D17D98]">
            Register
          </button>
        </form>
      </div>
    );
  };
  
  export default Register;