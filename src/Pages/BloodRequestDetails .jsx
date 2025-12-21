import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  FaUser,
  FaMapMarkerAlt,
  FaHospital,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
import { useLoaderData } from "react-router";

const BloodRequestDetails = () => {
    const data = useLoaderData()
    console.log(data)


const handleDonate=()=>{
    toast.success("Donate Confirm")
}

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gray-100"
    >
      {/* ===== Header ===== */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12 rounded-b-3xl relative">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-white text-red-600 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
            {data.blood_group}
          </div>

          <h1 className="text-2xl font-bold mt-4">
            Blood Donation Request
          </h1>

          <div className="flex gap-2 mt-3">
            <span className="bg-red-500 px-3 py-1 text-sm rounded-full">
              Urgent
            </span>
            <span className="bg-white/20 px-3 py-1 text-sm rounded-full">
              Pending
            </span>
          </div>
        </div>
      </div>

      {/* ===== Content ===== */}
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        {/* Recipient Info */}
        <section>
          <h2 className="text-xl font-bold mb-4">
            Recipient Information
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Name */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <FaUser className="text-red-500 text-xl" />
              <div>
                <p className="text-gray-500 text-sm">Recipient Name</p>
                <p className="font-semibold">{data.recipient_name}</p>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <FaMapMarkerAlt className="text-red-500 text-xl" />
              <div>
                <p className="text-gray-500 text-sm">Location</p>
                <p className="font-semibold">{data.recipient_district}, {data.recipient_upazila}</p>
              </div>
            </div>

            {/* Hospital */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <FaHospital className="text-red-500 text-xl" />
              <div>
                <p className="text-gray-500 text-sm">Hospital</p>
                <p className="font-semibold">
                 {data.hospital_name}
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <FaMapMarkerAlt className="text-red-500 text-xl" />
              <div>
                <p className="text-gray-500 text-sm">Full Address</p>
                <p className="font-semibold">
                  {data.full_address}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Schedule */}
        <section>
          <h2 className="text-xl font-bold mb-4">
            Donation Schedule
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <FaCalendarAlt className="text-red-500 text-xl" />
              <div>
                <p className="text-gray-500 text-sm">Date</p>
                <p className="font-semibold">{data.createdAt}</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <FaClock className="text-red-500 text-xl" />
              <div>
                <p className="text-gray-500 text-sm">Time</p>
                <p className="font-semibold">10:00 AM</p>
              </div>
            </div>
          </div>
        </section>

        {/* Action Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-red-600 text-white py-3 rounded-full font-semibold shadow-lg"
       onClick={handleDonate}
       >
          Donate
        </motion.button>
      </div>
    </motion.div>
  );
};

export default BloodRequestDetails;
