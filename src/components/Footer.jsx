import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className="w-full bg-[#56021F] text-[#F4CCE9] font-bold font-serif text-center p-4 mb-4">
        <div className="container mx-auto">
          <p>© 2025 EarnSphere. All Rights Reserved.</p>
          <p>
            <Link to="/" className="">
              Contact Us
            </Link>
           </p>
           <p>
            <Link to="/" className="">
              About Us
            </Link>
            </p> 
        </div>
      </footer>
    );
  };
  
  export default Footer;
  