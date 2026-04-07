"use client";

import { BookOpen, GraduationCap, Users, ArrowRight, CheckCircle2, Quote, UserCircle2, Target, Eye, Heart, Cpu, Briefcase, Code2, LineChart, Stethoscope, Scale } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import BannerSlider from '@/components/BannerSlider';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Dynamic Banner Slider Section */}
      <BannerSlider />

      {/* Slogan Section */}
      <div className="bg-primary-600 py-6 overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[1, 2, 3].map((_, idx) => (
            <div key={idx} className="flex shrink-0 items-center">
              <span className="mx-8 font-bold text-white text-xl md:text-2xl shadow-sm">
                ✨ Your Gateway to Premium Education & High Scholarships.
              </span>
              <span className="mx-8 font-bold text-white text-xl md:text-2xl shadow-sm">
                🎓 Expert Counseling. 100% Admission Support.
              </span>
              <span className="mx-8 font-bold text-white text-xl md:text-2xl shadow-sm">
                🚀 10,000+ Students Placed in Top Universities.
              </span>
              <span className="mx-8 font-bold text-white text-xl md:text-2xl shadow-sm">
                💰 Over ₹50 Cr+ Scholarships Awarded.
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-primary-50 text-primary-600 px-4 py-2 rounded-full font-bold text-sm mb-6">
                WHO WE ARE
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary-700 mb-6 leading-tight">
                Empowering Your Academic Journey <br />
                <span className="text-secondary">Since 2014.</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-10">
                <p>
                  At <strong className="text-gray-900 font-bold">Aimhop Educational Trust</strong>, we are committed to bridging the gap between talented students and top-tier universities.
                  We believe that financial constraints should never stand in the way of premium education.
                </p>
                <p>
                  Our team of expert counselors specializes in identifying merit and facilitating up to 100% scholarships
                  across diverse fields including Engineering, Management, and Medicine.
                </p>
              </div>

              {/* Founder Highlight */}
              <div className="flex items-start p-6 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm">
                <div className="relative shrink-0 mt-1">
                  <div className="w-20 h-20 rounded-full border-4 border-primary-100 flex items-center justify-center bg-white text-primary-600 overflow-hidden shadow-inner">
                    <UserCircle2 size={72} strokeWidth={1} />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 border-2 border-white rounded-full"></div>
                </div>
                <div className="ml-6 flex flex-col justify-center">
                  <h4 className="text-xl font-extrabold text-primary-700">OP Yadav (Ex Army)</h4>
                  <p className="text-secondary font-semibold mb-3">Founder & CEO</p>
                  <Link href="/about" className="self-start flex items-center bg-secondary hover:bg-orange-600 text-white font-medium px-5 py-2 rounded-full transition-colors text-sm shadow-sm hover:shadow-md group">
                    Know More <ArrowRight size={16} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Right: Overlapping Circular Images (Triangular Layout) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative min-h-[400px] lg:min-h-[500px] flex items-center justify-center lg:justify-end"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>

              <div className="relative w-[300px] h-[320px] sm:w-[400px] sm:h-[420px]">
                {/* Top/Back Image */}
                <img
                  src="/banners/banner1.png"
                  alt="Student Success 1"
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-44 h-44 sm:w-60 sm:h-60 rounded-full border-8 border-white object-cover shadow-2xl z-10 hover:z-40 transition-all duration-300 hover:scale-105"
                />

                {/* Bottom Left Image */}
                <img
                  src="/banners/banner2.png"
                  alt="Student Success 2"
                  className="absolute bottom-0 left-0 w-44 h-44 sm:w-60 sm:h-60 rounded-full border-8 border-white object-cover shadow-2xl z-20 hover:z-40 transition-all duration-300 hover:scale-105"
                />

                {/* Bottom Right Image */}
                <img
                  src="/banners/banner3.png"
                  alt="Student Success 3"
                  className="absolute bottom-6 right-0 w-40 h-40 sm:w-52 sm:h-52 rounded-full border-8 border-white object-cover shadow-2xl z-30 hover:z-40 transition-all duration-300 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full Width Image Section */}
      <section className="w-full relative h-[250px] md:h-[300px] lg:h-[350px]">
        <img
          src="/banners/banner2.png"
          alt="Premium Education Experience"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center px-4"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-wide shadow-sm">
              Ignite Your Potential
            </h2>
            <p className="text-lg md:text-xl text-primary-100 font-medium drop-shadow-md">
              Join the thousands who chose Aimhop to reach their dreams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100 py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-700 leading-tight mb-6">
                Get Admission with <br />
                <span className="text-secondary font-black">Scholarship Support</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                Unlock your potential. We guide you to the top colleges with up to 100% scholarships, expert counseling, and end-to-end admission assistance.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/apply" className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-center transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
                  Apply Now
                </Link>
                <Link href="/contact" className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-semibold text-center transition-all shadow-sm hover:shadow-md text-lg">
                  Get Free Counseling
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-400 to-secondary rounded-[3rem] blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-100 flex flex-col items-center justify-center min-h-[400px]">
                <GraduationCap size={120} className="text-primary-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-800">Your Future Starts Here.</h3>
                <p className="text-gray-500 mt-2 text-center">Join thousands of successful students.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Value Section */}
      <section className="py-20 bg-white border-y border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-[#e0f2fe] p-8 rounded-3xl shadow-md border border-sky-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To democratize high-quality higher education by connecting talented students with top universities and providing unmatched scholarships.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-[#e0f2fe] p-8 rounded-3xl shadow-md border border-sky-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To be the most trusted educational bridge, fostering an ecosystem where every deserving candidate is skilled, mentored, and successfully placed.
              </p>
            </motion.div>

            {/* Value */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-[#e0f2fe] p-8 rounded-3xl shadow-md border border-sky-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Integrity, transparency, and relentless dedication to student success. We believe in ethical counseling without false promises.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 100% Scholarship Image Banner */}
      <div className="w-full relative h-[150px] md:h-[200px] overflow-hidden shadow-inner group mt-8">
        {/* Image Background - User can change this src path to update the banner image */}
        <img
          src="/banners/banner3.png"
          alt="100% Scholarship Background"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Dark Overlay & Text Content */}
        <div className="absolute inset-0 bg-black/60 flex flex-col md:flex-row items-center justify-center gap-4 px-4 text-center">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce shadow-lg mt-2 md:mt-0">
            <span className="text-xl md:text-2xl">🎓</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-wider drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Unlock Up To <span className="text-yellow-300">100%</span> Scholarship
          </h2>
        </div>
      </div>

      {/* Success Story Section */}
      <section className="py-8 bg-blue-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

            {/* Left side: Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2 relative"
            >
              {/* Decorative blobs behind image */}
              <div className="absolute -inset-4 bg-blue-200 rounded-full blur-3xl opacity-40"></div>

              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white group">
                <img
                  src="/banners/banner1.png"
                  alt="Student Success Transformation"
                  className="w-full h-[200px] sm:h-[280px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full font-bold text-blue-600 shadow-md flex items-center gap-2">
                  <span className="text-yellow-500 text-lg">★</span> Featured Story
                </div>
              </div>
            </motion.div>

            {/* Right side: Text & Button */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              <div className="inline-block text-blue-600 font-bold bg-blue-100 px-4 py-1.5 rounded-full mb-4 text-sm uppercase tracking-wider">
                Real Results
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary-700 mb-4 leading-tight">
                Success Story: <br />
                <span className="text-secondary">Inspiring Transformation</span>
              </h2>

              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Witness how ambition meets opportunity. Confronted with significant financial hurdles and overwhelming competition, our student navigated the complexities of admission with Aimhop's dedicated mentorship.
              </p>

              <p className="text-base text-gray-600 leading-relaxed mb-6">
                Securing a highly coveted <strong className="text-gray-900 font-bold">100% scholarship</strong>, they are now thriving at one of the country's most prestigious universities. Their journey proves that with the right guidance, the impossible is just the beginning.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 bg-secondary hover:bg-orange-600 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 w-max"
              >
                Read More
                <ArrowRight size={14} />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Scholarship Slogan Image Section */}
      <div className="w-full relative h-[200px] md:h-[280px] overflow-hidden group">
        {/* Background Image - change this src to update */}
        <img
          src="/banners/banner4.png"
          alt="AimHop Scholarship Slogan"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 flex items-center justify-center px-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white text-center leading-snug drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)]">
            AimHop ki Scholarship Loan nahi hai, <br className="hidden md:block" />
            <span className="text-yellow-300">Isko wapas nahi karna hoga.</span>
          </h2>
        </div>
      </div>

      {/* Trusted by Students Section */}
      <section className="pt-16 pb-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4">
              AimHop Educational Trust – <span className="text-primary-600">Trusted by Students Across India</span>
            </h2>
            <p className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto">
              Don&apos;t Just Take Our Word for It. Delve into the Numbers and Witness the Excellence for Yourself!
            </p>
          </div>

          {/* Four Stat Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-[#e0f2fe] rounded-2xl p-6 text-center shadow-md border border-sky-200 hover:shadow-lg transition-all"
            >
              <p className="text-4xl md:text-5xl font-black text-primary-700 mb-2">25K+</p>
              <p className="text-gray-700 font-semibold text-sm md:text-base">Happy Students</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-[#e0f2fe] rounded-2xl p-6 text-center shadow-md border border-sky-200 hover:shadow-lg transition-all"
            >
              <p className="text-4xl md:text-5xl font-black text-primary-700 mb-2">221+</p>
              <p className="text-gray-700 font-semibold text-sm md:text-base">Associates Across<br />India & Nepal</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-[#e0f2fe] rounded-2xl p-6 text-center shadow-md border border-sky-200 hover:shadow-lg transition-all"
            >
              <p className="text-4xl md:text-5xl font-black text-primary-700 mb-2">1849+</p>
              <p className="text-gray-700 font-semibold text-sm md:text-base">Coordinators Across<br />India & Nepal</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-[#e0f2fe] rounded-2xl p-6 text-center shadow-md border border-sky-200 hover:shadow-lg transition-all"
            >
              <p className="text-4xl md:text-5xl font-black text-primary-700 mb-2">100+</p>
              <p className="text-gray-700 font-semibold text-sm md:text-base">Top Institutions</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Apply for Scholarship CTA */}
      <div className="py-4 bg-white flex items-center justify-center">
        <Link
          href="/apply"
          className="bg-secondary hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          Apply for Scholarship
        </Link>
      </div>

      {/* Limited Seats Image Section with Sticker */}
      <div className="w-full relative h-[220px] md:h-[300px] overflow-hidden group">
        {/* Background Image */}
        <img
          src="/banners/banner1.png"
          alt="Limited Seats Available"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>

        {/* Sticker Badge - Top Right */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20">
          <div className="relative">
            <div className="bg-red-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300 border-4 border-yellow-400 animate-pulse">
              <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-yellow-300">⚡ Hurry Up!</p>
              <p className="text-lg md:text-2xl font-black uppercase">Limited Seats</p>
              <p className="text-[10px] md:text-xs font-semibold text-red-200">Admissions Closing Soon</p>
            </div>
          </div>
        </div>

        {/* Center Text */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-start px-6 md:px-16 z-10">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-3 drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)]">
              Don&apos;t Miss Out!
            </h2>
            <p className="text-base md:text-xl text-gray-200 font-medium max-w-lg drop-shadow-md">
              Seats are filling fast. Secure your spot with a scholarship before it&apos;s too late.
            </p>
            <Link
              href="/apply"
              className="inline-block mt-5 bg-secondary hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all"
            >
              Grab Your Seat Now →
            </Link>
          </div>
        </div>
      </div>

      {/* Educational Pathways Section */}
      <section className="pt-20 pb-8 bg-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-primary-700 mb-4"
            >
              Educational Pathways: <span className="text-secondary">Empowering Futures</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Students receive full tuition coverage for the entire duration of these courses.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'After 10th', img: '/banners/after_10th.png' },
              { title: 'After 12th', img: '/banners/after_12th.png' },
              { title: 'After Graduation', img: '/banners/after_graduation.png' }
            ].map((path, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative h-[260px] max-w-[300px] mx-auto w-full rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
              >
                <img
                  src={path.img}
                  alt={path.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-all duration-300"></div>
                
                <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col items-center text-center">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 transition-transform duration-300">
                    {path.title}
                  </h3>
                  <Link
                    href="/apply"
                    className="bg-secondary hover:bg-orange-600 text-white px-5 py-1.5 rounded-full font-bold shadow-lg transition-all duration-300 text-xs md:text-sm"
                  >
                    Click here
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* State Universities Logo Slider */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#f0f9ff_0%,_transparent_70%)] opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 relative z-10">
          <h2 className="text-2xl md:text-3xl font-black text-primary-700 uppercase tracking-tight text-center">
            List of <span className="text-secondary font-black">state universities</span>
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-3 rounded-full opacity-80"></div>
        </div>

        <div className="relative z-10">
          {/* Logo Slider Track */}
          <div className="flex overflow-hidden group">
            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
              className="flex whitespace-nowrap py-6"
            >
              {/* Duplicate the array to create a seamless loop */}
              {[1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2].map((logoNum, idx) => (
                <div 
                  key={idx} 
                  className="mx-4 w-36 h-24 md:w-48 md:h-28 bg-white rounded-2xl flex items-center justify-center p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 grayscale hover:grayscale-0 cursor-pointer hover:-translate-y-2 group/logo"
                >
                  <img
                    src={`/banners/univ${logoNum}.png`}
                    alt={`University Logo ${idx}`}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover/logo:scale-110"
                  />
                </div>
              ))}
              {/* Duplicate set for infinite effect */}
              {[1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2].map((logoNum, idx) => (
                <div 
                  key={`dup-${idx}`} 
                  className="mx-4 w-36 h-24 md:w-48 md:h-28 bg-white rounded-2xl flex items-center justify-center p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 grayscale hover:grayscale-0 cursor-pointer hover:-translate-y-2 group/logo"
                >
                  <img
                    src={`/banners/univ${logoNum}.png`}
                    alt={`University Logo duplicated ${idx}`}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover/logo:scale-110"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="pt-8 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-primary-700 mb-3 uppercase tracking-tight">
              Top Featured <span className="text-secondary font-black">Courses</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
              Choose from our curated selection of high-impact programs designed for the modern career landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: 'B.Tech (CSE, AI & ML, Data Science)', 
                desc: 'Master future-ready technologies with high-demand specialization and placement support.',
                icon: Cpu,
                badge: 'Popular Choice',
                colorClass: 'text-blue-600',
                bgClass: 'bg-blue-50',
                borderClass: 'border-blue-100'
              },
              { 
                title: 'MBA / PGDM', 
                desc: 'Accelerate your career with leadership skills and industry-aligned management programs.',
                icon: Briefcase,
                badge: 'High Placement',
                colorClass: 'text-indigo-600',
                bgClass: 'bg-indigo-50',
                borderClass: 'border-indigo-100'
              },
              { 
                title: 'BCA / MCA', 
                desc: 'Expertise in software development, cloud computing, and cutting-edge IT frameworks.',
                icon: Code2,
                badge: 'Trending',
                colorClass: 'text-emerald-600',
                bgClass: 'bg-emerald-50',
                borderClass: 'border-emerald-100'
              },
              { 
                title: 'BBA / B.Com', 
                desc: 'Build a strong foundation in business analytics, commerce, and financial management.',
                icon: LineChart,
                badge: 'Fastest Growing',
                colorClass: 'text-amber-600',
                bgClass: 'bg-amber-50',
                borderClass: 'border-amber-100'
              },
              { 
                title: 'B.Pharma', 
                desc: 'Prepare for a rewarding career in pharma-sciences, healthcare, and research excellence.',
                icon: Stethoscope,
                badge: 'Healthcare',
                colorClass: 'text-rose-600',
                bgClass: 'bg-rose-50',
                borderClass: 'border-rose-100'
              },
              { 
                title: 'Law (BA LLB / BBA LLB)', 
                desc: 'Achieve legal excellence with top-tier faculty and comprehensive moot court training.',
                icon: Scale,
                badge: 'Prestigious',
                colorClass: 'text-slate-600',
                bgClass: 'bg-slate-50',
                borderClass: 'border-slate-100'
              }
            ].map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col group relative overflow-hidden"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className={`w-10 h-10 shrink-0 ${course.bgClass} ${course.colorClass} rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-inner`}>
                    <course.icon size={20} strokeWidth={2.5} />
                  </div>
                  <div>
                    <span className={`inline-block px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest mb-1 ${course.bgClass} ${course.colorClass} border ${course.borderClass}`}>
                      {course.badge}
                    </span>
                    <h3 className="text-base font-black text-gray-900 group-hover:text-primary-600 transition-colors tracking-tight leading-tight uppercase">
                      {course.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-500 text-[11px] mb-4 leading-normal font-medium line-clamp-2">
                  {course.desc}
                </p>
                
                <div className="pt-3 border-t border-gray-50 mt-auto">
                  <Link 
                    href="/apply" 
                    className={`inline-flex items-center font-bold text-[11px] uppercase tracking-wider transition-all gap-1 group-hover:gap-2 ${course.colorClass}`}
                  >
                    Apply Now <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-end mt-8">
            <Link 
              href="/courses" 
              className="inline-flex items-center bg-secondary hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
            >
              Explore All <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Scholarship Highlight */}
      <section className="py-24 bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Up to 100% Scholarship for Meritorious Students</h2>
              <p className="text-primary-100 text-lg mb-8 leading-relaxed">
                We believe money shouldn't stop your education. Our trust provides merit-based, sports-based, and need-based financial assistance to ensure you fulfill your dreams.
              </p>
              <ul className="space-y-4 mb-8">
                {['Direct Admission Support', 'No Hidden Processing Fees', 'Accommodation Assistance', 'Education Loan Guidance'].map((item, i) => (
                  <li key={i} className="flex items-center text-primary-50">
                    <CheckCircle2 className="text-secondary mr-3 w-6 h-6 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/scholarships" className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg inline-block transition-all transform hover:-translate-y-1 shadow-lg">
                Check Eligibility
              </Link>
            </div>
            {/* Visual */}
            <div className="relative">
              <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-8 transform rotate-3">
                <h3 className="text-2xl font-bold text-white mb-4">Scholarship Fast-Track</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="text-sm text-primary-200">Step 1</p>
                    <p className="font-semibold text-white">Fill out the Application Form</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="text-sm text-primary-200">Step 2</p>
                    <p className="font-semibold text-white">Appear for simple Counseling</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="text-sm text-primary-200">Step 3</p>
                    <p className="font-semibold text-white">Get Scholarship Letter & Admits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
