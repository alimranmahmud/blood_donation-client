import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gray-900 text-gray-300"
    >
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            BloodCare
          </h2>
          <p className="text-sm leading-relaxed">
            BloodCare is a digital blood donation platform that connects donors
            with patients in need. Our mission is to save lives by making blood
            donation simple, fast, and secure.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-500 cursor-pointer">Home</li>
            <li className="hover:text-red-500 cursor-pointer">Search Donors</li>
            <li className="hover:text-red-500 cursor-pointer">Donation Requests</li>
            <li className="hover:text-red-500 cursor-pointer">Dashboard</li>
          </ul>
        </motion.div>

        {/* Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">
            Support
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-500 cursor-pointer">Contact Us</li>
            <li className="hover:text-red-500 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-red-500 cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-red-500 cursor-pointer">FAQs</li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>
          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <FaEnvelope /> support@bloodcare.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt /> +880 1234 567890
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <FaFacebookF className="hover:text-red-500 cursor-pointer" />
              <FaTwitter className="hover:text-red-500 cursor-pointer" />
              <FaLinkedinIn className="hover:text-red-500 cursor-pointer" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.5 }}
        className="border-t border-gray-700 py-6 text-center text-sm"
      >
        © {new Date().getFullYear()} BloodCare. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
