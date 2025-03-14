import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
    <div className="text-center p-10 pt-24 font-serif"> {/* Added pt-24 to prevent overlap with fixed navbar */}
      {/* Hero Section */}
      <h2 className="text-3xl font-bold text-[#56021F]">
        WelCome to <span className="text-[#7D1C4A]">EarnSphere</span>
      </h2>
      <p className="mt-2 text-lg text-[#7D1C4A]">
        India's Best E-Learning Platform
      </p>
      <Link
        to="/register"
        className="mt-4 inline-block bg-[#56021F] text-[#F4CCE9] px-6 py-3 rounded-lg font-semibold"
      >
        Register→
      </Link>

      {/* Profile Image Section */}
      <div className="mt-6">
        <div className="w-40 h-40 mx-auto border-4 border-[#56021F] rounded-full overflow-hidden">
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="mt-8 space-y-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-[#D17D98] shadow-lg rounded-lg p-4 flex items-center ">
          <div className="bg-[#7D1C4A] text-[#F4CCE9] p-3 rounded-lg">
            <i className="fas fa-users text-xl"></i>
          </div>
          <div className="ml-4 text-left">
            <p className="text-2xl font-bold text-[#56021F]">20+</p>
            <p className="text-gray-700">Trainers</p>
          </div>
        </div>

        <div className="bg-[#D17D98] shadow-lg rounded-lg p-4 flex items-center">
          <div className="bg-[#7D1C4A] text-[#F4CCE9] p-3 rounded-lg">
            <i className="fas fa-user-graduate text-xl"></i>
          </div>
          <div className="ml-4 text-left">
            <p className="text-2xl font-bold text-[#56021F]">20K+</p>
            <p className="text-gray-700">Students Enrolled</p>
          </div>
        </div>

        <div className="bg-[#D17D98] shadow-lg rounded-lg p-4 flex items-center">
          <div className="bg-[#7D1C4A] text-[#F4CCE9] p-3 rounded-lg">
            <i className="fas fa-chalkboard-teacher text-xl"></i>
          </div>
          <div className="ml-4 text-left">
            <p className="text-2xl font-bold text-[#56021F]">150+</p>
            <p className="text-gray-700">Live Trainings</p>
          </div>
        </div>

        <div className="bg-[#D17D98] shadow-lg rounded-lg p-4 flex items-center">
          <div className="bg-[#7D1C4A] text-[#F4CCE9] p-3 rounded-lg">
            <i className="fas fa-wallet text-xl"></i>
          </div>
          <div className="ml-4 text-left">
            <p className="text-2xl font-bold text-[#56021F]">2 Lakh+</p>
            <p className="text-gray-700">Community Earnings</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
