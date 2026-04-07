"use client";

import { motion } from 'framer-motion';
import { Award, CheckCircle2, GraduationCap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ScholarshipsPage() {
  const scholarshipTypes = [
    {
      title: 'Merit-Based Scholarship',
      percentage: 'UP TO 100%',
      description: 'Awarded to students with exceptional academic records in 10th and 12th grades (above 90%+).',
    },
    {
      title: 'Entrance Test Based',
      percentage: 'UP TO 80%',
      description: 'Benefit based on your performance in standard entrance exams like JEE, NEET, or CAT.',
    },
    {
      title: 'Early Bird Scholarship',
      percentage: 'UP TO 20%',
      description: 'Enroll before the early deadline to secure guaranteed financial support.',
    },
    {
      title: 'Needs-Based Support',
      percentage: 'VARIABLE',
      description: 'Dedicated financial aid for students from economically weaker sections.',
    },
    {
      title: 'Sports & Talents',
      percentage: 'UP TO 50%',
      description: 'Recognizing national and state-level achievements in sports, arts, and more.',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-primary-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-extrabold sm:text-6xl mb-6">Edu-Scholarship Program</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              We empower students by making education affordable. Get up to 100% scholarships to the top colleges across the country.
            </p>
            <Link
              href="/apply"
              className="bg-secondary hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg inline-block transition-all transform hover:-translate-y-1 shadow-2xl"
            >
              Check My Eligibility
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Types */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">Available Financial Support</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {scholarshipTypes.map((type, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 group hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <Award size={24} />
              </div>
              <p className="text-secondary font-bold text-lg mb-2">{type.percentage}</p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{type.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{type.description}</p>
              <Link href="/apply" className="text-primary-600 font-semibold flex items-center hover:translate-x-1 transition-transform">
                Apply for {type.title.split(' ')[0]} <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-[3rem] p-8 lg:p-20 overflow-hidden relative">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">How to Avail Your Scholarship?</h2>
                <div className="space-y-10">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-6 shrink-0 shadow-lg">1</div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Fill Online Form</h4>
                      <p className="text-gray-600">Provide your basic academic details and preferred courses via our simple portal.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-6 shrink-0 shadow-lg">2</div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Counseling & Evaluation</h4>
                      <p className="text-gray-600">Meet our counselors for a 1-to-1 session to verify your eligibility for high scholarships.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-6 shrink-0 shadow-lg">3</div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Instant Admission & Letter</h4>
                      <p className="text-gray-600">Get your official scholarship letter and confirm your seat in your dream college instantly.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-primary-600 rounded-[2rem] p-12 text-white shadow-2xl relative z-10">
                   <GraduationCap size={64} className="mb-6 opacity-80" />
                   <h3 className="text-2xl font-bold mb-4">Aimhop Trust Advantage</h3>
                   <ul className="space-y-4">
                     <li className="flex items-center"><CheckCircle2 className="text-secondary mr-3" size={20} /> Verified Colleges Only</li>
                     <li className="flex items-center"><CheckCircle2 className="text-secondary mr-3" size={20} /> Direct Admission Assistance</li>
                     <li className="flex items-center"><CheckCircle2 className="text-secondary mr-3" size={20} /> No Registration Fees</li>
                   </ul>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary rounded-full opacity-20 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
