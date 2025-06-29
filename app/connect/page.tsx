import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone, FiInstagram } from 'react-icons/fi';

export default function Connect() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container-padding mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="heading-lg mb-4">Connect With Us</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you! Whether you have questions about our products,
              need hair care advice, or want to collaborate, we're here to help.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="heading-md mb-6">Get In Touch</h2>
              
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-accent transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-accent transition"
                      placeholder="johndoe@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-accent transition"
                    placeholder="Product inquiry"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                  <textarea 
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-accent transition"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  SEND MESSAGE
                </button>
              </form>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="heading-md mb-6">Contact Information</h2>
              
              <div className="bg-secondary p-6 rounded-lg mb-6">
                <div className="flex items-start mb-4">
                  <FiMapPin className="text-accent mt-1 mr-4" size={20} />
                  <div>
                    <h3 className="font-bold mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      Jakarta, Indonesia
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mb-4">
                  <FiMail className="text-accent mt-1 mr-4" size={20} />
                  <div>
                    <h3 className="font-bold mb-1">Email Us</h3>
                    <p className="text-gray-600">
                      info@nobadhair.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FiPhone className="text-accent mt-1 mr-4" size={20} />
                  <div>
                    <h3 className="font-bold mb-1">Call Us</h3>
                    <p className="text-gray-600">
                      +62 123 456 7890
                    </p>
                  </div>
                </div>
              </div>
              
              <h2 className="heading-md mb-6">Follow Us</h2>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-white hover:bg-accent transition-all duration-300"
                >
                  <FiInstagram size={18} />
                  <span className="font-medium">Instagram</span>
                </a>
                <a 
                  href="https://tiktok.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-white hover:bg-accent transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                    <path d="M15 8c0 1.657-1.343 3-3 3v4"></path>
                    <path d="M21 8V7c-1.657 0-3-1.343-3-3h-1c0 1.657-1.343 3-3 3"></path>
                  </svg>
                  <span className="font-medium">TikTok</span>
                </a>
              </div>
              
              <p className="text-gray-600">
                Connect with us on social media for updates, hair care tips, and exclusive offers.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      
      <Footer />
    </main>
  );
} 