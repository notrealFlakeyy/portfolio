'use client'

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-[#0a192f] text-gray-300 min-h-screen font-sans">
      {/* Sidebar Navigation */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-6 pl-6">
        <a href="https://github.com/notrealFlakeyy" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-400 hover:text-[#38bdf8] text-2xl transition" />
        </a>
        <a href="mailto:svenslucas@gmail.com">
          <FaEnvelope className="text-gray-400 hover:text-[#38bdf8] text-2xl transition" />
        </a>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center h-screen px-6">
        <motion.h1 
          className="text-5xl font-bold text-[#ccd6f6]" 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          Hi, I&#39;m Your Name.
        </motion.h1>
        <motion.p 
          className="mt-4 text-lg text-gray-400" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 1 }}>
          A web developer specializing in Next.js, TypeScript, and Tailwind CSS.
        </motion.p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto p-8">
        <h2 className="text-3xl font-bold mb-6 text-[#ccd6f6]">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div 
            className="bg-[#112240] p-6 rounded-lg shadow-lg hover:scale-105 transition transform border border-gray-700" 
            whileHover={{ scale: 1.05 }}>
            <a href="https://bestservice.fi" target="_blank" className="text-2xl font-bold text-[#38bdf8]">Oravais Servicetrafik</a>
            <p className="mt-2 text-gray-400">A website I have built.</p>
          </motion.div>
          <motion.div 
            className="bg-[#112240] p-6 rounded-lg shadow-lg hover:scale-105 transition transform border border-gray-700" 
            whileHover={{ scale: 1.05 }}>
            <a href="https://simile.fi" target="_blank" className="text-2xl font-bold text-[#38bdf8]">Simile</a>
            <p className="mt-2 text-gray-400">A website I have built.</p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto p-8 text-center">
        <h2 className="text-3xl font-bold text-[#ccd6f6]">About Me</h2>
        <p className="mt-4 text-gray-400">I am a newly graduated web developer passionate about building modern and responsive web applications.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto p-8 text-center">
        <h2 className="text-3xl font-bold text-[#ccd6f6]">Get In Touch</h2>
        <p className="mt-4 text-gray-400">Feel free to reach out via email: <a href="mailto:svenslucas@gmail.com" className="text-[#38bdf8] font-bold underline">svenslucas@gmail.com</a></p>
      </section>
    </div>
  );
}