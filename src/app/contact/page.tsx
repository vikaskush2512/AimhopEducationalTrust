"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">Get In <span className="text-primary-600">Touch</span></h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about admissions or scholarships? Our team was ready to provide immediate assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[2rem] shadow-xl p-8 lg:p-12 border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input type="text" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none" placeholder="Scholarship Query" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none resize-none" placeholder="Tell us how we can help you..."></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center transition-all transform hover:-translate-y-0.5 active:scale-95"
              >
                Send Message <Send size={20} className="ml-3" />
              </button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-3xl border border-gray-100 flex items-start group hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary-100 group-hover:bg-primary-600 group-hover:text-white text-primary-600 rounded-2xl flex items-center justify-center mr-6 shrink-0 transition-all">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">Our Location</h4>
                <p className="text-gray-600 leading-relaxed">
                  123 Education Hub, Sector 45, <br/> New Delhi, India 110001
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 flex items-start group hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-secondary/10 group-hover:bg-secondary group-hover:text-white text-secondary rounded-2xl flex items-center justify-center mr-6 shrink-0 transition-all">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">Phone Number</h4>
                <p className="text-gray-600 leading-relaxed font-semibold">+91 98765 43210</p>
                <p className="text-gray-500 text-sm">Mon - Sat, 9:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 flex items-start group hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-green-100 group-hover:bg-green-600 group-hover:text-white text-green-600 rounded-2xl flex items-center justify-center mr-6 shrink-0 transition-all">
                <MessageCircle size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">WhatsApp Chat</h4>
                <p className="text-gray-600 leading-relaxed mb-4">Chat with our admission counselor instantly on WhatsApp.</p>
                <a href="https://wa.me/919876543210" target="_blank" className="text-green-600 font-bold inline-flex items-center hover:underline">Chat Now <ArrowRight size={16} className="ml-2" /></a>
              </div>
            </div>

            <div className="bg-primary-900 rounded-[2rem] p-10 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600 rounded-full blur-2xl opacity-40"></div>
               <h3 className="text-xl font-bold mb-4">Response Time</h3>
               <div className="flex items-center text-primary-200">
                  <Clock size={18} className="mr-3" />
                  <span>Usually responds within 2 hours during working hours.</span>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-20 h-96 bg-gray-200 rounded-[3rem] overflow-hidden shadow-inner border border-gray-100 relative group">
           <div className="absolute inset-0 flex items-center justify-center flex-col text-gray-500">
              <MapPin size={48} className="mb-4 opacity-30" />
              <p className="font-bold opacity-50">Interactive Google Map Integration</p>
           </div>
           {/* In a real scenario, an iframe would be here */}
        </div>
      </div>
    </div>
  );
}

function ArrowRight({ size = 16, className = "" }) {
  return (
    <svg 
      width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" 
      className={className}
    >
      <path d="M5 12h14"></path>
      <path d="M12 5l7 7-7 7"></path>
    </svg>
  );
}
