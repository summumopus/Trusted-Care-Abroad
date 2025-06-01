import React, { useState } from 'react';
import { Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { SearchFilters } from '../types';

interface SearchFiltersProps {
  filters: SearchFilters;
  onFilterChange: (filters: SearchFilters) => void;
  onApplyFilters: () => void;
}

const SearchFiltersComponent: React.FC<SearchFiltersProps> = ({
  filters,
  onFilterChange,
  onApplyFilters
}) => {
  const [expandedSections, setExpandedSections] = useState({
    location: true,
    procedure: true,
    price: true,
    rating: false,
    languages: false,
    accreditations: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  const handleFilterChange = (key: keyof SearchFilters, value: any) => {
    onFilterChange({
      ...filters,
      [key]: value
    });
  };

  const availableLanguages = ["English", "Spanish", "German", "French", "Arabic", "Russian", "Mandarin", "Hindi", "Thai", "Turkish"];
  const availableAccreditations = ["JCI", "ISO 9001", "NABH", "Hospital Accreditation (HA)", "European Accreditation", "Planetree"];

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800 flex items-center">
          <Filter size={18} className="mr-2" /> Filters
        </h3>
        <button 
          className="text-blue-600 text-sm hover:underline"
          onClick={() => onFilterChange(
            {
              location: '',
              procedureType: '',
              priceMin: 0,
              priceMax: 50000,
              rating: 0,
              languages: [],
              accreditations: [],
            }
          )}
        >
          Reset All
        </button>
      </div>

      {/* Location Filter */}
      <div className="border-b border-gray-200 py-3">
        <button 
          className="flex w-full items-center justify-between focus:outline-none"
          onClick={() => toggleSection('location')}
        >
          <span className="font-medium text-gray-700">Location</span>
          {expandedSections.location ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        {expandedSections.location && (
          <div className="mt-2">
            <input
              type="text"
              placeholder="Country or city..."
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
            />
          </div>
        )}
      </div>
      
      {/* Procedure Type Filter */}
      <div className="border-b border-gray-200 py-3">
        <button 
          className="flex w-full items-center justify-between focus:outline-none"
          onClick={() => toggleSection('procedure')}
        >
          <span className="font-medium text-gray-700">Procedure Type</span>
          {expandedSections.procedure ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        {expandedSections.procedure && (
          <div className="mt-2">
            <select
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filters.procedureType}
              onChange={(e) => handleFilterChange('procedureType', e.target.value)}
            >
              <option value="">All Procedures</option>
              <option value="Dental">Dental</option>
              <option value="Orthopedic">Orthopedic</option>
              <option value="Cosmetic">Cosmetic</option>
              <option value="Cardiac">Cardiac</option>
              <option value="Ophthalmology">Ophthalmology</option>
              <option value="Fertility">Fertility</option>
              <option value="Bariatric">Bariatric</option>
            </select>
          </div>
        )}
      </div>
      
      {/* Price Range Filter */}
      <div className="border-b border-gray-200 py-3">
        <button 
          className="flex w-full items-center justify-between focus:outline-none"
          onClick={() => toggleSection('price')}
        >
          <span className="font-medium text-gray-700">Price Range</span>
          {expandedSections.price ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        {expandedSections.price && (
          <div className="mt-2">
            <div className="flex justify-between mb-1">
              <span className="text-xs text-gray-500">${filters.priceMin.toLocaleString()}</span>
              <span className="text-xs text-gray-500">${filters.priceMax.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="0"
              max="50000"
              step="1000"
              value={filters.priceMin}
              onChange={(e) => handleFilterChange('priceMin', parseInt(e.target.value))}
              className="w-full mb-2"
            />
            <input
              type="range"
              min="0"
              max="50000"
              step="1000"
              value={filters.priceMax}
              onChange={(e) => handleFilterChange('priceMax', parseInt(e.target.value))}
              className="w-full"
            />
          </div>
        )}
      </div>
      
      {/* Rating Filter */}
      <div className="border-b border-gray-200 py-3">
        <button 
          className="flex w-full items-center justify-between focus:outline-none"
          onClick={() => toggleSection('rating')}
        >
          <span className="font-medium text-gray-700">Rating</span>
          {expandedSections.rating ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        {expandedSections.rating && (
          <div className="mt-2 space-y-2">
            {[4, 3, 2, 1].map((rating) => (
              <label key={rating} className="flex items-center">
                <input
                  type="radio"
                  name="rating"
                  checked={filters.rating === rating}
                  onChange={() => handleFilterChange('rating', rating)}
                  className="mr-2"
                />
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      fill={index < rating ? "#FACC15" : "none"}
                      className={index < rating ? "text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">& up</span>
                </div>
              </label>
            ))}
          </div>
        )}
      </div>
      
      {/* Languages Filter */}
      <div className="border-b border-gray-200 py-3">
        <button 
          className="flex w-full items-center justify-between focus:outline-none"
          onClick={() => toggleSection('languages')}
        >
          <span className="font-medium text-gray-700">Languages</span>
          {expandedSections.languages ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        {expandedSections.languages && (
          <div className="mt-2 max-h-40 overflow-y-auto">
            {availableLanguages.map((language) => (
              <label key={language} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={filters.languages.includes(language)}
                  onChange={(e) => {
                    const newLanguages = e.target.checked
                      ? [...filters.languages, language]
                      : filters.languages.filter(lang => lang !== language);
                    handleFilterChange('languages', newLanguages);
                  }}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700">{language}</span>
              </label>
            ))}
          </div>
        )}
      </div>
      
      {/* Accreditations Filter */}
      <div className="border-b border-gray-200 py-3">
        <button 
          className="flex w-full items-center justify-between focus:outline-none"
          onClick={() => toggleSection('accreditations')}
        >
          <span className="font-medium text-gray-700">Accreditations</span>
          {expandedSections.accreditations ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        {expandedSections.accreditations && (
          <div className="mt-2 max-h-40 overflow-y-auto">
            {availableAccreditations.map((accreditation) => (
              <label key={accreditation} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={filters.accreditations.includes(accreditation)}
                  onChange={(e) => {
                    const newAccreditations = e.target.checked
                      ? [...filters.accreditations, accreditation]
                      : filters.accreditations.filter(acc => acc !== accreditation);
                    handleFilterChange('accreditations', newAccreditations);
                  }}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700">{accreditation}</span>
              </label>
            ))}
          </div>
        )}
      </div>
      
      <button
        onClick={onApplyFilters}
        className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default SearchFiltersComponent;