import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const MyRequest = () => {
  const [totalRequest, setTotalRequest] = useState(0);
  const [myRequest, setMyRequest] = useState([]);
  const [itemPerPage] = useState(10);
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
console.log("hello      asd                        ",myRequest)
  const numberOfPage = Math.ceil(totalRequest / itemPerPage);
  const pages = [...Array(numberOfPage).keys()].map(e => e + 1);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < pages.length) setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <div className="overflow-x-auto rounded-box border bg-base-100">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Recipient Name</th>
              <th>Hospital</th>
              <th>Blood Group</th>
            </tr>
          </thead>
          <tbody>
            {myRequest.map((request, index) => (
              <tr key={request._id}>
                <th>{(currentPage - 1) * itemPerPage + index + 1}</th>
                <td>{request.recipient_name}</td>
                <td>{request.hospital_name}</td>
                <td>{request.blood_group}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {myRequest.length === 0 && (
          <p className="text-center py-5 text-gray-500">
            No request found
          </p>
        )}
      </div>

      <div className="flex gap-2 justify-center mt-4">
        <button onClick={handlePrev} className="btn">Prev</button>
        {pages.map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`btn ${page === currentPage ? 'bg-[#435585] text-white' : ''}`}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNext} className="btn">Next</button>
      </div>
    </div>
  );
};

export default MyRequest;
