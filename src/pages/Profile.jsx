import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [data, setData] = useState([]);
  const [today, setToday] = useState(0);
  const [sevenDays, setSevenDays] = useState(0);
  const [thirtyDays, setThirtyDays] = useState(0);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return; // Stop execution if no user
    }

    const fetchUsers = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_END_POINT}/users/${user.userName}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) throw new Error("Failed to fetch user data");

        const data = await response.json();
        setData(data); // ✅ Update state with fetched data
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    if (data.length === 0) return; // ✅ Prevent running when data is empty

    let todaySum = 0,
      sevenDaysSum = 0,
      thirtyDaysSum = 0,
      totalSum = 0;

    data.forEach((user) => {
      const value = Math.floor((Date.now() - new Date(user.date)) / (1000 * 60 * 60 * 24));

      if (value <= 0) {
        todaySum += 23;
        sevenDaysSum += 23;
        thirtyDaysSum += 23;
      } else if (value <= 7) {
        sevenDaysSum += 23;
        thirtyDaysSum += 23;
      } else if (value <= 30) {
        thirtyDaysSum += 23;
      }

      totalSum += 23;
    });

    setToday(todaySum);
    setSevenDays(sevenDaysSum);
    setThirtyDays(thirtyDaysSum);
    setTotal(totalSum);
  }, [data]); // ✅ Runs only when `data` updates

  return (
    <div className="flex justify-center font-bold items-center min-h-screen bg-[#F4CCE9]">
      <div className="bg-[#56021F] text-[#F4CCE9] p-6 rounded-2xl shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Profile</h2>

        <p className="text-lg font-bold">{user?.userName || "Guest"}</p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Earnings</h3>
          <div className="space-y-2">
            <p className="bg-[#F4CCE9] text-[#56021F] p-3 rounded-2xl">Today: RS. {today}</p>
            <p className="bg-[#F4CCE9] text-[#56021F] p-3 rounded-2xl">7 Days: RS. {sevenDays}</p>
            <p className="bg-[#F4CCE9] text-[#56021F] p-3 rounded-2xl">30 Days: RS. {thirtyDays}</p>
            <p className="bg-[#F4CCE9] text-[#56021F] p-3 rounded-2xl">Total: RS. {total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
