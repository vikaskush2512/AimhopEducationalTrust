import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="text-3xl font-black text-white mb-6 block">
              Aimhop<span className="text-secondary">.</span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              Empowering students to achieve their dreams with expert counseling, scholarship support, and admission guidance to top universities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 text-white font-bold flex items-center justify-center hover:bg-secondary transition-colors">
                F
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 text-white font-bold flex items-center justify-center hover:bg-secondary transition-colors">
                T
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 text-white font-bold flex items-center justify-center hover:bg-secondary transition-colors">
                I
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 text-white font-bold flex items-center justify-center hover:bg-secondary transition-colors">
                L
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/courses" className="hover:text-white transition-colors">Courses</Link></li>
              <li><Link href="/scholarships" className="hover:text-white transition-colors">Scholarships</Link></li>
              <li><Link href="/colleges" className="hover:text-white transition-colors">Top Colleges</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Career Counseling</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Admission Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Scholarship Guidance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Education Loan</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin className="flex-shrink-0 mt-1" size={20} />
                <span>123 Education Hub, Sector 45, New Delhi, India 110001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="flex-shrink-0" size={20} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="flex-shrink-0" size={20} />
                <span>admissions@aimhop.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Aimhop Educational Trust. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
