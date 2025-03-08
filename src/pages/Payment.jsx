import { useNavigate } from "react-router-dom";

const Payment = () => {
    const navigate = useNavigate();

    const handleSubmit = () =>{
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSfF1PuG-YDe9tmu2BVIHRKhTZ-izG1dHBI-WOaJGyVSNVOzmA/viewform?usp=sharing", "_blank");
        navigate('/');
    };
  
    return (
      <div className="flex flex-col items-center p-6">
        <img
          src="../src/images/scanner.jpg"
          alt="Payment"
          className="w-72 h-auto rounded-lg shadow-lg"
        />
        <button
          onClick={handleSubmit}
          className="mt-4 bg-[#7D1C4A] text-[#F4CCE9] font-bold font-serif px-4 py-2 rounded hover:bg-[#56021F] transition"
        >
          Submit Proof
        </button>
      </div>
    );
  };
  
  export default Payment;
  