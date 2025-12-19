import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { motion } from "framer-motion";

const AddRequest = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");

  useEffect(() => {
    axios.get("/district.json").then(res =>
      setDistricts(res.data.districts)
    );
    axios.get("/upazila.json").then(res =>
      setUpazilas(res.data.upazilas)
    );
  }, []);

  // ✅ FIXED FILTER (district_id based)
  const filteredUpazilas = upazilas.filter(
    u => String(u.district_id) === String(selectedDistrict)
  );

  const handleRequest = e => {
    e.preventDefault();
    const form = e.target;

    const requestData = {
      requesterName: user?.displayName,
      requesterEmail: user?.email,
      recipientName: form.recipientName.value,
      districtId: selectedDistrict,   // ✅ store district id
      upazila: form.upazila.value,
      hospital: form.hospital.value,
      address: form.address.value,
      bloodGroup: form.bloodGroup.value,
      donationDate: form.date.value,
      donationTime: form.time.value,
      message: form.message.value,
      status: "pending",
      createdAt: new Date()
    };

    axiosSecure.post("/requests", requestData)
      .then(() => {
        alert("Blood request created successfully ❤️");
        form.reset();
        setSelectedDistrict("");
      })
      .catch(err => console.error(err));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md"
    >
      <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
        🩸 Create Blood Donation Request
      </h2>

      <form
        onSubmit={handleRequest}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <input
          value={user?.displayName}
          readOnly
          className="input input-bordered"
        />

        <input
          value={user?.email}
          readOnly
          className="input input-bordered"
        />

        <input
          name="recipientName"
          placeholder="Recipient Name"
          required
          className="input input-bordered"
        />

        {/* ✅ District select uses ID */}
        <select
          value={selectedDistrict}
          onChange={e => setSelectedDistrict(e.target.value)}
          required
          className="select select-bordered"
        >
          <option value="">Select District</option>
          {districts.map(d => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
        </select>

        {/* ✅ Filtered Upazila */}
        <select name="upazila" required className="select select-bordered">
          <option value="">Select Upazila</option>
          {filteredUpazilas.map(u => (
            <option key={u.id} value={u.name}>
              {u.name}
            </option>
          ))}
        </select>

        <input
          name="hospital"
          placeholder="Hospital Name"
          required
          className="input input-bordered"
        />

        <input
          name="address"
          placeholder="Full Address"
          required
          className="input input-bordered"
        />

        <select name="bloodGroup" required className="select select-bordered">
          <option value="">Blood Group</option>
          {["A+","A-","B+","B-","AB+","AB-","O+","O-"].map(bg => (
            <option key={bg} value={bg}>{bg}</option>
          ))}
        </select>

        <input name="date" type="date" required className="input input-bordered" />
        <input name="time" type="time" required className="input input-bordered" />

        <textarea
          name="message"
          className="textarea textarea-bordered md:col-span-2"
          placeholder="Explain why blood is needed..."
          required
        />

        <button className="btn btn-error md:col-span-2 text-white">
          Submit Request
        </button>
      </form>
    </motion.div>
  );
};

export default AddRequest;
