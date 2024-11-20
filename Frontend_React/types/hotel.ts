// // types/hotel.ts

// export interface Photo {
//     url: string;
//     alt: string;
//   }
  
//   // export interface Location {
//   //   name: string;
//   //   driveTime: string;
//   //   isAirport?: boolean;
//   // }
//   export interface Location {
//     latitude: number;
//     longitude: number;
//     address: {
//       street: string;
//       city: string;
//       state: string;
//       country: string;
//       zip: string;
//       driveTime: string;
//      isAirport?: boolean;
//     };
//     nearbyPlaces?: string[]; // Optional
//   }
  
//   export interface Amenity {
//     icon: string;
//     name: string;
//     description?: string;
//   }
  
//   export interface Room {
//     name: string;
//     description: string;
//     capacity: number;
//     beds: {
//       type: string;
//       count: number;
//     }[];
//     amenities: string[];
//     pricePerNight: number;
//   }
  
//   export interface Review {
//     id: string;
//     rating: number;
//     text: string;
//     reviewer: string;
//     date: string;
//     helpful?: number;
//   }
  
//   export interface HotelDetails {
//     reviews: Review[];
//     id: string;
//     slug: string;  // Added for URL-friendly version of hotel name
//     title: string;
//     description: string;
//     rating: number;
//     totalReviews: number;
//     images: Photo[];  // Added for hotel images
//     features: {
//       bedrooms: number;
//       bathrooms: number;
//       sleeps: number;
//       squareFt: number;
//     };
//     amenities: Amenity[];
//     location: {
//       address: string;
//       city: string;
//       state: string;
//       country: string;
//       postalCode: string;
//       coordinates: {
//         lat: number;
//         lng: number;
//       };
//       nearbyPlaces: Location[];
//     };
//     rooms: Room[];
//     pricing: {
//       basePrice: number;
//       currency: string;
//       cleaning?: number;
//       service?: number;
//       taxes?: number;
//     };
//     rules: {
//       checkIn: string;
//       checkOut: string;
//       minAge: number;
//       allowChildren: boolean;
//       allowPets: boolean;
//       allowSmoking: boolean;
//       allowParties: boolean;
//       cancellationPolicy?: string;
//     };
//     seoMetadata?: {
//       title: string;
//       description: string;
//       keywords: string[];
//     };
//   }
  
//   // API Response types
//   export interface HotelResponse {
//     success: boolean;
//     data: HotelDetails;
//   }
  
//   export interface HotelErrorResponse {
//     success: boolean;
//     error: {
//       code: string;
//       message: string;
//     };
//   }

// types/hotel.ts
export interface Hotel {
  images: any;
  id: string;
  slug: string;
 
//images: string[];
  title: string;
  description: string;
  guestCount: number;
  bedroomCount: number;
  bathroomCount: number;
  amenities: string[];
  host: {
    name: string;
    avatar: string;
  };
  location: {
    latitude: number;
    longitude: number;
    address: {
      street: string;
      city: string;
      state: string;
      country: string;
      zip: string;
    };
    nearbyPlaces?: string[];
  };
  rooms: Array<{
    capacity: any;
    name: string;
    slug: string;
    title: string;
    bedroomCount: number;
    image?: string;
  }>;
  pricing: {
    baseRate: number;
    currency: string;
  };
  reviews: Array<{
    id: string;
    user: string;
    rating: number;
    comment: string;
    date: string;
  }>;
 }
 
 export interface HotelResponse {
  success: boolean;
  data: Hotel;
 }
 
 export interface HotelErrorResponse {
  error: string;
 }