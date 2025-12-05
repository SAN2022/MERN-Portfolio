import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Web_dev from "../assets/Web_Images/Web Development Internship.png";

const internshipDetails = [
  {
    name: "Web Development Internship",
    description:
      "Have attended and completed Web Development Internship at Kashiv Info Tech",
    img: Web_dev,
  },
];

export default function Internships() {
  const [selectedInternship, setSelectedInternship] = useState(null);

  return (
    <section id="internships" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-5">
          Internships
        </h2>

{/* Underline */}
        <motion.div
          className="w-20 h-1 bg-green-600 mx-auto mb-10 rounded"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        />
        
        <div className="flex flex-wrap justify-center gap-8">
          {internshipDetails.map((internship, index) => (
            <div
              key={index}
              className="bg-gray-50 shadow-md rounded-lg w-72 overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={internship.img}
                alt={internship.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h5 className="text-lg font-semibold text-gray-800">
                  {internship.name}
                </h5>
                <p className="text-sm text-gray-600 mt-2">
                  {internship.description}
                </p>
                <button
                  onClick={() => setSelectedInternship(internship)}
                  className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition cursor-pointer"
                >
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedInternship && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-lg shadow-lg max-w-lg w-full overflow-hidden"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={selectedInternship.img}
                  alt="Certificate"
                  className="w-full h-auto"
                />
                <div className="p-4 text-center">
                  <h5 className="text-lg font-semibold text-gray-800">
                    {selectedInternship.name}
                  </h5>
                  <button
                    onClick={() => setSelectedInternship(null)}
                    className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
