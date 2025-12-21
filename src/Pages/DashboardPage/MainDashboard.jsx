import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { motion } from "framer-motion";
import StatCard from "./StatCard";

const MainDashboard = () => {
  const axiosSecure = useAxiosSecure();

  const [stats, setStats] = useState({
    users: 0,
    requests: 0,
    pending: 0,
    completed: 0,
  });

  const [recentRequests, setRecentRequests] = useState([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    const usersRes = await axiosSecure.get("/users");
    const requestRes = await axiosSecure.get("/donation-requests");

    const allRequests = requestRes.data;

    setStats({
      users: usersRes.data.length,
      requests: allRequests.length,
      pending: allRequests.filter(r => r.status === "pending").length,
      completed: allRequests.filter(r => r.status === "done").length,
    });

    setRecentRequests(allRequests.slice(0, 5));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6"
    >
      <h2 className="text-3xl font-bold text-red-600 mb-6">
        🩸 Blood Donation Dashboard
      </h2>

      {/* 🔹 Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <StatCard title="Total Users" value={stats.users} />
        <StatCard title="Total Requests" value={stats.requests} />
        <StatCard title="Pending Requests" value={stats.pending} />
        <StatCard title="Completed" value={stats.completed} />
      </div>

      {/* 🔹 Recent Requests */}
      <div className="bg-white rounded-xl shadow-md p-4">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          Recent Blood Requests
        </h3>

        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead className="bg-red-100">
              <tr>
                <th>#</th>
                <th>Recipient</th>
                <th>Hospital</th>
                <th>Blood</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentRequests.map((req, index) => (
                <tr key={req._id}>
                  <td>{index + 1}</td>
                  <td>{req.recipientName}</td>
                  <td>{req.hospital}</td>
                  <td>
                    <span className="badge badge-error text-white">
                      {req.bloodGroup}
                    </span>
                  </td>
                  <td>
                    <span className={`badge 
                      ${req.status === "pending" && "badge-warning"}
                      ${req.status === "inprogress" && "badge-info"}
                      ${req.status === "done" && "badge-success"}
                      ${req.status === "canceled" && "badge-error"}
                    `}>
                      {req.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {recentRequests.length === 0 && (
            <p className="text-center py-4 text-gray-400">
              No requests found
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MainDashboard;
