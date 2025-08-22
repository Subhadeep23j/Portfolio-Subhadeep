import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt, FaBuilding, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import AnimatedSection from './AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [sendMethod, setSendMethod] = useState("whatsapp");

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
      if (sendMethod === "whatsapp") {
        const whatsappNumber = "919330200862"; // Your WhatsApp number in international format, no +
        const text =
          `Name: ${formData.name}%0A` +
          `Email: ${formData.email}%0A` +
          `Phone: ${formData.phone}%0A` +
          `Message: ${formData.message}`;
        const url = `https://wa.me/${whatsappNumber}?text=${text}`;
        window.open(url, "_blank");
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        // EmailJS integration
        emailjs.send(
          "service_falzsse", // your EmailJS service ID
          "template_bqit1rk", // your Contact Us template ID
          {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            message: formData.message,
          },
          "Z8WgEFJm5dHByWFxw" // your EmailJS user/public key
        )
        .then(
          (result) => {
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
            setFormData({ name: "", email: "", phone: "", message: "" });
          },
          (error) => {
            setErrors({ email: "Failed to send email. Please try again later." });
          }
        );
      }
    }
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-start bg-gray-900 text-white px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-7xl mx-auto">
        <AnimatedSection delay={0.2}>
          <div className="w-full text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-500 mb-3 pt-2">Contact Me</h2>
            <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
          </div>
        </AnimatedSection>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-14">
          <AnimatedSection delay={0.3}>
            <motion.div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-full flex flex-col items-center" whileHover={{ scale: 1.05 }}>
              <FaEnvelope className="text-purple-400 text-3xl mb-2" />
              <a href="mailto:maitysubhadeep72@gmail.com" className="text-base sm:text-lg hover:text-purple-400 break-all">maitysubhadeep72@gmail.com</a>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <motion.div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-full flex flex-col items-center" whileHover={{ scale: 1.05 }}>
              <FaPhone className="text-purple-400 text-3xl mb-2" />
              <a href="tel:+919330200862" className="text-base sm:text-lg hover:text-purple-400">+91 9330200862</a>
            </motion.div>
          </AnimatedSection>

            <AnimatedSection delay={0.5}>
            <motion.div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-full flex flex-col items-center" whileHover={{ scale: 1.05 }}>
              <FaLinkedin className="text-purple-400 text-3xl mb-2" />
              <a href="https://www.linkedin.com/in/subhadeep-maity-056094378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-base sm:text-lg hover:text-purple-400">Subhadeep Maity</a>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <motion.div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-full flex flex-col items-center" whileHover={{ scale: 1.05 }}>
              <FaGithub className="text-purple-400 text-3xl mb-2" />
              <a href="https://github.com/Subhadeep23j" className="text-base sm:text-lg hover:text-purple-400">Subhadeep23j</a>
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Form Section */}
        <AnimatedSection delay={0.7}>
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">Send Me a Message</h3>
        </AnimatedSection>
        
        <AnimatedSection delay={0.8}>
          <motion.form
            onSubmit={handleSubmit}
            className="w-full max-w-3xl mx-auto bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-5">
              <label className="block text-gray-300 mb-2 text-sm font-medium">Send via</label>
              <div className="flex flex-wrap items-center gap-6 mb-2">
                <label className="flex items-center cursor-pointer gap-2 text-sm sm:text-base">
                  <input
                    type="radio"
                    name="sendMethod"
                    value="whatsapp"
                    checked={sendMethod === "whatsapp"}
                    onChange={() => setSendMethod("whatsapp")}
                    className="form-radio text-purple-600 focus:ring-purple-500"
                  />
                  <FaWhatsapp className="text-xl" />
                  <span>WhatsApp</span>
                </label>
                <label className="flex items-center cursor-pointer gap-2 text-sm sm:text-base">
                  <input
                    type="radio"
                    name="sendMethod"
                    value="email"
                    checked={sendMethod === "email"}
                    onChange={() => setSendMethod("email")}
                    className="form-radio text-purple-600 focus:ring-purple-500"
                  />
                  <MdOutlineEmail className="text-xl" />
                  <span>Email</span>
                </label>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label className="block text-gray-300 text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 px-4 py-2.5 bg-gray-700/60 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>

              <div className="flex flex-col">
                <label className="block text-gray-300 text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 px-4 py-2.5 bg-gray-700/60 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>

              <div className="flex flex-col sm:col-span-2">
                <label className="block text-gray-300 text-sm font-medium">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 px-4 py-2.5 bg-gray-700/60 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div className="flex flex-col sm:col-span-2">
                <label className="block text-gray-300 text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 px-4 py-2.5 bg-gray-700/60 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                ></textarea>
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>
            </div>

            <motion.button
              type="submit"
              className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 cursor-pointer text-sm sm:text-base"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>

            {success && <p className="text-green-400 text-sm mt-4">Message sent successfully!</p>}
          </motion.form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
