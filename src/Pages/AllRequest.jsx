import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import BloodRequestCard from "../Componets/BloodRequestCard";

const AllRequest = () => {
  const { role, user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const [requests, setRequests] = useState([]);
  const [filter, setFilter] = useState("all");

  // load all requests
  useEffect(() => {
    axiosSecure
      .get("/donation-requests")
      .then(res => setRequests(res.data))
      .catch(err => console.log(err));
  }, [axiosSecure]);

  // update donation status
  const handleStatusChange = async (id, donation_status) => {
    await axiosSecure.patch(`/donation-requests/${id}/status`, {
      status: donation_status,
      donor: {
        name: user?.displayName,
        email: user?.email,
      },
    });

    const res = await axiosSecure.get("/donation-requests");
    setRequests(res.data);
  };

  // filter data
  const filteredRequests =
    filter === "all"
      ? requests
      : requests.filter(req => req.status === filter);


      console.log(requests)
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        All Blood Donation Requests
      </h2>

      {/* Filter */}
      <div className="mb-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="select select-bordered"
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="inprogress">In Progress</option>
          <option value="done">Done</option>
          <option value="canceled">Canceled</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
       
     <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto">
         {
        filteredRequests.map(card=><BloodRequestCard key={card._id} card={card}></BloodRequestCard>)
      }
     </div>

        {filteredRequests.length === 0 && (
          <p className="text-center text-gray-500 mt-6">
            No donation request found
          </p>
        )}
      </div>
    </div>
  );
};

export default AllRequest;
