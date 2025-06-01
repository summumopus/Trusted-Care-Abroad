import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import { useAppContext } from '../context/AppContext';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { performSearch } = useAppContext();

  const handleSearch = (query: string) => {
    performSearch(query);
    navigate('/search');
  };

  const handleFilterClick = (filter: string) => {
    performSearch(filter);
    navigate('/search');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">MediTravel</h1>
        
        <div className="mb-6">
          <SearchBar 
            onSearch={handleSearch} 
            placeholder="Search for medical procedures, clinics, or locations..."
          />
        </div>
        
        <div className="flex flex-wrap justify-center gap-2">
          {[
            'Dental', 
            'Orthopedic', 
            'Cosmetic', 
            'Cardiac', 
            'Ophthalmology', 
            'Fertility'
          ].map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className="px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;