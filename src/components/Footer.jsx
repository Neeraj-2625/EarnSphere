import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className="w-full bg-gray-800 text-white text-center p-4 mb-4">
        <div className="container mx-auto">
          <p>© 2025 EarnSphere. All Rights Reserved.</p>
          <p>
            <Link to="/contact" className="text-white">
              Contact Us
            </Link>
           </p>
           <p>
            <Link to="/about" className="text-white">
              About Us
            </Link>
            </p> 
        </div>
      </footer>
    );
  };
  
  export default Footer;
  