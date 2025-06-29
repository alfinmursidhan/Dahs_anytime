import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import EthicalSection from '@/components/sections/EthicalSection';

export const metadata = {
  title: 'About Us - Dahs',
  description: 'Learn about Dahs, our mission, and our commitment to quality hair products.',
};

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-16">
        <div className="container-padding mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="heading-lg mb-4">About Dahs</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A solution oriented brand based in Indonesia, focusing on minimalism and quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div 
                className="h-[400px] rounded-lg overflow-hidden"
                style={{
                  backgroundImage: "url('/images/about-1.jpg')", 
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <h2 className="heading-md mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                No Bad Hair was founded with a simple mission: to create premium hair products that 
                work as promised. Our team of experienced hair professionals spent years researching 
                and developing formulations that deliver exceptional results.
              </p>
              <p className="text-gray-700">
                We believe that great hair doesn't have to come at the expense of your health or the 
                environment. That's why all our products are made with natural ingredients, are cruelty-free, 
                and BPOM approved.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      <EthicalSection />
      
      <div className="py-16 bg-secondary">
        <div className="container-padding mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-md mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the professionals behind No Bad Hair products.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div
                  className="h-64 bg-gray-300"
                  style={{
                    backgroundImage: `url('/images/team-${index}.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-1">Team Member {index}</h3>
                  <p className="text-accent mb-2">Hair Professional</p>
                  <p className="text-gray-600">
                    With years of experience in the hair industry, our team members are dedicated to 
                    creating the best products for your hair.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 