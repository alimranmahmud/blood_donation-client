import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { motion } from 'framer-motion';
import {
  FaHeartbeat,
  FaUsers,
  FaTint,
  FaMoneyBillWave
} from 'react-icons/fa';

const MainDashboard = () => {
  const { user, role } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const [stats, setStats] = useState({
    totalUsers: 0,
    totalRequests: 0,
    pending: 0,
    done: 0,
    totalFunds: 0
  });

  useEffect(() => {
    if (role === 'admin' || role === 'volunteer') {
      axiosSecure.get('/donation-requests')
        .then(res => {
          const all = res.data;
          setStats(prev => ({
            ...prev,
            totalRequests: all.length,
            pending: all.filter(r => r.status === 'pending').length,
            done: all.filter(r => r.status === 'done').length
          }));
        });

      axiosSecure.get('/users')
        .then(res => {
          setStats(prev => ({
            ...prev,
            totalUsers: res.data.length
          }));
        });

      axiosSecure.get('/payments')
        .then(res => {
          const total = res.data.reduce((sum, p) => sum + p.amount, 0);
          setStats(prev => ({
            ...prev,
            totalFunds: total
          }));
        });
    }

    if (role === 'donor') {
      axiosSecure.get('/my-request')
        .then(res => {
          const my = res.data.request;
          setStats(prev => ({
            ...prev,
            totalRequests: my.length,
            pending: my.filter(r => r.status === 'pending').length,
            done: my.filter(r => r.status === 'done').length
          }));
        });
    }
  }, [axiosSecure, role]);

  const Card = ({ icon, title, value, color }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`p-6 rounded-xl shadow-md bg-white border-l-4 ${color}`}
    >
      <div className="flex items-center gap-4">
        <div className="text-3xl text-red-600">{icon}</div>
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h2 className="text-2xl font-bold">{value}</h2>
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="p-6"
    >
      {/* Welcome */}
      <h1 className="text-3xl font-bold text-red-600 mb-2">
        Welcome, {user?.displayName || 'User'} ❤️
      </h1>
      <p className="text-gray-500 mb-6">
        Thank you for being part of the Blood Donation Platform
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {(role === 'admin' || role === 'volunteer') && (
          <Card
            icon={<FaUsers />}
            title="Total Users"
            value={stats.totalUsers}
            color="border-red-500"
          />
        )}

        <Card
          icon={<FaHeartbeat />}
          title="Total Requests"
          value={stats.totalRequests}
          color="border-red-500"
        />

        <Card
          icon={<FaTint />}
          title="Pending Requests"
          value={stats.pending}
          color="border-yellow-500"
        />

        <Card
          icon={<FaTint />}
          title="Completed Donations"
          value={stats.done}
          color="border-green-500"
        />

        {(role === 'admin' || role === 'volunteer') && (
          <Card
            icon={<FaMoneyBillWave />}
            title="Total Funds"
            value={`$${stats.totalFunds}`}
            color="border-blue-500"
          />
        )}
      </div>
    </motion.div>
  );
};

export default MainDashboard;
