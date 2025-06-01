import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, Heart, MessageSquare, User } from 'lucide-react';
import SearchBar from './SearchBar';
import { useAppContext } from '../context/AppContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const navigate = useNavigate();
  const { performSearch } = useAppContext();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (query: string) => {
    performSearch(query);
    navigate('/search');
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-blue-600 text-2xl font-bold">MediTravel</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/search" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Find Clinics</Link>
              <Link to="/faq" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">FAQs</Link>
              <div className="ml-2 w-64">
                <SearchBar onSearch={handleSearch} placeholder="Search procedures, clinics, locations..." />
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            {!isSearchExpanded ? (
              <>
                <button
                  type="button"
                  className="p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
                  onClick={() => setIsSearchExpanded(true)}
                >
                  <Search size={20} />
                </button>
                <button
                  type="button"
                  className="p-2 ml-3 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
                  onClick={toggleMenu}
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </>
            ) : (
              <button
                type="button"
                className="p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
                onClick={() => setIsSearchExpanded(false)}
              >
                <X size={20} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile expanded search */}
      {isSearchExpanded && (
        <div className="md:hidden px-4 pb-3">
          <SearchBar onSearch={handleSearch} placeholder="Search procedures, clinics, locations..." />
        </div>
      )}

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link to="/search" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Find Clinics
            </Link>
            <Link to="/faq" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQs
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;