import { motion } from "framer-motion";
import { FaUserPlus, FaSearch, FaCheckCircle, FaHeart } from "react-icons/fa";

const steps = [
  {
    step: "01",
    icon: <FaUserPlus />,
    title: "Register as Donor",
    desc: "Create your account and complete your donor profile with accurate information."
  },
  {
    step: "02",
    icon: <FaSearch />,
    title: "Search or Get Requests",
    desc: "Find nearby blood requests or receive notifications from patients in need."
  },
  {
    step: "03",
    icon: <FaCheckCircle />,
    title: "Confirm Donation",
    desc: "Accept the request and confirm the donation date, time, and location."
  },
  {
    step: "04",
    icon: <FaHeart />,
    title: "Donate & Save Lives",
    desc: "Donate blood and become a life-saving hero for someone in need."
  }
];

const DonationProcess = () => {
  return (
    <section className="bg-gray-50 py-28">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-center mb-20"
        >
          Blood Donation <span className="text-red-600">Process</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative grid grid-cols-1  md:grid-cols-2 gap-10">

          {/* Center line (desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-red-200" />

          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: "0px 25px 50px rgba(220,38,38,0.25)"
              }}
              className="
                relative 
                bg-white 
                rounded-3xl 
                p-8 
                text-center 
                flex 
                flex-col 
                items-center 
                shadow-md 
                transition
              "
            >
              {/* Step Number */}
              <div className="absolute -top-5 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Step {item.step}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-50 text-red-600 text-2xl mb-6 mt-4">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonationProcess;
