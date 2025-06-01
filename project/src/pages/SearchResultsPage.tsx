import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Filter, X, Map, List, SlidersHorizontal } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import ClinicCard from '../components/ClinicCard';
import SearchFiltersComponent from '../components/SearchFilters';
import { useAppContext } from '../context/AppContext';
import { SearchFilters } from '../types';

const SearchResultsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { searchResults, searchFilters, setSearchFilters, performSearch } = useAppContext();
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortOption, setSortOption] = useState<string>('relevance');
  const [currentView, setCurrentView] = useState<'list' | 'map'>('list');
  
  // Parse query params from URL on initial load
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('q') || '';
    
    if (query) {
      performSearch(query);
    }
  }, [location.search, performSearch]);

  const handleSearch = (query: string) => {
    performSearch(query);
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  const handleFilterChange = (newFilters: SearchFilters) => {
    setSearchFilters(newFilters);
  };

  const applyFilters = () => {
    performSearch('', searchFilters);
    setIsFilterOpen(false);
  };

  const sortedResults = [...searchResults].sort((a, b) => {
    switch (sortOption) {
      case 'price-low':
        return (
          Math.min(...a.procedures.map(p => p.price)) - 
          Math.min(...b.procedures.map(p => p.price))
        );
      case 'price-high':
        return (
          Math.max(...b.procedures.map(p => p.price)) - 
          Math.max(...a.procedures.map(p => p.price))
        );
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <SearchBar onSearch={handleSearch} placeholder="Search procedures, clinics, locations..." />
            </div>
            
            <div className="w-full md:w-1/2 flex justify-between md:justify-end items-center">
              <div className="flex items-center space-x-2 md:mr-6">
                <button 
                  className={`p-2 rounded-md ${currentView === 'list' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
                  onClick={() => setCurrentView('list')}
                >
                  <List size={18} />
                </button>
                <button 
                  className={`p-2 rounded-md ${currentView === 'map' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
                  onClick={() => setCurrentView('map')}
                >
                  <Map size={18} />
                </button>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="relevance">Sort: Relevance</option>
                    <option value="rating">Sort: Rating</option>
                    <option value="price-low">Sort: Price (Low to High)</option>
                    <option value="price-high">Sort: Price (High to Low)</option>
                  </select>
                </div>
                
                <button 
                  className="md:hidden bg-blue-600 text-white px-4 py-2 rounded-md flex items-center"
                  onClick={() => setIsFilterOpen(true)}
                >
                  <Filter size={18} className="mr-2" />
                  Filters
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Filters Drawer */}
        <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className={`fixed inset-y-0 right-0 max-w-full w-full sm:w-96 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isFilterOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="h-full flex flex-col overflow-hidden">
              <div className="px-4 py-5 border-b border-gray-200 flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <Filter size={18} className="mr-2" /> Filters
                </h3>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setIsFilterOpen(false)}
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex-1 overflow-auto p-4">
                <SearchFiltersComponent
                  filters={searchFilters}
                  onFilterChange={handleFilterChange}
                  onApplyFilters={applyFilters}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden md:block md:w-1/4">
            <SearchFiltersComponent
              filters={searchFilters}
              onFilterChange={handleFilterChange}
              onApplyFilters={applyFilters}
            />
          </aside>
          
          {/* Main Content */}
          <div className="md:w-3/4">
            <div className="bg-white p-4 rounded-lg shadow-md mb-4">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold text-gray-800">
                  {searchResults.length} Clinics Found
                </h1>
                <div className="flex items-center text-sm text-gray-500">
                  <SlidersHorizontal size={14} className="mr-1" />
                  <span className="hidden md:inline">Active filters:</span> 
                  {Object.values(searchFilters).some(value => 
                    (Array.isArray(value) && value.length > 0) || 
                    (typeof value === 'string' && value !== '') || 
                    (typeof value === 'number' && value !== 0 && value !== 50000)
                  ) ? (
                    <span className="text-blue-600 font-medium ml-1">Applied</span>
                  ) : (
                    <span className="ml-1">None</span>
                  )}
                </div>
              </div>
            </div>
            
            {currentView === 'list' ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {sortedResults.length > 0 ? (
                  sortedResults.map((clinic) => (
                    <ClinicCard key={clinic.id} clinic={clinic} />
                  ))
                ) : (
                  <div className="col-span-2 text-center py-16">
                    <p className="text-gray-500 text-lg">No clinics found matching your search criteria.</p>
                    <button 
                      className="mt-4 text-blue-600 hover:underline"
                      onClick={() => {
                        setSearchFilters({
                          location: '',
                          procedureType: '',
                          priceMin: 0,
                          priceMax: 50000,
                          rating: 0,
                          languages: [],
                          accreditations: [],
                        });
                        performSearch('');
                      }}
                    >
                      Clear all filters and try again
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white p-4 rounded-lg shadow-md text-center h-96 flex items-center justify-center">
                <p className="text-gray-500">
                  Map view will be available in the next update. Please use list view for now.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;