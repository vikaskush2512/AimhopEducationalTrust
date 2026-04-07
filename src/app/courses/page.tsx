"use client";

import { motion } from 'framer-motion';
import { BookOpen, Clock, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const courses = [
  {
    id: 1,
    name: 'B.Tech - Computer Science',
    duration: '4 Years',
    eligibility: '12th (PCM) with 60%+',
    description: 'Specialization in AI, ML, and Data Science. High demand and high-paying jobs.',
  },
  {
    id: 2,
    name: 'MBA / PGDM',
    duration: '2 Years',
    eligibility: 'Any Graduation with 50%+',
    description: 'Transform your leadership skills with our premium business management programs.',
  },
  {
    id: 3,
    name: 'BCA / MCA',
    duration: '3 Years / 2 Years',
    eligibility: '12th (Maths) / Graduation',
    description: 'Perfect for building a strong foundation in software development and applications.',
  },
  {
    id: 4,
    name: 'BBA / B.Com',
    duration: '3 Years',
    eligibility: '12th (Any Stream)',
    description: 'Ideal courses for management and finance aspirants looking for early career starts.',
  },
  {
    id: 5,
    name: 'B.Pharma',
    duration: '4 Years',
    eligibility: '12th (PCB/PCM) with 50%+',
    description: 'Join the booming pharmaceutical industry with our top-tier research facilities.',
  },
  {
    id: 6,
    name: 'Law (BA LLB / LLB)',
    duration: '5 Years / 3 Years',
    eligibility: '12th / Graduation',
    description: 'Comprehensive legal education with exposure to moot conferences and legal aid.',
  },
];

export default function CoursesPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 sm:text-5xl">
            Explore Our <span className="text-primary-600">Premium Courses</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Find the right path to your dream career. We partner with the best universities to offer cutting-edge programs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="p-8">
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-6">
                  <BookOpen size={30} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.name}</h3>
                <p className="text-gray-600 mb-6 line-clamp-2">{course.description}</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-500">
                    <Clock size={20} className="mr-3 text-secondary" />
                    <span><strong>Duration:</strong> {course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Users size={20} className="mr-3 text-secondary" />
                    <span><strong>Eligibility:</strong> {course.eligibility}</span>
                  </div>
                </div>

                <Link
                  href="/apply"
                  className="block w-full text-center py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold transition-transform transform active:scale-95 shadow-md"
                >
                  Apply Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 bg-primary-900 rounded-[3rem] p-8 lg:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
          <h2 className="text-3xl font-bold mb-6">Can't find what you're looking for?</h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Our expert counselors are ready to help you navigate through 500+ programs to find your perfect match.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-primary-900 rounded-full font-bold text-lg hover:bg-primary-50 transition-colors shadow-lg"
          >
            Get Free Counseling
          </Link>
        </div>
      </div>
    </div>
  );
}
