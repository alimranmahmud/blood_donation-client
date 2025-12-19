import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { motion } from 'framer-motion';
import { FaUserShield, FaUserLock, FaUserCheck } from 'react-icons/fa';

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    axiosSecure.get('/users')
      .then(res => setUsers(res.data));
  };

  useEffect(() => {
    fetchUsers();
  }, [axiosSecure]);

  const handleStatusChange = (email, status) => {
    axiosSecure.patch(`/update/user/status?email=${email}&status=${status}`)
      .then(() => fetchUsers());
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <h2 className="text-2xl font-bold text-red-600 mb-4 flex items-center gap-2">
        <FaUserShield /> All Users
      </h2>

      <div className="overflow-x-auto rounded-xl shadow-md">
        <table className="table table-zebra w-full">
          <thead className="bg-red-100 text-red-700">
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <motion.tr
                key={user._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="hover:bg-red-50"
              >
                <td>{index + 1}</td>

                {/* User Info */}
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-12 rounded-full ring ring-red-300 ring-offset-2">
                        <img
                          src={user?.mainURL || "https://i.pravatar.cc/150"}
                          alt="user"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold">{user?.name}</p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>
                  </div>
                </td>

                {/* Role */}
                <td>
                  <span className="badge badge-outline badge-error capitalize">
                    {user?.role}
                  </span>
                </td>

                {/* Status */}
                <td>
                  <span
                    className={`badge 
                      ${user?.status === 'active' ? 'badge-success' : 'badge-error'}`}
                  >
                    {user?.status}
                  </span>
                </td>

                {/* Action */}
                <td>
                  {user?.status === 'active' ? (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleStatusChange(user.email, 'blocked')}
                      className="btn btn-xs bg-red-500 hover:bg-red-600 text-white flex items-center gap-1"
                    >
                      <FaUserLock /> Block
                    </motion.button>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleStatusChange(user.email, 'active')}
                      className="btn btn-xs bg-green-500 hover:bg-green-600 text-white flex items-center gap-1"
                    >
                      <FaUserCheck /> Activate
                    </motion.button>
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>

        {users.length === 0 && (
          <p className="text-center py-6 text-gray-500">
            No users found
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default AllUsers;
