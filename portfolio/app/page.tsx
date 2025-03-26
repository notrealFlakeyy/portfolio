'use client'

import React from "react";
import Card from "@/components/card";
import Button from "@/components/button";
import { motion } from "framer-motion";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-8 text-left text-white">
      <motion.h1
        className="text-6xl font-bold mb-6 text-green-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Welcome to My Portfolio
      </motion.h1>
      <p className="text-xl text-gray-300 mb-8">I am a web developer specializing in PHP, Next.js, and TypeScript.</p>
      
      <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
        <Card className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-white">BestService.fi</h2>
          <p className="text-gray-400 mb-4">A website I built for a real company.</p>
          <Link href="https://bestservice.fi" target="_blank">
            <Button className="mt-4 bg-green-400 text-gray-900">Visit Site</Button>
          </Link>
        </Card>
      </div>
      
      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-2xl font-semibold text-green-400">Contact Me</h3>
        <p className="text-gray-300">Email: your-email@example.com</p>
        <p className="text-gray-300">LinkedIn: <Link href="https://linkedin.com/in/yourprofile" className="text-green-400">yourprofile</Link></p>
      </motion.div>
    </div>
  );
};

export default Home;
