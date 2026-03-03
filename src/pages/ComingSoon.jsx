import { useNavigate } from "react-router-dom";

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0F0F0F] text-black dark:text-white flex flex-col items-center justify-center">
      <div className="text-6xl mb-4">🚧</div>
      <h1 className="text-3xl font-bold mb-2">Coming Soon</h1>
      <p className="text-gray-400 mb-6">This page is under construction.</p>
      <button
        onClick={() => navigate("/dashboard")}
        className="bg-[#0CC8A8] text-white px-6 py-2 rounded-lg text-sm">
        Back to Dashboard
      </button>
    </div>
  );
};

export default ComingSoon;