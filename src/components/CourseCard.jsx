import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
    const navigate = useNavigate();
    return (
      <div className="border rounded-2xl border-[#D17D98] p-4 shadow-emerald-100 transition-shadow duration-300 bg-[#7D1C4A]">
        <h3 className="text-xl text-center text-[#F4CCE9] font-bold font-serif md-2">{course.title}</h3>
        <div className="w-40 h-40 mx-auto border border-[#56021F] rounded-2xl overflow-hidden">
          <img
            src={`../src/images/${course.img}`}
            alt={`${course.title}`}
            className="w-full h-full object-fit"
          />
        </div>
        <div className="flex gap-x-2">
        <p className="mt-2 text-[#F4CCE9] font-bold font-serif">{course.number}</p>
        <p className="mt-2 text-[#F4CCE9] font-bold font-serif">{course.time}</p>
        </div>
        <p className="mt-2 text-[#F4CCE9] font-bold font-serif">{course.price}</p>
        <button className="mt-4 bg-[#F4CCE9] text-[#56021F] font-bold font-serif cursor-pointer px-4 py-2 rounded"
          onClick={()=>navigate("/payment")}
        >
          Enroll Now
        </button>
      </div>
    );
  };
  
  export default CourseCard;
  