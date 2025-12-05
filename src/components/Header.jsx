import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import Resume from '../assets/Resume.pdf'

export default function Hero() {
  const downloadResume = () =>{
        fetch(Resume)
        .then((res) => res.blob())
        .then((blob) => {
            const link = document.createElement("a")
            link.href = URL.createObjectURL(blob)
            link.download = "Santhosh T - MERN Full Stack Developer.pdf"
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        })
    }
  return (
    <section
      id="header"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 px-6"
    >
      <div className="max-w-3xl text-center">
        {/* Intro */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Hi, I'm <span className="text-green-600">Santhosh T</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
          MERN Full Stack Developer
        </h2>

        {/* Frontend Skills */}
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Skilled in{" "}
          <span className="font-bold text-gray-800">
            HTML, CSS, Bootstrap, Tailwind CSS, JavaScript (ES6+), React.js, Node.js, Express.js, and MongoDB
          </span>
          . I build scalable MERN applications with responsive front-end interfaces, efficient back-end APIs, and seamless database integration.
        </p>

        {/* MERN Stack Skills */}
        {/* <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Skilled in{" "}
          <span className="font-bold text-gray-800">
            HTML, CSS, Bootstrap, Tailwind CSS, JavaScript (ES6+), React.js, Node.js, Express.js, and MongoDB
          </span>
          . I build scalable MERN applications with responsive front-end interfaces, efficient back-end APIs, and seamless database integration.
        </p> */}

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="https://wa.me/+918344571951" target='_blank'
            className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md font-medium transition transform hover:bg-green-700 hover:scale-105"
          >
            Connect with Me
          </a>
          <a
            onClick={downloadResume}
            className="cursor-pointer px-6 py-3 bg-white text-green-600 border-2 border-green-600 rounded-lg shadow-md font-medium transition transform hover:bg-green-600 hover:text-white hover:scale-105"
          >
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-2xl text-gray-700">
          <a
            href="https://wa.me/+918344571951"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition transform hover:scale-125"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://github.com/SAN2022"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition transform hover:scale-125"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/santhosh-t-4159ba228/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition transform hover:scale-125"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}

// import my_img from '../assets/Web_Images/My_Image.png'
// import '../App.css'
// import Resume from '../assets/Resume.pdf'
// import { motion } from "motion/react";

// export default function Header(){
//     const downloadResume = () =>{
//         fetch(Resume)
//         .then((res) => res.blob())
//         .then((blob) => {
//             const link = document.createElement("a")
//             link.href = URL.createObjectURL(blob)
//             link.download = "Santhosh T - Frontend Developer.pdf"
//             document.body.appendChild(link)
//             link.click()
//             document.body.removeChild(link)
//         })
//     }
//     return (
//         <>
//             <header>
//                 <motion.div 
//                     initial={{ opacity: 0, y:50 }}
//                     whileInView={{ opacity: 1, y:0, transition: {delay: 0.4, duration: 0.5}}}
//                     viewport={{once: false, amount: .5}}
//                     className='header'>
//                 {/* <img src={my_img} alt="" width='120px'/> */}
//                     <h2>I'm Santhosh T</h2>
//                     <h3>Front-end developer</h3>
//                     <h4>A passionate web developer with the skills HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, and React JS</h4>
//                     <button className='connect btn'><a href="https://wa.me/+918344571951" target='_blank'>Connect with me</a></button>
//                     <button className='resume btn' onClick={downloadResume}>Download Resume</button>
//                     <div className="social-icons">
//                         <a className='social-links' href="https://wa.me/+918344571951" target='_blank'><i class="bi bi-whatsapp"></i></a>
//                         <a className='social-links' href="https://github.com/SAN2022" target='_blank'><i class="bi bi-github"></i></a>
//                         <a className='social-links' href="https://www.linkedin.com/in/santhosh-t-4159ba228/" target='_blank'><i class="bi bi-linkedin"></i></a>
//                     </div>
//                 </motion.div>
//             </header>
//         </>
//     )
// }