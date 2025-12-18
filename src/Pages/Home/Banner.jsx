import { Link } from "react-router";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-red-600 to-red-400 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Donate Blood, Save Lives ❤️
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="max-w-2xl mx-auto mb-8 text-lg"
        >
          A trusted blood donation platform connecting donors with those in need.
          Your single donation can save multiple lives.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/register"
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
            >
              Join as a Donor
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/search"
              className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600"
            >
              Search Donors
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Banner;
