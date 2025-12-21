import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAxios from '../Hooks/useAxios';
import { motion } from 'framer-motion';

const SearchRequest = () => {
  const [upazilas, setUpazilas] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState('');
  const [upazila, setUpazila] = useState('');
  const axiosInstance = useAxios();

  useEffect(() => {
    axios.get('/upazila.json').then(res => setUpazilas(res.data.upazilas));
    axios.get('/district.json').then(res => setDistricts(res.data.districts));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const bloodGroup = e.target.blood.value;

    axiosInstance.get(
      `/search-requests?bloodGroup=${bloodGroup}&district=${district}&upazila=${upazila}`
    ).then(res => {
      console.log(res.data);
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-5xl mx-auto p-6"
    >
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
        🔍 Search Blood Donor
      </h2>

      {/* Card */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <form
          onSubmit={handleSearch}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          {/* Blood Group */}
          <select
            name="blood"
            required
            className="select select-bordered w-full"
          >
            <option value="">Blood Group</option>
            {['A+','A-','B+','B-','AB+','AB-','O+','O-'].map(bg => (
              <option key={bg} value={bg}>{bg}</option>
            ))}
          </select>

          {/* District */}
          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            required
            className="select select-bordered w-full"
          >
            <option value="">Select District</option>
            {districts.map(d => (
              <option key={d.id} value={d.name}>
                {d.name}
              </option>
            ))}
          </select>

          {/* Upazila */}
          <select
            value={upazila}
            onChange={(e) => setUpazila(e.target.value)}
            required
            className="select select-bordered w-full"
          >
            <option value="">Select Upazila</option>
            {upazilas.map(u => (
              <option key={u.id} value={u.name}>
                {u.name}
              </option>
            ))}
          </select>

          {/* Button */}
          <button
            type="submit"
            className="btn btn-error text-white w-full"
          >
            Search
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default SearchRequest;
