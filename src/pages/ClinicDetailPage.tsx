import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Star, 
  Award, 
  Globe, 
  Users, 
  Mail, 
  Phone, 
  ExternalLink, 
  ChevronRight, 
  ChevronLeft, 
  Heart, 
  Share2 
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { Clinic } from '../types';

const ClinicDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { clinics } = useAppContext();
  const [clinic, setClinic] = useState<Clinic | null>(null);
  const [activeTab, setActiveTab] = useState<string>('about');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (id) {
      const foundClinic = clinics.find(c => c.id === id);
      if (foundClinic) {
        setClinic(foundClinic);
      } else {
        navigate('/search');
      }
    }
  }, [id, clinics, navigate]);

  if (!clinic) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'procedures', label: 'Procedures & Prices' },
    { id: 'doctors', label: 'Doctors' },
    { id: 'hotels', label: 'Nearby Hotels' },
    { id: 'travel', label: 'Travel Info' },
    { id: 'contact', label: 'Contact' },
  ];

  const nextImage = () => {
    setActiveImageIndex((prevIndex) => (prevIndex + 1) % clinic.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prevIndex) => (prevIndex === 0 ? clinic.images.length - 1 : prevIndex - 1));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">About {clinic.name}</h3>
              <p className="text-gray-700 leading-relaxed">{clinic.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Accreditations</h4>
                <div className="flex flex-wrap gap-2">
                  {clinic.accreditations.map((acc, idx) => (
                    <div key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center">
                      <Award size={14} className="mr-1" />
                      {acc}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">Languages Spoken</h4>
                <div className="flex flex-wrap gap-2">
                  {clinic.languages.map((lang, idx) => (
                    <div key={idx} className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center">
                      <Globe size={14} className="mr-1" />
                      {lang}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Specialties</h4>
              <div className="flex flex-wrap gap-2">
                {clinic.specialties.map((specialty, idx) => (
                  <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Location</h4>
              <p className="text-gray-700 mb-2">{clinic.address}</p>
              <p className="text-gray-700">{clinic.city}, {clinic.country}</p>
              
              <div className="mt-4 bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Interactive map will be available in the next update.</p>
              </div>
            </div>
          </div>
        );
      
      case 'procedures':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Procedures & Prices</h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Procedure
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Duration
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Recovery Time
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {clinic.procedures.map((procedure) => (
                    <tr key={procedure.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{procedure.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{procedure.type}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{procedure.duration}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{procedure.recoveryTime}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-blue-700">${procedure.price.toLocaleString()}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-md">
              <h4 className="text-md font-medium text-blue-800 mb-2">Additional Information</h4>
              <p className="text-sm text-blue-700">
                Prices include all medical fees, doctor consultations, and follow-up appointments. 
                They do not include accommodation, flights, or personal expenses.
              </p>
            </div>
          </div>
        );
      
      case 'doctors':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Our Medical Team</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {clinic.doctors.map((doctor) => (
                <div key={doctor.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col sm:flex-row">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full sm:w-40 h-40 object-cover"
                  />
                  <div className="p-4 flex-grow">
                    <h4 className="text-lg font-semibold text-gray-800">{doctor.name}</h4>
                    <p className="text-blue-600">{doctor.title}</p>
                    <div className="mt-2">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Specialty:</span> {doctor.specialty}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Experience:</span> {doctor.experience} years
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Education:</span> {doctor.education.join(', ')}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'hotels':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Nearby Hotels</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {clinic.nearbyHotels.map((hotel) => (
                <div key={hotel.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={hotel.image} 
                    alt={hotel.name} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-semibold text-gray-800">{hotel.name}</h4>
                      <div className="flex items-center">
                        <Star size={16} className="text-yellow-400 mr-1" fill="#FACC15" />
                        <span>{hotel.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    
                    <div className="mt-2 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 flex items-center">
                          <MapPin size={16} className="mr-1" />
                          {hotel.distance} from clinic
                        </span>
                        <span className="text-blue-600 font-semibold">
                          ${hotel.pricePerNight}/night
                        </span>
                      </div>
                      
                      <button className="w-full mt-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200">
                        View Hotel Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'travel':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Travel Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Visa Requirements</h4>
                <p className="text-gray-600 mb-3">
                  Visitors from most countries require a visa to enter {clinic.country}. Some nationalities may be eligible for visa-on-arrival or visa-free entry for short stays.
                </p>
                <p className="text-gray-600">
                  We recommend checking the latest visa requirements from the {clinic.country} embassy or consulate in your country before planning your trip.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Local Transportation</h4>
                <p className="text-gray-600 mb-3">
                  {clinic.city} has a well-developed public transportation system, including buses, trains, and taxis. Ride-sharing services are also available.
                </p>
                <p className="text-gray-600">
                  The clinic is accessible via public transport and is approximately 25 minutes from the international airport.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Climate & Best Time to Visit</h4>
                <p className="text-gray-600">
                  {clinic.city} has a moderate climate with temperatures averaging between 15°C (59°F) and 30°C (86°F) depending on the season. 
                  The best times to visit are typically spring (March-May) and autumn (September-November) when the weather is pleasant.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Language & Communication</h4>
                <p className="text-gray-600 mb-3">
                  The official language is {clinic.country === "Spain" ? "Spanish" : clinic.country === "Thailand" ? "Thai" : clinic.country === "India" ? "Hindi and English" : "Turkish"}, but the clinic has multilingual staff.
                </p>
                <p className="text-gray-600">
                  Languages spoken at the clinic include: {clinic.languages.join(', ')}
                </p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold mb-3 text-gray-800">Estimated Costs</h4>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Expense
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Estimated Cost (USD)
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Accommodation
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        $80-200 per night
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Varies by hotel category
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Meals
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        $20-50 per day
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Local cuisine is affordable
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Local Transportation
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        $10-30 per day
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Taxis and public transport
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        International Flights
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        $600-1,500 round trip
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Depends on origin and season
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      
      case 'contact':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Contact {clinic.name}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-800">Contact Information</h4>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="text-blue-600 mt-1 mr-3" size={20} />
                    <div>
                      <p className="font-medium text-gray-700">Email</p>
                      <a href={`mailto:${clinic.contactEmail}`} className="text-blue-600 hover:underline">
                        {clinic.contactEmail}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-blue-600 mt-1 mr-3" size={20} />
                    <div>
                      <p className="font-medium text-gray-700">Phone</p>
                      <a href={`tel:${clinic.contactPhone}`} className="text-blue-600 hover:underline">
                        {clinic.contactPhone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="text-blue-600 mt-1 mr-3" size={20} />
                    <div>
                      <p className="font-medium text-gray-700">Address</p>
                      <p className="text-gray-600">{clinic.address}</p>
                      <p className="text-gray-600">{clinic.city}, {clinic.country}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Globe className="text-blue-600 mt-1 mr-3" size={20} />
                    <div>
                      <p className="font-medium text-gray-700">Website</p>
                      <a href={clinic.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                        {clinic.website.replace('https://', '')}
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-800">Send an Inquiry</h4>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="procedure" className="block text-sm font-medium text-gray-700 mb-1">
                      Procedure of Interest
                    </label>
                    <select
                      id="procedure"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select a procedure</option>
                      {clinic.procedures.map((procedure) => (
                        <option key={procedure.id} value={procedure.id}>
                          {procedure.name} (${procedure.price.toLocaleString()})
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Include any questions or specific requirements..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                  >
                    Send Inquiry
                  </button>
                </form>
                
                <p className="text-xs text-gray-500 mt-4">
                  By submitting this form, you agree to our privacy policy and consent to being contacted by the clinic regarding your inquiry.
                </p>
              </div>
            </div>
          </div>
        );
    
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Image Gallery */}
      <div className="relative">
        <div className="h-64 md:h-96 bg-cover bg-center" style={{ backgroundImage: `url('${clinic.images[activeImageIndex]}')` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          
          {/* Navigation arrows */}
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Image indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {clinic.images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${index === activeImageIndex ? 'bg-white' : 'bg-white/50'}`}
                onClick={() => setActiveImageIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clinic Header Info */}
        <div className="bg-white rounded-lg shadow-md -mt-10 relative z-10 p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <div className="flex items-center mb-2">
                <h1 className="text-2xl font-bold text-gray-800 mr-3">{clinic.name}</h1>
                <div className="flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                  <Star size={14} className="mr-1 text-yellow-500" fill="#F59E0B" />
                  <span>{clinic.rating.toFixed(1)}</span>
                  <span className="text-gray-500 text-xs ml-1">({clinic.reviewCount})</span>
                </div>
              </div>
              
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin size={16} className="mr-1" />
                <span>{clinic.address}, {clinic.city}, {clinic.country}</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {clinic.accreditations.map((acc, idx) => (
                  <div key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm flex items-center">
                    <Award size={14} className="mr-1" />
                    {acc}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-4 md:mt-0 flex space-x-3">
              <button className="flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition duration-200">
                <Heart size={18} className="mr-2" />
                <span>Save</span>
              </button>
              <button className="flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition duration-200">
                <Share2 size={18} className="mr-2" />
                <span>Share</span>
              </button>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">
                <Mail size={18} className="mr-2" />
                <span>Contact</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto hide-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`
                    px-6 py-4 text-sm font-medium whitespace-nowrap
                    ${activeTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300'
                    }
                  `}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="p-6">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicDetailPage;