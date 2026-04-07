"use client";

import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const stats = [
    { label: 'Successful Admits', value: '10,000+' },
    { label: 'Scholarships Awarded', value: '₹50 Cr+' },
    { label: 'Partner Colleges', value: '500+' },
    { label: 'Years of Excellence', value: '10+' },
  ];

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="bg-primary-900 text-white py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary font-bold tracking-widest uppercase text-sm mb-4"
          >
            Empowering Your Future
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-extrabold sm:text-6xl mb-8"
          >
            About Aimhop Educational Trust
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed"
          >
            We are more than just an admission partner. We are your dedicated guides, ensuring every student accesses premium education and high scholarships, regardless of their background.
          </motion.p>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100"
          >
            <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-3xl flex items-center justify-center mb-8">
              <Target size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              To democratize high-quality higher education by connecting talented students with top universities and facilitating massive scholarships through transparent and ethical counseling.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100"
          >
            <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-3xl flex items-center justify-center mb-8">
              <Eye size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              To be the most trusted educational bridge in the country, fostering an ecosystem where every deserving candidate is skilled, mentored, and placed in a rewarding career.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary-600 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center text-white">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="text-5xl font-extrabold mb-2">{stat.value}</p>
                <p className="text-primary-100 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Choose Aimhop?</h2>
            <div className="space-y-6">
              {[
                { title: 'Personalized Approach', desc: 'Every student is unique. We provide custom paths tailored for your specific goals.' },
                { title: 'Transparency Guaranteed', desc: 'No hidden processing fees or false promises. We maintain absolute integrity.' },
                { title: 'Wide Selection', desc: 'Over 500+ premium partner colleges and universities to choose from.' },
                { title: 'Continuous Support', desc: 'From admission till the first day of your college, we are right beside you.' },
              ].map((item, i) => (
                <div key={i} className="flex">
                  <CheckCircle2 size={24} className="text-primary-600 mr-4 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-primary-900 rounded-[3rem] p-12 text-white relative z-10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Impacting Lives</h3>
              <p className="text-primary-100 mb-8">Our trust has consistently worked towards providing education to underprivileged students, having supported over 5,000+ students with 100% financial aid.</p>
              <Link href="/apply" className="inline-block bg-white text-primary-900 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">Apply for Scholarship</Link>
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
