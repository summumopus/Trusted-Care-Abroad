import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  Mail, 
  Phone, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">MediTravel</h3>
            <p className="text-blue-200 mb-4">
              Connecting patients with world-class healthcare providers around the globe for affordable, high-quality medical procedures.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-200 hover:text-white">Home</Link></li>
              <li><Link to="/search" className="text-blue-200 hover:text-white">Find Clinics</Link></li>
              <li><Link to="/faq" className="text-blue-200 hover:text-white">FAQs</Link></li>
              <li><a href="#" className="text-blue-200 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Procedures</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white">Dental Implants</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Hip Replacement</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Lasik Eye Surgery</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Rhinoplasty</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">IVF Treatment</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:info@meditravel.com" className="text-blue-200 hover:text-white">info@meditravel.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:+1234567890" className="text-blue-200 hover:text-white">+1 (234) 567-890</a>
              </li>
              <li className="mt-4">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-900 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <MessageSquare size={16} className="mr-2" />
                  Live Chat Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              &copy; {new Date().getFullYear()} MediTravel. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-blue-200 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-blue-200 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-blue-200 hover:text-white text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;