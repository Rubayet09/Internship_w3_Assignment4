// // import React from 'react';
// // import { Location as LocationType } from '@/types/hotel';

// // interface LocationProps {
// //     location: {
// //         address: string;
// //         city: string;
// //         state: string;
// //         country: string;
// //         postalCode: string;
// //         coordinates: {
// //             lat: number;
// //             lng: number;
// //         };
// //         nearbyPlaces: LocationType[];
// //     };
// // }

// // const Location: React.FC<LocationProps> = ({ location }) => {
// //     return (
// //         <div className="mt-8">
// //             <h2 className="text-2xl font-semibold mb-5">Location</h2>
            
// //             {/* Map */}
// //             <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden mb-6">
// //                 {/* Map implementation */}
// //                 <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md">
// //                     <p className="text-sm font-medium">
// //                         {location.address}, {location.city}, {location.state}
// //                     </p>
// //                 </div>
// //             </div>

// //             {/* Nearby places */}
// //             <div className="mt-6">
// //                 <h3 className="text-lg font-semibold mb-4">Nearby Places</h3>
// //                 <div className="flex flex-col gap-4">
// //                     {location.nearbyPlaces.map((place, index) => (
// //                         <div key={index} className="flex justify-between items-center">
// //                             <div className="flex items-center gap-3">
// //                                 <div className={`w-2 h-2 ${place.isAirport ? 'border-t-4 border-gray-600 rotate-45' : 'rounded-full bg-gray-600'}`} />
// //                                 <span className="text-sm">{place.name}</span>
// //                             </div>
// //                             <span className="text-sm text-gray-600">{place.driveTime}</span>
// //                         </div>
// //                     ))}
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Location;


// import React from 'react';
// import { Location as LocationType } from '@/types/hotel';

// interface LocationProps {
//     location: {
//         address: string;
//         city: string;
//         state: string;
//         country: string;
//         postalCode: string;
//         coordinates: {
//             lat: number;
//             lng: number;
//         };
//         nearbyPlaces: LocationType[];
//     };
//     nearbyPlaces: LocationType[]; // Add this line
// }

// const Location: React.FC<LocationProps> = ({ location, nearbyPlaces }) => {
//     return (
//         <div className="mt-8">
//             <h2 className="text-2xl font-semibold mb-5">Location</h2>
            
//             {/* Map */}
//             <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden mb-6">
//                 {/* Map implementation */}
//                 <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md">
//                     <p className="text-sm font-medium">
//                         {location.address}, {location.city}, {location.state}
//                     </p>
//                 </div>
//             </div>

//             {/* Nearby places */}
//             <div className="mt-6">
//                 <h3 className="text-lg font-semibold mb-4">Nearby Places</h3>
//                 <div className="flex flex-col gap-4">
//                     {nearbyPlaces.map((place, index) => (
//                         <div key={index} className="flex justify-between items-center">
//                             <div className="flex items-center gap-3">
//                                 <div className={`w-2 h-2 ${place.isAirport ? 'border-t-4 border-gray-600 rotate-45' : 'rounded-full bg-gray-600'}`} />
//                                 <span className="text-sm">{place.name}</span>
//                             </div>
//                             <span className="text-sm text-gray-600">{place.driveTime}</span>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Location;

import { Hotel } from '@/types/hotel';

interface NearbyPlace {
  name: string;
  driveTime: string;
  isAirport?: boolean;
}

interface LocationProps {
  hotel: Hotel;
}

const Location: React.FC<LocationProps> = ({ hotel }) => {
  // Convert string array to NearbyPlace objects
  const nearbyPlaces: NearbyPlace[] = hotel.location.nearbyPlaces?.map(place => ({
    name: place,
    driveTime: "15 mins", // Default value since it's not in the current type
    isAirport: false // Default value since it's not in the current type
  })) || [];

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-5">Location</h2>

      <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden mb-6">
        <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md">
          <p className="text-sm font-medium">
            {hotel.location.address.street}, {hotel.location.address.city}, {hotel.location.address.state}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Nearby Places</h3>
        <div className="flex flex-col gap-4">
          {nearbyPlaces.map((place, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 ${place.isAirport ? 'border-t-4 border-gray-600 rotate-45' : 'rounded-full bg-gray-600'}`} />
                <span className="text-sm">{place.name}</span>
              </div>
              <span className="text-sm text-gray-600">{place.driveTime}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Location;