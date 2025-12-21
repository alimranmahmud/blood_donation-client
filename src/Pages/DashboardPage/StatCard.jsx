const StatCard = ({ title, value }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 text-center hover:scale-105 transition">
      <h4 className="text-gray-500">{title}</h4>
      <p className="text-3xl font-bold text-red-600 mt-2">{value}</p>
    </div>
  );
};

export default StatCard;
