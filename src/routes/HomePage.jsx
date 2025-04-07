import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import PropTypes from "prop-types";

const HomePage = () => {
  const [typingStatus, setTypingStatus] = useState("human");
  
  // Memoized dialogue sequences
  const dialogueSequences = useMemo(() => [
    "Human: We produce food for Mice",
    2000,
    () => setTypingStatus("bot"),
    "Bot: We produce food for Hamsters",
    2000,
    () => setTypingStatus("human"),
    "Human: We produce food for Guinea Pigs",
    2000,
    () => setTypingStatus("bot"),
    "Bot: We produce food for Chinchillas",
    2000,
    () => setTypingStatus("human"),
  ], []);

  // Avatar image based on typing status
  const avatarImage = useMemo(() => (
    typingStatus === "human" ? "/Julius.png" : "/chart bot.png"
  ), [typingStatus]);

  return (
    <div className="relative flex min-h-[calc(100vh-3rem)] flex-col bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <motion.img
        src="/orbital.png"
        alt="Decorative background"
        className="absolute inset-0 h-full w-full object-cover opacity-30 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Main Content */}
      <main className="relative z-10 flex flex-1 items-center justify-center">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
            {/* Text Content */}
            <div className="max-w-2xl text-center lg:text-left">
              <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
                <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
                  Hillsview
                </span>{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-cyan-500 bg-clip-text text-transparent">
                  AI
                </span>
              </h1>
              
              <p className="mb-8 text-lg text-gray-300">
                Your one-stop solution for photography, videography, and AI-driven tools.
              </p>
              
              <Link
                to="/dashboard"
                className="inline-block rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:from-orange-500 hover:to-pink-500 hover:shadow-xl hover:text-black"
              >
                Get Started Now
              </Link>
            </div>

            {/* Animated Bot */}
            <motion.div
              className="relative h-64 w-64"
              animate={{
                rotate: [0, 15, -15, 0],
                y: [0, -20, 20, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut"
              }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 shadow-2xl" />
              <img
                src="/bot.png"
                alt="AI Assistant"
                className="absolute inset-0 h-full w-full p-8 object-contain"
              />
            </motion.div>
          </div>
        </div>

        {/* Interactive Dialogue */}
        <motion.div
          className="absolute bottom-8 right-8 flex items-center gap-4 rounded-lg bg-gray-800/90 p-4 shadow-lg backdrop-blur-sm"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <img
            src={avatarImage}
            alt={typingStatus === "human" ? "Julius Ntale" : "AI Assistant"}
            className="h-12 w-12 rounded-full object-cover sm:h-16 sm:w-16"
          />
          <TypeAnimation
            sequence={dialogueSequences}
            wrapper="span"
            speed={50}
            cursor={true}
            style={{ display: "inline-block" }}
            className="text-sm text-white sm:text-base"
            omitDeletionAnimation={true}
            repeat={Infinity}
          />
        </motion.div>
      </main>

      {/* Footer */}
      <motion.footer
        className="relative z-10 bg-black/80 py-4 text-center backdrop-blur-sm"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mb-2 flex justify-center space-x-6">
          <FooterLink 
            href="https://juliusntale.hillsviewproduction.com/about" 
            text="About Us" 
          />
          <FooterLink 
            href="https://juliusntale.hillsviewproduction.com/contact" 
            text="Contact" 
          />
          <FooterLink 
            to="/privacy" 
            text="Privacy Policy" 
          />
        </div>
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Hillsview. All rights reserved.
        </p>
      </motion.footer>
    </div>
  );
};

// Reusable Footer Link Component
const FooterLink = ({ href, to, text }) => {
  const className = "text-xs text-gray-300 hover:text-blue-400 transition-colors sm:text-sm";
  
  return href ? (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  ) : (
    <Link to={to} className={className}>
      {text}
    </Link>
  );
};

FooterLink.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  text: PropTypes.string.isRequired
};

export default HomePage;