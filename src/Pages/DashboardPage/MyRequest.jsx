import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { motion } from 'framer-motion';

const MyRequest = () => {
  const [totalRequest, setTotalRequest] = useState(0);
  const [myRequest, setMyRequest] = useState([]);
  const [itemPerPage, setItemPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get(`/my-request?page=${currentPage - 1}&size=${itemPerPage}`)
      .then(res => {
        setMyRequest(res.data.request);
        setTotalRequest(res.data.totalRequest);
      });
  }, [axiosSecure, currentPage, itemPerPage]);

  const numberOfPage = Math.ceil(totalRequest / itemPerPage);
  const pages = [...Array(numberOfPage).keys()].map(e => e + 1);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < pages.length) setCurrentPage(currentPage + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        My Blood Donation Requests
      </h2>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl shadow-md">
        <table className="table table-zebra">
          <thead className="bg-red-100 text-red-700">
            <tr>
              <th>#</th>
              <th>Recipient Name</th>
              <th>Hospital</th>
              <th>Blood Group</th>
            </tr>
          </thead>

          <tbody>
            {myRequest.map((request, index) => (
              <motion.tr
                key={request._id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="hover:bg-red-50"
              >
                <td>{index + 1}</td>
                <td>{request.recipientName}</td>
                <td>{request.hospital}</td>
                <td>
                  <span className="badge badge-error text-white">
                    {request.bloodGroup}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>

        {myRequest.length === 0 && (
          <p className="text-center py-6 text-gray-500">
            No requests found
          </p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap gap-2 justify-center mt-6">
        <button onClick={handlePrev} className="btn btn-sm">
          Prev
        </button>

        {pages.map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`btn btn-sm ${
              page === currentPage
                ? 'bg-red-600 text-white'
                : 'btn-outline'
            }`}
          >
            {page}
          </button>
        ))}

        <button onClick={handleNext} className="btn btn-sm">
          Next
        </button>
      </div>
    </motion.div>
  );
};

export default MyRequest;
