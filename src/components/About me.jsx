import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section
      id="about-me"
      className="py-16 px-6 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-5">
          About Me
        </h2>
        
        {/* Underline */}
        <motion.div
          className="w-20 h-1 bg-green-600 mx-auto mb-10 rounded"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        />       

        {/* Paragraph */}
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          Hi! I'm{" "}
          <span className="font-semibold text-green-600">Santhosh T</span>, a
          passionate and detail-oriented{" "}
          <span className="font-semibold">MERN Full Stack Developer</span> specializing in{" "}
          <span className="font-semibold">React.js</span>. I enjoy turning
          complex problems into simple, beautiful, and intuitive user
          interfaces.
          <br />
          <br />
          I have experience building responsive web applications with modern
          technologies like{" "}
          <span className="font-medium">
            React, JavaScript, and REST APIs
          </span>
          . I'm always eager to learn and stay up-to-date with the latest in web
          development.
          <br />
          <br />
          When I'm not coding, you'll find me exploring design trends, reading
          tech blogs, or working on side projects. My goal is to build
          scalable, user-friendly web apps that make a{" "}
          <span className="font-semibold text-green-600">
            positive impact
          </span>
          .
        </p>
      </div>
    </section>
  );
}
