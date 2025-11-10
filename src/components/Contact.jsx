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
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <AnimatedSection delay={0.2}>
          <div className="w-full text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 mb-4">
              Get In Touch
            </h2>
            <div className="h-1.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent max-w-2xl mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">Feel free to reach out to me. I'll get back to you as soon as possible!</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <AnimatedSection delay={0.3}>
            <div className="space-y-6">
              <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8">Contact Information</h3>
              
              {/* Email */}
              <div className="group relative p-6 bg-gradient-to-br from-purple-900/40 to-purple-900/20 backdrop-blur-md border border-purple-500/40 rounded-2xl hover:border-purple-500/80 transition-all duration-500 cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/50 to-pink-600/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaEnvelope className="text-purple-300 text-xl" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:maitysubhadeep72@gmail.com" className="text-white text-lg font-bold hover:text-purple-400 transition-colors break-all">
                      maitysubhadeep72@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="group relative p-6 bg-gradient-to-br from-blue-900/40 to-blue-900/20 backdrop-blur-md border border-blue-500/40 rounded-2xl hover:border-blue-500/80 transition-all duration-500 cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/50 to-cyan-600/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaPhone className="text-blue-300 text-xl" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:+919330200862" className="text-white text-lg font-bold hover:text-blue-400 transition-colors">
                      +91 9330200862
                    </a>
                  </div>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="group relative p-6 bg-gradient-to-br from-pink-900/40 to-pink-900/20 backdrop-blur-md border border-pink-500/40 rounded-2xl hover:border-pink-500/80 transition-all duration-500 cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-600/50 to-rose-600/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaLinkedin className="text-pink-300 text-xl" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-1">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/subhadeep-maity-056094378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-white text-lg font-bold hover:text-pink-400 transition-colors">
                      Subhadeep Maity
                    </a>
                  </div>
                </div>
              </div>

              {/* GitHub */}
              <div className="group relative p-6 bg-gradient-to-br from-green-900/40 to-green-900/20 backdrop-blur-md border border-green-500/40 rounded-2xl hover:border-green-500/80 transition-all duration-500 cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600/50 to-emerald-600/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaGithub className="text-green-300 text-xl" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-1">GitHub</p>
                    <a href="https://github.com/Subhadeep23j" className="text-white text-lg font-bold hover:text-green-400 transition-colors">
                      Subhadeep23j
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Side - Contact Form */}
          <AnimatedSection delay={0.4}>
            <motion.form
              onSubmit={handleSubmit}
              className="w-full bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-md border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500 p-8 rounded-2xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">Send Message</h3>
              
              {/* Send Method */}
              <div className="mb-6">
                <label className="block text-gray-300 mb-3 text-sm font-bold uppercase tracking-wider">Send via</label>
                <div className="flex gap-4 mb-4">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="sendMethod"
                      value="whatsapp"
                      checked={sendMethod === "whatsapp"}
                      onChange={() => setSendMethod("whatsapp")}
                      className="w-4 h-4 text-purple-600 cursor-pointer"
                    />
                    <FaWhatsapp className="text-green-500 text-lg group-hover:scale-110 transition-transform" />
                    <span className="text-white font-semibold">WhatsApp</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="sendMethod"
                      value="email"
                      checked={sendMethod === "email"}
                      onChange={() => setSendMethod("email")}
                      className="w-4 h-4 text-purple-600 cursor-pointer"
                    />
                    <MdOutlineEmail className="text-purple-500 text-lg group-hover:scale-110 transition-transform" />
                    <span className="text-white font-semibold">Email</span>
                  </label>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-gray-300 text-sm font-bold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 text-white rounded-lg focus:outline-none focus:border-purple-500 transition-all placeholder-gray-500"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1 font-semibold">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-300 text-sm font-bold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 text-white rounded-lg focus:outline-none focus:border-purple-500 transition-all placeholder-gray-500"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1 font-semibold">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-300 text-sm font-bold mb-2">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit phone number"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 text-white rounded-lg focus:outline-none focus:border-purple-500 transition-all placeholder-gray-500"
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1 font-semibold">{errors.phone}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-300 text-sm font-bold mb-2">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 text-white rounded-lg focus:outline-none focus:border-purple-500 transition-all resize-none placeholder-gray-500"
                  ></textarea>
                  {errors.message && <p className="text-red-400 text-xs mt-1 font-semibold">{errors.message}</p>}
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="mt-8 w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-purple-500/50 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>

              {success && (
                <motion.p 
                  className="text-green-400 text-sm mt-4 font-bold text-center bg-green-600/20 border border-green-500/50 py-2 rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  ✓ Message sent successfully!
                </motion.p>
              )}
            </motion.form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
