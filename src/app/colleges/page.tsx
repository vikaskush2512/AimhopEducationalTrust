"use client";

import { motion } from 'framer-motion';
import { MapPin, School, GraduationCap, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const colleges = [
  { name: 'SRM University', location: 'Chennai / Delhi NCR', type: 'Private-Deemed' },
  { name: 'Vellore Institute of Technology', location: 'Vellore / Amaravati', type: 'Private-Deemed' },
  { name: 'Amity University', location: 'Noida / Jaipur / Mumbai', type: 'Private' },
  { name: 'Manipal Academy', location: 'Manipal / Bangalore', type: 'Private-Deemed' },
  { name: 'Chandigarh University', location: 'Mohali, Punjab', type: 'Private' },
  { name: 'LPU - Lovely Professional', location: 'Phagwara, Punjab', type: 'Private' },
  { name: 'Galgotias University', location: 'Greater Noida', type: 'Private' },
  { name: 'NIMS University', location: 'Jaipur, Rajasthan', type: 'Private' },
  { name: 'Quantum University', location: 'Roorkee, Uttarakhand', type: 'Private' },
  { name: 'Sharda University', location: 'Greater Noida', type: 'Private' },
  { name: 'Jain University', location: 'Bangalore, Karnataka', type: 'Private' },
  { name: 'REVA University', location: 'Bangalore, Karnataka', type: 'Private' },
];

export default function CollegesPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">Partner <span className="text-primary-600">Institutions</span></h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto lead">
            We work with India's leading universities and colleges to provide you with the best education and placement opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {colleges.map((college, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-primary-200 hover:bg-primary-50/30 transition-all"
            >
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary-600 mb-6 shadow-sm">
                <School size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{college.name}</h3>
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <MapPin size={14} className="mr-2 text-secondary" />
                <span>{college.location}</span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-500 mb-6">{college.type}</p>
              <Link 
                href="/apply" 
                className="text-primary-600 font-bold flex items-center text-sm group"
              >
                Apply for Admission <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mt-32 grid lg:grid-cols-2 gap-16 items-center">
           <div className="relative">
              <div className="absolute inset-0 bg-primary-600/5 blur-3xl rounded-full"></div>
              <div className="relative bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100">
                 <h2 className="text-3xl font-bold mb-8">Why Choose Partner Colleges?</h2>
                 <ul className="space-y-6">
                   <li className="flex items-start">
                     <CheckCircle2 size={24} className="mr-4 text-green-500 shrink-0" />
                     <div>
                       <h4 className="font-bold text-gray-900 mb-1">UGC & AICTE Recognized</h4>
                       <p className="text-gray-600 text-sm">All our partner institutions are fully accredited by the government.</p>
                     </div>
                   </li>
                   <li className="flex items-start">
                     <CheckCircle2 size={24} className="mr-4 text-green-500 shrink-0" />
                     <div>
                       <h4 className="font-bold text-gray-900 mb-1">Top Tier Placements</h4>
                       <p className="text-gray-600 text-sm">Direct connections with Fortune 500 companies for recruitment.</p>
                     </div>
                   </li>
                   <li className="flex items-start">
                     <CheckCircle2 size={24} className="mr-4 text-green-500 shrink-0" />
                     <div>
                       <h4 className="font-bold text-gray-900 mb-1">State-of-the-Art Labs</h4>
                       <p className="text-gray-600 text-sm">Modern campuses with fully equipped technology and research facilities.</p>
                     </div>
                   </li>
                 </ul>
              </div>
           </div>
           <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Need guidance on choosing the right college?</h2>
              <p className="text-lg text-gray-600 mb-10">Selecting the right university is the most important decision of your career. Our educational experts provide 1-on-1 counseling to analyze your needs, location preferences, and academic strengths.</p>
              <Link href="/contact" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-bold text-lg inline-block transition-all shadow-xl">Get Expert Advice</Link>
           </div>
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
