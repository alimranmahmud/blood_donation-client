import { motion } from "framer-motion";
import { FaUserCheck, FaClock, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaUserCheck />,
    title: "Verified Donors",
    desc: "Every donor goes through a verification process to ensure safety, authenticity, and reliability.",
    extra: "Admin monitored & role-based access controlled."
  },
  {
    icon: <FaClock />,
    title: "Fast & Reliable Requests",
    desc: "Post blood requests instantly and connect with nearby donors during emergency situations.",
    extra: "Real-time status & response tracking."
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure & Trusted Platform",
    desc: "Built with industry-standard security practices to protect user data and privacy.",
    extra: "JWT authentication & protected APIs."
  }
];

const Featured = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      
      {/* Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        Why Choose <span className="text-red-600">BloodCare</span>
      </motion.h2>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{
              y: -10,
              scale: 1.03,
              boxShadow: "0px 25px 60px rgba(220,38,38,0.25)"
            }}
            className="
              relative 
              h-full 
              bg-white/80 
              backdrop-blur 
              border border-red-100 
              rounded-3xl 
              p-10 
              flex 
              flex-col 
              items-center 
              text-center
              transition-all
            "
          >
            {/* Gradient Border Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500/10 to-transparent pointer-events-none" />

            {/* Icon Badge */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-50 text-red-600 text-2xl mb-6 shadow-md">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-4">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              {item.desc}
            </p>

            {/* Spacer keeps cards equal height */}
            <div className="flex-grow" />

            {/* Extra Info */}
            <p className="text-sm text-gray-500 border-t pt-4 w-full">
              {item.extra}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
