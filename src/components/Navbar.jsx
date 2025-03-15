import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({user,setUser}) => {
  const [isOpen, setIsOpen] = useState(false);
  

  const handleLogout = () => {
    setIsOpen(false);
    localStorage.removeItem("user");  
    setUser(null); 
  };
  
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user"))); 
  }, []);

  return (
    <>
      <nav className="bg-[#56021F] p-4 fixed w-full z-50 top-0 left-0">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#F4CCE9]">EarnSphere</h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#F4CCE9] focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 font-bold font-serif">
            <li><Link to="/" className="text-[#F4CCE9] hover:text-gray-300">Home</Link></li>
            <li><Link to="/courses" className="text-[#F4CCE9] hover:text-gray-300">Courses</Link></li>
            <li><Link to="/blog" className="text-[#F4CCE9] hover:text-gray-300">Blog</Link></li>
            {user ? (
              <>
                <li><Link to="/profile" className="text-[#F4CCE9] hover:text-gray-300">Profile</Link></li>
                <li><Link to="/login" className="text-[#F4CCE9] hover:text-gray-300" onClick={handleLogout}>Logout</Link></li>
              </>
            ) : (
              <li><Link to="/login" className="text-[#F4CCE9] hover:text-gray-300">Login</Link></li>
            )}
          </ul>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#56021F] font-bold font-serif py-2">
            <ul className="space-y-2 text-center">
              <li><Link to="/" className="block py-2 text-[#F4CCE9] hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link to="/courses" className="block py-2 text-[#F4CCE9] hover:text-gray-300" onClick={() => setIsOpen(false)}>Courses</Link></li>
              <li><Link to="/blog" className="block py-2 text-[#F4CCE9] hover:text-gray-300" onClick={() => setIsOpen(false)}>Blog</Link></li>
              {user ? (
                <>
                  <li><Link to="/profile" className="block py-2 text-[#F4CCE9] hover:text-gray-300" onClick={() => setIsOpen(false)}>Profile</Link></li>
                  <li><Link to="/login" className="block py-2 text-[#F4CCE9] hover:text-gray-300" onClick={handleLogout}>Logout</Link></li>
                </>
              ) : (
                <li><Link to="/login" className="block py-2 text-[#F4CCE9] hover:text-gray-300" onClick={() => setIsOpen(false)}>Login</Link></li>
              )}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
