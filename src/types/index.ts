export interface Procedure {
  id: string;
  name: string;
  type: string;
  description: string;
  price: number;
  currency: string;
  duration: string;
  recoveryTime: string;
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  experience: number;
  education: string[];
  image: string;
}

export interface Review {
  id: string;
  patientName: string;
  country: string;
  rating: number;
  comment: string;
  date: string;
  procedure: string;
}

export interface NearbyHotel {
  id: string;
  name: string;
  distance: string;
  pricePerNight: number;
  rating: number;
  image: string;
}

export interface Clinic {
  id: string;
  name: string;
  description: string;
  country: string;
  city: string;
  address: string;
  rating: number;
  reviewCount: number;
  specialties: string[];
  accreditations: string[];
  languages: string[];
  procedures: Procedure[];
  doctors: Doctor[];
  images: string[];
  nearbyHotels: NearbyHotel[];
  contactEmail: string;
  contactPhone: string;
  website: string;
  latitude: number;
  longitude: number;
}

export interface SearchFilters {
  location: string;
  procedureType: string;
  priceMin: number;
  priceMax: number;
  rating: number;
  languages: string[];
  accreditations: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}