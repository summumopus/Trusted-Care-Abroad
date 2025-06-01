import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Award, Languages } from 'lucide-react';
import { Clinic } from '../types';

interface ClinicCardProps {
  clinic: Clinic;
}

const ClinicCard: React.FC<ClinicCardProps> = ({ clinic }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100">
      <div className="relative">
        <img 
          src={clinic.images[0]} 
          alt={clinic.name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md shadow text-sm font-medium flex items-center">
          <Star size={16} className="text-yellow-400 mr-1" fill="#FACC15" />
          <span>{clinic.rating.toFixed(1)}</span>
          <span className="text-gray-500 text-xs ml-1">({clinic.reviewCount})</span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{clinic.name}</h3>
        
        <div className="flex items-center mb-3 text-gray-600">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{clinic.city}, {clinic.country}</span>
        </div>
        
        <div className="mb-3">
          <div className="flex flex-wrap gap-1 mb-2">
            {clinic.specialties.slice(0, 3).map((specialty, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
              >
                {specialty}
              </span>
            ))}
            {clinic.specialties.length > 3 && (
              <span className="px-2 py-1 bg-gray-50 text-gray-700 text-xs rounded-full">
                +{clinic.specialties.length - 3} more
              </span>
            )}
          </div>
        </div>
        
        <div className="flex items-start mb-4 text-xs text-gray-500">
          <div className="flex items-center mr-4">
            <Award size={14} className="mr-1 text-blue-600" />
            <span>{clinic.accreditations.join(', ')}</span>
          </div>
          <div className="flex items-center">
            <Languages size={14} className="mr-1 text-blue-600" />
            <span>{clinic.languages.slice(0, 2).join(', ')}{clinic.languages.length > 2 ? ` +${clinic.languages.length - 2} more` : ''}</span>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-4 mt-2">
          <div className="mb-3">
            <h4 className="text-sm font-medium mb-2">Available procedures:</h4>
            <div className="space-y-2">
              {clinic.procedures.map((procedure) => (
                <div key={procedure.id} className="flex justify-between items-center">
                  <span className="text-sm">{procedure.name}</span>
                  <span className="text-sm font-medium text-blue-700">${procedure.price.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
          
          <Link
            to={`/clinic/${clinic.id}`}
            className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200 mt-4"
          >
            View Clinic Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClinicCard;