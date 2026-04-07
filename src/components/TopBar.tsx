"use client";

import {
  Phone,
  Mail,
  BookOpen,
  Users,
  Handshake,
  Briefcase
} from 'lucide-react';
import Link from 'next/link';
import { useScroll } from '../hooks/useScroll';

const TopBar = () => {
  const isScrolled = useScroll(20);

  return (
    <div className={`bg-slate-50 text-slate-700 py-1.5 px-4 sm:px-6 lg:px-8 border-b border-slate-200 text-sm sm:text-base fixed top-0 w-full z-[60] h-12 hidden md:flex items-center shadow-sm whitespace-nowrap overflow-hidden font-semibold transition-all duration-300 ${isScrolled ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      }`}>
      <div className="w-full flex justify-between items-center font-semibold">
        {/* Left: Contact Info */}
        <div className="flex items-center space-x-4 lg:space-x-6 shrink-0">
          <a href="tel:+919876543210" className="flex items-center hover:text-primary-700 transition-colors group shrink-0">
            <span className="w-8 h-8 rounded-full bg-slate-100 shadow-sm flex items-center justify-center mr-2 group-hover:bg-secondary group-hover:text-white transition-all transform group-hover:scale-110 shrink-0">
              <Phone size={14} className="text-secondary group-hover:text-inherit" />
            </span>
            <span className="tracking-wide text-primary-700">9876543210</span>
          </a>
          <a href="mailto:admissions@aimhop.com" className="flex items-center hover:text-primary-700 transition-colors group shrink-0">
            <span className="w-8 h-8 rounded-full bg-slate-100 shadow-sm flex items-center justify-center mr-2 group-hover:bg-secondary group-hover:text-white transition-all transform group-hover:scale-110 shrink-0">
              <Mail size={14} className="text-secondary group-hover:text-inherit" />
            </span>
            <span className="tracking-wide text-primary-700">admissions@aimhop.com</span>
          </a>
        </div>

        {/* Center: Extra Links */}
        <div className="hidden lg:flex items-center space-x-2 xl:space-x-4 mx-2">
          <Link href="/blog" className="flex items-center hover:text-primary-700 transition-colors group px-2 py-1.5 rounded-full hover:bg-white hover:shadow-md transition-all shrink-0">
            <BookOpen size={14} className="mr-1.5 text-primary-500 shrink-0" />
            <span>Blog Spot</span>
          </Link>
          <Link href="/associates" className="flex items-center hover:text-primary-700 transition-colors group px-2 py-1.5 rounded-full hover:bg-white hover:shadow-md transition-all shrink-0">
            <Users size={14} className="mr-1.5 text-primary-500 shrink-0" />
            <span>Our Associate</span>
          </Link>
          <Link href="/coordination" className="flex items-center hover:text-primary-700 transition-colors group px-2 py-1.5 rounded-full hover:bg-white hover:shadow-md transition-all shrink-0">
            <Handshake size={14} className="mr-1.5 text-primary-500 shrink-0" />
            <span>Our Coordination</span>
          </Link>
          <Link href="/careers" className="flex items-center hover:text-primary-700 transition-colors group px-2 py-1.5 rounded-full hover:bg-white hover:shadow-md transition-all shrink-0">
            <Briefcase size={14} className="mr-1.5 text-primary-500 shrink-0" />
            <span>Our Career</span>
          </Link>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center space-x-2 shrink-0">
          <a href="#" className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-white shadow-sm border border-blue-50 flex items-center justify-center transition-all hover:scale-125 hover:rotate-6 active:scale-95 shrink-0" aria-label="Facebook">
            <img src="https://cdn.simpleicons.org/facebook/1877F2" alt="Facebook" className="w-4 h-4 lg:w-5 lg:h-5 object-contain" />
          </a>
          <a href="#" className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-white shadow-sm border border-blue-50 flex items-center justify-center transition-all hover:scale-125 hover:rotate-6 active:scale-95 shrink-0" aria-label="Twitter">
            <img src="https://cdn.simpleicons.org/x/000000" alt="Twitter" className="w-4 h-4 lg:w-5 lg:h-5 object-contain" />
          </a>
          <a href="#" className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-white shadow-sm border border-blue-50 flex items-center justify-center transition-all hover:scale-125 hover:rotate-6 active:scale-95 shrink-0" aria-label="Instagram">
            <img src="https://cdn.simpleicons.org/instagram/E4405F" alt="Instagram" className="w-4 h-4 lg:w-5 lg:h-5 object-contain" />
          </a>
          <a href="#" className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-white shadow-sm border border-blue-50 flex items-center justify-center transition-all hover:scale-125 hover:rotate-6 active:scale-95 shrink-0" aria-label="YouTube">
            <img src="https://cdn.simpleicons.org/youtube/FF0000" alt="YouTube" className="w-4 h-4 lg:w-5 lg:h-5 object-contain" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
