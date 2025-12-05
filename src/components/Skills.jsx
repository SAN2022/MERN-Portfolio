import { motion } from "framer-motion";

const skills = [
  { name: "HTML", iconClass: "devicon-html5-plain" },
  { name: "CSS", iconClass: "devicon-css3-plain" },
  { name: "Bootstrap", iconClass: "devicon-bootstrap-plain" },
  { name: "Tailwind CSS", iconClass: "devicon-tailwindcss-plain" },
  { name: "JavaScript (ES6+)", iconClass: "devicon-javascript-plain" },
  { name: "React.js", iconClass: "devicon-react-original" },
  { name: "Node.js", iconClass: "devicon-nodejs-plain" },
  { name: "Express.js", iconClass: "devicon-express-original" },
  { name: "MongoDB", iconClass: "devicon-mongodb-plain" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        {/* Underline */}
        <motion.div
          className="w-20 h-1 bg-green-600 mx-auto mb-10 rounded"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center border-2 border-transparent"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.08,
                rotate: -2,
                boxShadow: "0px 0px 20px rgba(34,197,94,0.6)",
                borderColor: "#22c55e",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Render Devicon icon */}
              <motion.i
                className={`${skill.iconClass} colored text-6xl mb-4`}
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                aria-hidden="true"
              />
              <h5 className="text-gray-700 font-semibold">{skill.name}</h5>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
