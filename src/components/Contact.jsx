import { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      tempErrors.phone = "Invalid phone number";
    }
    if (!formData.message.trim()) tempErrors.message = "Message cannot be empty";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-8">
      <div className="w-full text-center py-6">
        <h2 className="text-5xl font-extrabold text-purple-500 mb-2 pt-5">Contact Me</h2>
        <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
      </div>

      {/* Contact Info */}
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8 mb-12">
        <motion.div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-80 flex flex-col items-center" whileHover={{ scale: 1.05 }}>
          <FaEnvelope className="text-purple-400 text-3xl mb-2" />
          <p className="text-lg">maitysubhadeep72@gmail.com</p>
        </motion.div>

        <motion.div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-80 flex flex-col items-center" whileHover={{ scale: 1.05 }}>
          <FaPhone className="text-purple-400 text-3xl mb-2" />
          <p className="text-lg">+91 9330200862</p>
        </motion.div>

        <motion.div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-80 flex flex-col items-center" whileHover={{ scale: 1.05 }}>
          <FaBuilding className="text-purple-400 text-3xl mb-2" />
          <p className="text-lg">My Office</p>
        </motion.div>

        <motion.div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-80 flex flex-col items-center" whileHover={{ scale: 1.05 }}>
          <FaGithub className="text-purple-400 text-3xl mb-2" />
          <a href="https://github.com/Subhadeep23j" className="text-lg hover:text-purple-400 transition">Subhadeep23j</a>
        </motion.div>
      </div>

      {/* Form Section */}
      <h3 className="text-3xl mb-3">Send Me a Message</h3>
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <label className="block text-gray-300">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-2 px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-2 px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-300">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full mt-2 px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-300">Message</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full mt-2 px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}
        </div>

        <motion.button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>

        {success && <p className="text-green-400 text-sm mt-4">Message sent successfully!</p>}
      </motion.form>
    </section>
  );
};

export default Contact;
