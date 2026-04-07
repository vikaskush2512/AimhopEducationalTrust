"use client";

import Link from 'next/link';
import { Menu, X, ChevronDown, Rocket, Users, BookOpen, GraduationCap, Settings, Image as ImageIcon, PhoneCall, Briefcase, LayoutDashboard, Globe, ShieldCheck, CreditCard, PlayCircle, HeartHandshake } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScroll } from '../hooks/useScroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const isScrolled = useScroll(20);
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside the navbar
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveLink(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'About Us',
      path: '/about',
      items: [
        { name: 'Our Identity', desc: 'Mission and primary goals', icon: HeartHandshake },
        { name: 'Leadership Team', desc: 'Industry experts', icon: Users },
        { name: 'Achievements', desc: 'Platform milestones', icon: GraduationCap },
      ]
    },
    {
      name: 'Course',
      path: '/courses',
      items: [
        { name: 'Engineering', desc: 'BE/B.Tech programs', icon: BookOpen },
        { name: 'Medical Science', desc: 'MBBS/BDS degrees', icon: GraduationCap },
        { name: 'Aviation', desc: 'Flight & ground training', icon: Globe },
        { name: 'Management', desc: 'MBA/BBA streams', icon: Briefcase },
      ]
    },
    {
      name: 'University',
      path: '/universities',
      items: [
        { name: 'Top Indian Colleges', desc: 'Premier Govt/Private', icon: Globe },
        { name: 'Overseas Study', desc: 'International hubs', icon: Globe },
        { name: 'Partner Institutes', desc: 'Exclusive tie-ups', icon: HeartHandshake },
      ]
    },
    {
      name: 'Service',
      path: '/services',
      items: [
        { name: 'Counseling', desc: 'Free career guidance', icon: PhoneCall },
        { name: 'Scholarship Aid', desc: 'Financial support guide', icon: CreditCard },
        { name: 'Visa Assistance', desc: 'Travel documentation', icon: Globe },
      ]
    },
    {
      name: 'Registration',
      path: '/apply',
      items: [
        { name: 'Candidate Portal', desc: 'Student application log', icon: Users },
        { name: 'Fee Structure', desc: 'Component breakdown', icon: CreditCard },
        { name: 'Application Track', desc: 'Real-time status', icon: LayoutDashboard },
      ]
    },
    {
      name: 'Gallery',
      path: '/gallery',
      items: [
        { name: 'Photo Highlights', desc: 'Campus life events', icon: ImageIcon },
        { name: 'Video Library', desc: 'Virtual tours', icon: PlayCircle },
        { name: 'Testimonials', desc: 'Student success stories', icon: Users },
      ]
    },
    {
      name: 'Contact Us',
      path: '/contact',
      items: [
        { name: 'Branch Locator', desc: 'Find nearest center', icon: Globe },
        { name: 'WhatsApp Bot', desc: '24/7 automated support', icon: PhoneCall },
        { name: 'Support Hotline', desc: 'Call our experts', icon: PhoneCall },
      ]
    },
    {
      name: 'Our Wing',
      path: '/wings',
      items: [
        { name: 'Aimhop Global', desc: 'International operations', icon: Globe },
        { name: 'Skill Academy', desc: 'Vocational training', icon: BookOpen },
        { name: 'Placement Cell', desc: 'Corporate hiring', icon: Briefcase },
      ]
    },
  ];

  const Dropdown = ({ links }: { links: any[] }) => (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-64 bg-white rounded-xl shadow-xl border border-blue-100 p-2 z-[100] grid grid-cols-1 gap-0.5 overflow-hidden"
    >
      {/* Decorative arrow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[6px] border-[6px] border-transparent border-b-white"></div>

      {links.map((item) => (
        <Link
          key={item.name}
          href="#"
          className="flex items-center p-1.5 rounded-lg hover:bg-slate-50 transition-all group"
        >
          <div className="w-7 h-7 rounded bg-slate-100/30 flex items-center justify-center mr-3 group-hover:bg-primary-700 group-hover:text-white transition-colors">
            <item.icon size={14} className="text-primary-700 group-hover:text-white" />
          </div>
          <span className="text-[13px] font-bold text-slate-800 group-hover:text-primary-700 tracking-tight">{item.name}</span>
        </Link>
      ))}
    </motion.div>
  );

  return (
    <nav ref={navRef} className={`fixed w-full z-50 glass transition-all duration-300 ${isScrolled
      ? 'top-0 shadow-md bg-white/90 backdrop-blur-md'
      : 'md:top-12 top-0 shadow-sm'
      }`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <img
                src="/aimhoplogo.jpeg"
                alt="Aimhop Logo"
                className="h-14 lg:h-18 w-auto object-contain hover:scale-105 transition-transform"
              />
            </Link>
          </div>

          <div className="hidden xl:flex items-center space-x-1 xl:space-x-3 h-full">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative h-full flex items-center px-1.5"
              >
                {link.items ? (
                  <button
                    onClick={() => setActiveLink(activeLink === link.name ? null : link.name)}
                    className="text-gray-700 hover:text-primary-600 font-bold text-[13px] xl:text-[14px] transition-all flex items-center py-2 px-1 rounded-md hover:bg-sky-50/50 whitespace-nowrap"
                  >
                    {link.name}
                    <ChevronDown size={14} className={`ml-1 transition-transform duration-300 ${activeLink === link.name ? 'rotate-180 text-primary-600' : 'text-gray-400'}`} />
                  </button>
                ) : (
                  <Link
                    href={link.path}
                    className="text-gray-700 hover:text-primary-600 font-bold text-[13px] xl:text-[14px] transition-all flex items-center py-2 px-1 rounded-md hover:bg-sky-50/50 whitespace-nowrap"
                  >
                    {link.name}
                  </Link>
                )}
                <AnimatePresence>
                  {link.items && activeLink === link.name && <Dropdown links={link.items} />}
                </AnimatePresence>
              </div>
            ))}
            <div className="pl-4">
              <Link
                href="/apply"
                className="bg-secondary hover:bg-orange-600 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                Apply Now
              </Link>
            </div>
          </div>

          <div className="xl:hidden flex items-center mr-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary-600 focus:outline-none p-2 bg-sky-50 rounded-lg"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-t border-gray-100 shadow-2xl max-h-[85vh] overflow-y-auto"
          >
            <div className="px-5 py-6 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-gray-50 last:border-0 pb-2 mb-2">
                  <div className="flex items-center justify-between py-3">
                    <Link
                      href={link.path}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-bold text-gray-900"
                    >
                      {link.name}
                    </Link>
                  </div>
                  {link.items && (
                    <div className="pl-4 bg-gray-50/50 rounded-xl p-1 gap-0.5 grid grid-cols-1">
                      {link.items.map((sub) => (
                        <Link
                          key={sub.name}
                          href="#"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center py-3 px-3 text-[14px] font-bold text-gray-700 hover:text-primary-600 hover:bg-white rounded-lg transition-all"
                        >
                          <sub.icon size={16} className="mr-3 text-primary-500" />
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href="/apply"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-secondary hover:bg-orange-600 text-white px-6 py-4 rounded-xl font-bold transition-all shadow-lg text-lg"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
