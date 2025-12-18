import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FaUsers, FaTint, FaHandHoldingHeart } from "react-icons/fa";

const StatCard = ({ icon, title, value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      setCount(0); // 🔁 reset on every scroll-in
      let start = 0;
      const interval = setInterval(() => {
        start += Math.ceil(value / 40);
        if (start >= value) {
          start = value;
          clearInterval(interval);
        }
        setCount(start);
      }, 30);

      return () => clearInterval(interval);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 20px 40px rgba(220,38,38,0.25)"
      }}
      className="bg-white rounded-3xl shadow-md p-8 text-center flex flex-col items-center transition"
    >
      <div className="text-red-600 text-4xl mb-4">
        {icon}
      </div>

      <h3 className="text-3xl font-bold">
        {count}+
      </h3>

      <p className="text-gray-600 mt-2">
        {title}
      </p>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <div className="bg-gray-50 py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        <StatCard
          icon={<FaUsers />}
          title="Registered Donors"
          value={1200}
        />
        <StatCard
          icon={<FaTint />}
          title="Blood Requests"
          value={850}
        />
        <StatCard
          icon={<FaHandHoldingHeart />}
          title="Lives Saved"
          value={640}
        />
      </motion.div>
    </div>
  );
};

export default Stats;
