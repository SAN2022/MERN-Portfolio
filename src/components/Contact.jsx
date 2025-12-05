import { useEffect, useState } from "react";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import contact_us from "../assets/Web_Images/Contact us.png";

export default function Contact() {
  const initialValues = { name: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      alert("✅ Thanks for Submitting!");
      setFormValues(initialValues); // reset form
      setIsSubmit(false);
    }
  }, [formErrors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const namePattern = /^[a-zA-Z ]+$/;
    const emailPattern =
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!values.name) {
      errors.name = "Name is required";
    } else if (!namePattern.test(values.name)) {
      errors.name = "Name must contain only letters";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailPattern.test(values.email)) {
      errors.email = "Please enter a valid email address!";
    }
    if (!values.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Contact Me
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="Enter your name"
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="Enter your email"
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="Enter your message"
                />
                {formErrors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
              >
                Submit
              </button>
            </form>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-6 mt-6">
              <a
                href="https://wa.me/+918344571951" target='_blank'
                rel="noopener noreferrer"
                className="text-green-600 text-2xl hover:scale-110 transition"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://github.com/SAN2022"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 text-2xl hover:scale-110 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/santhosh-t-4159ba228/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 text-2xl hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Contact Image */}
          <div className="hidden md:block">
            <img
              src={contact_us}
              alt="Contact Us"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
