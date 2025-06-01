import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Clinic, Procedure, SearchFilters } from '../types';
import { mockClinics, mockProcedures } from '../data/mockData';

interface AppContextType {
  clinics: Clinic[];
  procedures: Procedure[];
  searchFilters: SearchFilters;
  setSearchFilters: (filters: SearchFilters) => void;
  searchResults: Clinic[];
  performSearch: (query: string, filters?: Partial<SearchFilters>) => void;
}

const defaultFilters: SearchFilters = {
  location: '',
  procedureType: '',
  priceMin: 0,
  priceMax: 50000,
  rating: 0,
  languages: [],
  accreditations: [],
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [clinics] = useState<Clinic[]>(mockClinics);
  const [procedures] = useState<Procedure[]>(mockProcedures);
  const [searchFilters, setSearchFilters] = useState<SearchFilters>(defaultFilters);
  const [searchResults, setSearchResults] = useState<Clinic[]>([]);

  const performSearch = (query: string, filters?: Partial<SearchFilters>) => {
    const currentFilters = { ...searchFilters, ...filters };
    
    // This is a simplified search logic for the MVP
    let results = [...clinics];
    
    if (query) {
      const lowerQuery = query.toLowerCase();
      results = results.filter(
        clinic => 
          clinic.name.toLowerCase().includes(lowerQuery) ||
          clinic.specialties.some(s => s.toLowerCase().includes(lowerQuery)) ||
          clinic.procedures.some(p => p.name.toLowerCase().includes(lowerQuery))
      );
    }
    
    // Apply filters
    if (currentFilters.location) {
      results = results.filter(
        clinic => 
          clinic.country.toLowerCase().includes(currentFilters.location.toLowerCase()) ||
          clinic.city.toLowerCase().includes(currentFilters.location.toLowerCase())
      );
    }
    
    if (currentFilters.procedureType) {
      results = results.filter(
        clinic => clinic.procedures.some(
          p => p.type.toLowerCase() === currentFilters.procedureType.toLowerCase()
        )
      );
    }
    
    if (currentFilters.priceMin > 0 || currentFilters.priceMax < 50000) {
      results = results.filter(
        clinic => clinic.procedures.some(
          p => p.price >= currentFilters.priceMin && p.price <= currentFilters.priceMax
        )
      );
    }
    
    if (currentFilters.rating > 0) {
      results = results.filter(clinic => clinic.rating >= currentFilters.rating);
    }
    
    if (currentFilters.languages.length > 0) {
      results = results.filter(
        clinic => currentFilters.languages.some(
          lang => clinic.languages.includes(lang)
        )
      );
    }
    
    if (currentFilters.accreditations.length > 0) {
      results = results.filter(
        clinic => currentFilters.accreditations.some(
          acc => clinic.accreditations.includes(acc)
        )
      );
    }
    
    setSearchResults(results);
  };

  return (
    <AppContext.Provider
      value={{
        clinics,
        procedures,
        searchFilters,
        setSearchFilters,
        searchResults,
        performSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};