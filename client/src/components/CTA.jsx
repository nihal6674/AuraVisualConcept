import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaEnvelope, FaPhone } from "react-icons/fa";

export default function CTASection() {
  return (
    <section id="contact" className="py-20 px-6 ">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
          Get in Touch
        </h2>
        <p className="text-gray-700 mb-12">
          Welcome! Please provide your details, and our team will be in touch shortly.
        </p>

        {/* Contact icons */}
        <div className="flex justify-center gap-8 mb-12 text-3xl text-gray-700">
          <motion.a href="mailto:Auravisuals69@gmail.com" whileHover={{ scale: 1.2, color: "#E1306C" }} className="transition">
            <FaEnvelope />
          </motion.a>
          <motion.a href="tel:+919846298316" whileHover={{ scale: 1.2, color: "#10B981" }} className="transition">
            <FaPhone />
          </motion.a>
          <motion.a href="https://www.instagram.com/auravisual.concepts/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, color: "#E1306C" }} className="transition">
            <FaInstagram />
          </motion.a>
          <motion.a href="https://www.facebook.com/profile.php?id=61582331444802" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, color: "#1877F2" }} className="transition">
            <FaFacebookF />
          </motion.a>
        </div>

        {/* Button to redirect to Formbricks survey */}
        <motion.a
          href="https://app.formbricks.com/s/cmh60ytt604zmad01xxd55th8"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="inline-block px-8 py-4 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition"
        >
          Request a Callback
        </motion.a>
      </motion.div>
    </section>
  );
}
