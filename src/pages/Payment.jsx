import { useNavigate } from "react-router-dom";

const Payment = () => {
    const navigate = useNavigate();

    const handleSubmit = () =>{
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSc6pQIcHVEKN40t7ctymaVTkBPSB1-Oy11lb0s_afWXwZxz5g/viewform?usp=sharing", "_blank");
        navigate('/');
    };
  
    return (
      <div className="flex flex-col items-center p-6">
        <img
          src="../src/assets/scanner.png"
          alt="Payment"
          className="w-72 h-auto rounded-lg shadow-lg"
        />
        <button
          onClick={handleSubmit}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Proof
        </button>
      </div>
    );
  };
  
  export default Payment;
  