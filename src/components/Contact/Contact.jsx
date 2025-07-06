import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const form = useRef();

  const SERVICE_ID = "service_q1mdwbf";
  const TEMPLATE_ID = "template_6ir3sgh";
  const PUBLIC_KEY = "2QfccxEFeHCsMLhP-";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus("sending");

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      );
      console.log("Email sent successfully:", result.text);
      setSubmissionStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmissionStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-950 text-white">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-4xl font-bold mb-4">
          Contact <span className="text-violet-500">Me</span>
        </h2>
        <p className="text-gray-400 mb-10">
          Reach out for collaboration, job opportunities, or just to talk code.
        </p>

        <motion.form
          ref={form}
          onSubmit={handleSubmit}
          className="bg-gray-900 rounded-xl shadow-lg p-8 space-y-6 text-left border border-gray-800"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div>
            <label htmlFor="name" className="block mb-2 text-sm text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-600"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-600"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-600"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={submissionStatus === "sending"}
            className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 px-6 rounded-lg transition-all disabled:opacity-60"
          >
            {submissionStatus === "sending" ? "Sending..." : "Send Message"}
          </button>

          {submissionStatus === "success" && (
            <p className="text-green-400 text-center mt-2">
              ✅ Message sent successfully!
            </p>
          )}
          {submissionStatus === "error" && (
            <p className="text-red-400 text-center mt-2">
              ❌ Failed to send message. Please try again later.
            </p>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
