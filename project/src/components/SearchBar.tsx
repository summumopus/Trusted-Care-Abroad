import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder = "Search..." }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex items-center border border-gray-300 rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent bg-white transition duration-200">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full py-2 pl-4 pr-10 focus:outline-none text-gray-700 placeholder-gray-500"
        />
        <button
          type="submit"
          className="absolute right-0 top-0 h-full px-3 text-gray-500 hover:text-blue-600 focus:outline-none"
        >
          <Search size={18} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;