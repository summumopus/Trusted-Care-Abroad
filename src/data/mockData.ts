import { Clinic, Procedure, FaqItem } from '../types';

export const mockProcedures: Procedure[] = [
  {
    id: "proc1",
    name: "Dental Implants",
    type: "Dental",
    description: "Replacement of missing teeth with artificial tooth roots that provide a strong foundation for fixed or removable replacement teeth.",
    price: 1200,
    currency: "USD",
    duration: "1-2 days",
    recoveryTime: "3-7 days",
  },
  {
    id: "proc2",
    name: "Hip Replacement",
    type: "Orthopedic",
    description: "Surgical procedure where the damaged hip joint is replaced with an artificial implant to improve mobility and reduce pain.",
    price: 12000,
    currency: "USD",
    duration: "2-3 hours",
    recoveryTime: "4-6 weeks",
  },
  {
    id: "proc3",
    name: "Lasik Eye Surgery",
    type: "Ophthalmology",
    description: "Laser vision correction procedure that reshapes the cornea to improve vision and reduce dependency on glasses or contact lenses.",
    price: 2500,
    currency: "USD",
    duration: "30 minutes",
    recoveryTime: "1-2 days",
  },
  {
    id: "proc4",
    name: "Rhinoplasty",
    type: "Cosmetic",
    description: "Surgical procedure that changes the shape of the nose to improve appearance or breathing, or both.",
    price: 5500,
    currency: "USD",
    duration: "2-3 hours",
    recoveryTime: "1-2 weeks",
  },
  {
    id: "proc5",
    name: "Coronary Artery Bypass",
    type: "Cardiac",
    description: "Surgical procedure to restore normal blood flow to an obstructed coronary artery using a healthy blood vessel from another part of the body.",
    price: 25000,
    currency: "USD",
    duration: "3-6 hours",
    recoveryTime: "6-12 weeks",
  },
  {
    id: "proc6",
    name: "IVF Treatment",
    type: "Fertility",
    description: "Medical procedure where an egg is fertilized by sperm outside the body to help those with fertility issues conceive a child.",
    price: 7500,
    currency: "USD",
    duration: "2-3 weeks",
    recoveryTime: "1-2 weeks",
  },
  {
    id: "proc7",
    name: "Gastric Bypass",
    type: "Bariatric",
    description: "Weight-loss surgery that involves creating a small pouch from the stomach and connecting it directly to the small intestine.",
    price: 15000,
    currency: "USD",
    duration: "2-4 hours",
    recoveryTime: "2-4 weeks",
  },
];

export const mockClinics: Clinic[] = [
  {
    id: "clinic1",
    name: "Bumrungrad International Hospital",
    description: "One of Asia's premier medical facilities, providing world-class healthcare services with state-of-the-art technology and internationally trained specialists.",
    country: "Thailand",
    city: "Bangkok",
    address: "33 Sukhumvit 3, Wattana, Bangkok 10110",
    rating: 4.8,
    reviewCount: 1245,
    specialties: ["Orthopedic", "Cardiac", "Oncology", "Neurology"],
    accreditations: ["JCI", "ISO 9001", "Hospital Accreditation (HA)"],
    languages: ["English", "Thai", "Arabic", "Japanese", "Mandarin"],
    procedures: [
      {
        id: "proc2",
        name: "Hip Replacement",
        type: "Orthopedic",
        description: "Surgical procedure where the damaged hip joint is replaced with an artificial implant to improve mobility and reduce pain.",
        price: 12000,
        currency: "USD",
        duration: "2-3 hours",
        recoveryTime: "4-6 weeks",
      },
      {
        id: "proc5",
        name: "Coronary Artery Bypass",
        type: "Cardiac",
        description: "Surgical procedure to restore normal blood flow to an obstructed coronary artery using a healthy blood vessel from another part of the body.",
        price: 25000,
        currency: "USD",
        duration: "3-6 hours",
        recoveryTime: "6-12 weeks",
      },
    ],
    doctors: [
      {
        id: "doc1",
        name: "Dr. Suthep Wongcharoen",
        title: "Chief of Orthopedic Surgery",
        specialty: "Orthopedics",
        experience: 25,
        education: ["Harvard Medical School", "Chulalongkorn University"],
        image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: "doc2",
        name: "Dr. Piyamitr Sritara",
        title: "Cardiac Specialist",
        specialty: "Cardiology",
        experience: 20,
        education: ["Johns Hopkins University", "Mahidol University"],
        image: "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ],
    images: [
      "https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    nearbyHotels: [
      {
        id: "hotel1",
        name: "The Sukhothai Bangkok",
        distance: "1.2 km",
        pricePerNight: 180,
        rating: 4.7,
        image: "https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: "hotel2",
        name: "Grande Centre Point Sukhumvit",
        distance: "0.5 km",
        pricePerNight: 120,
        rating: 4.5,
        image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ],
    contactEmail: "international@bumrungrad.com",
    contactPhone: "+66 2066 8888",
    website: "https://www.bumrungrad.com",
    latitude: 13.7437,
    longitude: 100.5548,
  },
  {
    id: "clinic2",
    name: "Apollo Hospitals",
    description: "India's leading integrated healthcare services provider with a strong presence across the healthcare ecosystem, including hospitals, pharmacies, and primary care facilities.",
    country: "India",
    city: "Chennai",
    address: "21 Greams Lane, Thousand Lights West, Chennai 600006",
    rating: 4.7,
    reviewCount: 987,
    specialties: ["Cardiology", "Oncology", "Neurosurgery", "Transplant"],
    accreditations: ["JCI", "NABH", "ISO 9001"],
    languages: ["English", "Hindi", "Tamil", "Telugu", "Malayalam"],
    procedures: [
      {
        id: "proc5",
        name: "Coronary Artery Bypass",
        type: "Cardiac",
        description: "Surgical procedure to restore normal blood flow to an obstructed coronary artery using a healthy blood vessel from another part of the body.",
        price: 7500,
        currency: "USD",
        duration: "3-6 hours",
        recoveryTime: "6-12 weeks",
      },
      {
        id: "proc7",
        name: "Gastric Bypass",
        type: "Bariatric",
        description: "Weight-loss surgery that involves creating a small pouch from the stomach and connecting it directly to the small intestine.",
        price: 6500,
        currency: "USD",
        duration: "2-4 hours",
        recoveryTime: "2-4 weeks",
      }
    ],
    doctors: [
      {
        id: "doc3",
        name: "Dr. Anupam Sibal",
        title: "Group Medical Director",
        specialty: "Pediatric Gastroenterology",
        experience: 30,
        education: ["University of Delhi", "Royal College of Physicians"],
        image: "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: "doc4",
        name: "Dr. Prathap C. Reddy",
        title: "Cardiologist",
        specialty: "Cardiology",
        experience: 40,
        education: ["Harvard Medical School", "University of Madras"],
        image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ],
    images: [
      "https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1250655/pexels-photo-1250655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    nearbyHotels: [
      {
        id: "hotel3",
        name: "The Park Chennai",
        distance: "2.0 km",
        pricePerNight: 100,
        rating: 4.3,
        image: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: "hotel4",
        name: "Taj Coromandel",
        distance: "1.5 km",
        pricePerNight: 150,
        rating: 4.8,
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ],
    contactEmail: "info@apollohospitals.com",
    contactPhone: "+91 44 2829 3333",
    website: "https://www.apollohospitals.com",
    latitude: 13.0569,
    longitude: 80.2425,
  },
  {
    id: "clinic3",
    name: "Clinica Universidad de Navarra",
    description: "One of Spain's leading private medical centers known for its cutting-edge technology and research in various medical specialties.",
    country: "Spain",
    city: "Madrid",
    address: "Calle Marquesado de Santa Marta, 1, 28027 Madrid",
    rating: 4.9,
    reviewCount: 832,
    specialties: ["Oncology", "Neurology", "Cardiology", "Fertility"],
    accreditations: ["JCI", "ISO 9001", "European Accreditation"],
    languages: ["Spanish", "English", "French", "German"],
    procedures: [
      {
        id: "proc6",
        name: "IVF Treatment",
        type: "Fertility",
        description: "Medical procedure where an egg is fertilized by sperm outside the body to help those with fertility issues conceive a child.",
        price: 6000,
        currency: "USD",
        duration: "2-3 weeks",
        recoveryTime: "1-2 weeks",
      },
      {
        id: "proc3",
        name: "Lasik Eye Surgery",
        type: "Ophthalmology",
        description: "Laser vision correction procedure that reshapes the cornea to improve vision and reduce dependency on glasses or contact lenses.",
        price: 1800,
        currency: "USD",
        duration: "30 minutes",
        recoveryTime: "1-2 days",
      }
    ],
    doctors: [
      {
        id: "doc5",
        name: "Dr. Jesus San Miguel",
        title: "Director of Clinical Hematology",
        specialty: "Hematology",
        experience: 35,
        education: ["University of Navarra", "Harvard University"],
        image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: "doc6",
        name: "Dr. Isabel Rodriguez",
        title: "Head of Fertility Department",
        specialty: "Reproductive Medicine",
        experience: 22,
        education: ["Universidad Complutense de Madrid", "Johns Hopkins University"],
        image: "https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ],
    images: [
      "https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    nearbyHotels: [
      {
        id: "hotel5",
        name: "NH Madrid Ventas",
        distance: "0.8 km",
        pricePerNight: 120,
        rating: 4.4,
        image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: "hotel6",
        name: "Meliá Madrid Serrano",
        distance: "1.7 km",
        pricePerNight: 160,
        rating: 4.6,
        image: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ],
    contactEmail: "international@unav.es",
    contactPhone: "+34 91 353 19 20",
    website: "https://www.cun.es",
    latitude: 40.4489,
    longitude: -3.6703,
  },
  {
    id: "clinic4",
    name: "Anadolu Medical Center",
    description: "A leading healthcare provider in Turkey affiliated with Johns Hopkins Medicine, offering high-quality care with advanced medical technology.",
    country: "Turkey",
    city: "Istanbul",
    address: "Cumhuriyet Mahallesi, 2255 Sk. No:3, 41400 Gebze/Kocaeli",
    rating: 4.6,
    reviewCount: 754,
    specialties: ["Oncology", "Orthopedic", "Cardiac", "Plastic Surgery"],
    accreditations: ["JCI", "ISO 9001", "Planetree"],
    languages: ["Turkish", "English", "Arabic", "Russian", "German"],
    procedures: [
      {
        id: "proc2",
        name: "Hip Replacement",
        type: "Orthopedic",
        description: "Surgical procedure where the damaged hip joint is replaced with an artificial implant to improve mobility and reduce pain.",
        price: 8500,
        currency: "USD",
        duration: "2-3 hours",
        recoveryTime: "4-6 weeks",
      },
      {
        id: "proc4",
        name: "Rhinoplasty",
        type: "Cosmetic",
        description: "Surgical procedure that changes the shape of the nose to improve appearance or breathing, or both.",
        price: 3500,
        currency: "USD",
        duration: "2-3 hours",
        recoveryTime: "1-2 weeks",
      }
    ],
    doctors: [
      {
        id: "doc7",
        name: "Dr. Mehmet Öz",
        title: "Head of Cardiac Surgery",
        specialty: "Cardiothoracic Surgery",
        experience: 28,
        education: ["Istanbul University", "University of Pennsylvania"],
        image: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: "doc8",
        name: "Dr. Ayşe Yılmaz",
        title: "Plastic Surgeon",
        specialty: "Plastic and Reconstructive Surgery",
        experience: 18,
        education: ["Hacettepe University", "Stanford University"],
        image: "https://images.pexels.com/photos/5214949/pexels-photo-5214949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ],
    images: [
      "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/305565/pexels-photo-305565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    nearbyHotels: [
      {
        id: "hotel7",
        name: "Wyndham Grand Istanbul Kalamış Marina",
        distance: "15 km",
        pricePerNight: 110,
        rating: 4.5,
        image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: "hotel8",
        name: "Radisson Blu Hotel Istanbul Asia",
        distance: "8 km",
        pricePerNight: 95,
        rating: 4.3,
        image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ],
    contactEmail: "international@anadolusaglik.org",
    contactPhone: "+90 262 678 55 55",
    website: "https://www.anadolusaglik.org",
    latitude: 40.7892,
    longitude: 29.4301,
  }
];

export const mockFaqs: FaqItem[] = [
  {
    question: "What is medical tourism?",
    answer: "Medical tourism refers to the practice of traveling to another country for medical treatment. People typically seek medical tourism for procedures that are more affordable, of higher quality, or more readily available abroad than in their home country.",
    category: "General",
  },
  {
    question: "Is medical tourism safe?",
    answer: "Safety in medical tourism depends largely on the facility and healthcare providers you choose. Facilities with international accreditations like JCI (Joint Commission International) generally adhere to high standards of care and safety. It's important to thoroughly research your options, check accreditations, read reviews, and consult with healthcare professionals.",
    category: "Safety",
  },
  {
    question: "How do I choose the right hospital or clinic?",
    answer: "When selecting a hospital or clinic abroad, consider factors such as accreditation, specialist expertise, success rates, patient reviews, language capabilities, and comprehensive care packages. Look for facilities with international accreditation like JCI, which ensures they meet global standards for quality and patient safety.",
    category: "Planning",
  },
  {
    question: "What about insurance coverage for medical tourism?",
    answer: "Many standard health insurance plans don't cover medical procedures performed abroad. However, some insurance companies offer specialized medical tourism insurance packages. It's crucial to contact your insurance provider before planning your trip to understand your coverage options.",
    category: "Insurance",
  },
  {
    question: "How long should I stay in the destination country?",
    answer: "The length of stay depends on the procedure and your recovery time. Minor procedures might require a stay of a few days, while more complex surgeries could necessitate several weeks for proper follow-up care and recovery. Your healthcare provider should provide specific recommendations based on your procedure and individual health needs.",
    category: "Planning",
  },
  {
    question: "What documentation do I need for medical tourism?",
    answer: "Typically, you'll need your passport, visa (if required for the destination country), medical records, prescription information, and documentation from your home doctor. You might also need a letter from your healthcare provider explaining the purpose of your visit and any medications you're carrying.",
    category: "Documentation",
  },
  {
    question: "How can I manage the language barrier?",
    answer: "Many international hospitals catering to medical tourists have multilingual staff and translators. When selecting a facility, confirm they have staff who speak your language. Additionally, consider bringing a trusted companion who can help with translation if needed, or use translation apps for basic communication.",
    category: "Communication",
  },
  {
    question: "What are the risks associated with medical tourism?",
    answer: "Risks include potential complications without easy access to your regular doctor, difficulty in communication due to language barriers, exposure to different bacteria or viruses, and challenges in follow-up care. There might also be legal complexities if something goes wrong, as malpractice laws vary by country.",
    category: "Safety",
  }
];