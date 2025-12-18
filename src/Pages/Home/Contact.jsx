import { motion } from "framer-motion";
import { FaEnvelope, FaUser, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-b from-gray-100 to-gray-200 py-24"
    >
      <div className="max-w-5xl mx-auto px-4">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-center mb-14"
        >
          Get in <span className="text-red-600">Touch</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Info Panel */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              We’d love to hear from you
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Have questions about blood donation, need help using the platform,
              or want to collaborate with us? Reach out and our team will respond
              as soon as possible.
            </p>

            <div className="space-y-4 text-gray-700">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-red-600" />
                support@bloodcare.com
              </div>
              <div className="flex items-center gap-3">
                <FaUser className="text-red-600" />
                Community Support Team
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.form
            whileHover={{ scale: 1.01 }}
            className="bg-white/80 backdrop-blur shadow-xl rounded-3xl p-10 space-y-6"
          >
            <div className="relative">
              <FaUser className="absolute top-4 left-4 text-gray-400" />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full pl-12 p-3 rounded-xl border focus:ring-2 focus:ring-red-500 outline-none"
              />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute top-4 left-4 text-gray-400" />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full pl-12 p-3 rounded-xl border focus:ring-2 focus:ring-red-500 outline-none"
              />
            </div>

            <textarea
              placeholder="Write your message..."
              className="w-full p-4 rounded-xl border h-36 focus:ring-2 focus:ring-red-500 outline-none"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-red-700 transition"
            >
              <FaPaperPlane />
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
