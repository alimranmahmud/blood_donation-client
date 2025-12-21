import { FaMapMarkerAlt, FaEye } from "react-icons/fa";
import { MdDateRange, MdAccessTime } from "react-icons/md";
import { Link } from "react-router";

const BloodRequestCard = ({card}) => {

  console.log(card)
  const {_id,bloodGroup,district,donationDate,hospital,upazila,recipientName,status}=card
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-md p-5 border">
      {/* Top Section */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold">{recipientName}</h2>
          <p className="flex items-center gap-1 text-gray-500 text-sm">
            <FaMapMarkerAlt />
            {district}, {upazila}
          </p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <span className="bg-red-100 text-red-600 font-semibold px-3 py-1 rounded-full">
            {bloodGroup}
          </span>
          <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
            Urgent
          </span>
        </div>
      </div>

      {/* Hospital */}
      <p className="mt-4 text-gray-700 font-medium">
       {hospital}
      </p>

      {/* Date & Time */}
      <div className="flex gap-6 mt-3 text-gray-500 text-sm">
        <p className="flex items-center gap-1">
          <MdDateRange />
          {donationDate}
        </p>
      
      </div>

      {/* Button */}
      <button className="mt-5 w-full border-2 border-red-500 text-red-500 font-semibold py-2 rounded-full flex items-center justify-center gap-2 hover:bg-red-500 hover:text-white transition">
        <FaEye />
        <Link to={`/card_details/${_id}`}>View Details</Link>
      </button>
    </div>
  );
};

export default BloodRequestCard;
