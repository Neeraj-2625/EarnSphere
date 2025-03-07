import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
    const navigate = useNavigate();
    return (
      <div className="border p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl font-bold">{course.title}</h3>
        <p className="mt-2">{course.description}</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
          onClick={()=>navigate("/payment")}
        >
          Enroll Now
        </button>
      </div>
    );
  };
  
  export default CourseCard;
  