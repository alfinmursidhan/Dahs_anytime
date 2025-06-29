import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

export const metadata = {
  title: 'Customer Reviews - No Bad Hair',
  description: 'Read what our customers say about No Bad Hair products.',
};

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Simon M.",
      rating: 5,
      text: "Simply the best local product I've ever tried. Definitely will re-purchase!",
      product: "No.1 Creamy Clay",
      date: "May 15, 2023"
    },
    {
      id: 2,
      name: "Stefanus",
      rating: 5,
      text: "Bangga ada Hair Styling Product varian Clay buatan Indonesia. Local pride. Mudah diaplikasikan di rambut, bervolume, mudah dibilas dengan air saat keramas.",
      product: "No.1 Creamy Clay",
      date: "June 3, 2023"
    },
    {
      id: 3,
      name: "Dzaki",
      rating: 5,
      text: "Terbaik dari semua produk clay yang sudah pernah saya coba",
      product: "No.1 Creamy Clay",
      date: "April 22, 2023"
    },
    {
      id: 4,
      name: "Kenneth",
      rating: 5,
      text: "Pembelian kesekian. Cocok, tidak lengket, gampang hilang ketika keramas, matte, tidak keras tapi rambut ttp rapih biarpun ketiup angin",
      product: "No.1 Creamy Clay",
      date: "July 18, 2023"
    },
    {
      id: 5,
      name: "Jonathan",
      rating: 5,
      text: "Claynya benar terasa creamy dan mudah untuk diambil dan diaplikasikan ke rambut. Setelah kering juga hold cukup baik dan tidak terasa lengket di tangan.",
      product: "No.1 Creamy Clay",
      date: "March 9, 2023"
    },
    {
      id: 6,
      name: "Shandy",
      rating: 5,
      text: "Wanginya natural, ini clay nya sampe dibawa tidur dan kebesokan harinya masih ok banget sih dan yg pasti dicuci nya gampang (ga lengket) RECOMMENDED",
      product: "No.1 Creamy Clay",
      date: "August 1, 2023"
    }
  ];

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
            <h1 className="heading-lg mb-4">Customer Reviews</h1>
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <FiStar key={star} className="text-accent w-6 h-6 mx-1 fill-current" />
              ))}
            </div>
            <p className="text-accent font-semibold mb-4">5/5 Rating</p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read what our customers have to say about our products. We're proud to have earned
              their trust and satisfaction.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div 
                    className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-primary font-bold text-lg mr-3"
                  >
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold">{review.name}</h3>
                    <p className="text-gray-500 text-sm">{review.date}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <FiStar key={i} className="text-accent w-4 h-4 mr-1 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-3 italic">"{review.text}"</p>
                <p className="text-sm text-accent">Product: {review.product}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-12 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Love our products?</h3>
            <p className="text-gray-600 mb-6">
              Share your experience with our products and help others discover the No Bad Hair difference.
            </p>
            <button className="btn-primary">
              WRITE A REVIEW
            </button>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 