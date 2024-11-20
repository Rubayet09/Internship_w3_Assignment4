// import React, { useState } from 'react';
// import { Room } from '@/types/hotel';

// interface BookingCardProps {
//   pricing: {
//     basePrice: number;
//     currency: string;
//     cleaning?: number;
//     service?: number;
//     taxes?: number;
//   };
//   rooms: Room[];
// }

// const BookingCard = ({ pricing, rooms }: BookingCardProps) => {
//   const [checkIn, setCheckIn] = useState('');
//   const [checkOut, setCheckOut] = useState('');
//   const [guests, setGuests] = useState(2);

//   // Calculate max guests from all rooms
//   const maxGuests = Math.max(...rooms.map(room => room.capacity));

//   return (
//     <div className="sticky top-5 bg-white border-2 border-gray-200 rounded-lg p-6">
//       <div className="bg-indigo-900 text-white p-4 rounded-lg mb-6">
//         <div className="flex items-center gap-2">
//           <span className="text-xl">⭐</span>
//           <p>Members get our best prices when signed in!</p>
//         </div>
//         <button className="mt-2 text-sm font-medium hover:underline">
//           Sign in
//         </button>
//       </div>

//       <div className="mb-4">
//         <span className="text-2xl font-bold">
//           ${pricing.basePrice}
//         </span>
//         <span className="text-gray-600"> per night</span>
//       </div>

//       <div className="text-green-600 mb-4">Free cancellation</div>

//       <div className="grid grid-cols-2 gap-4 mb-6">
//         <div className="flex flex-col">
//           <label className="text-sm mb-1">Check-in</label>
//           <input
//             type="date"
//             value={checkIn}
//             onChange={(e) => setCheckIn(e.target.value)}
//             className="p-2 border border-gray-300 rounded"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label className="text-sm mb-1">Check-out</label>
//           <input
//             type="date"
//             value={checkOut}
//             onChange={(e) => setCheckOut(e.target.value)}
//             className="p-2 border border-gray-300 rounded"
//           />
//         </div>
//       </div>

//       <div className="mb-6">
//         <label className="text-sm mb-1 block">Guests</label>
//         <select
//           value={guests}
//           onChange={(e) => setGuests(Number(e.target.value))}
//           className="w-full p-2 border border-gray-300 rounded"
//         >
//           {Array.from({ length: maxGuests }, (_, i) => i + 1).map((num) => (
//             <option key={num} value={num}>
//               {num} {num === 1 ? 'traveler' : 'travelers'}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="border-t border-gray-200 pt-4 mb-6">
//         <div className="font-bold">Total: $0</div>
//         <div className="text-sm text-gray-600">
//           Total includes fees, not tax
//         </div>
//       </div>

//       <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700">
//         Book now
//       </button>

//       <div className="text-center text-sm text-gray-600 mt-4">
//         You will not be charged yet
//       </div>

//       <button className="w-full text-blue-600 font-medium mt-4 hover:underline">
//         Contact host
//       </button>

//       <div className="text-center text-sm text-gray-500 mt-4">
//         Property #{rooms[0]?.name || 'N/A'}
//       </div>
//     </div>
//   );
// };

// export default BookingCard;
"use client";


import { useState } from 'react';
import { Hotel } from '@/types/hotel';

interface BookingCardProps {
  hotel: Hotel;
}

const BookingCard: React.FC<BookingCardProps> = ({ hotel }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  const maxGuests = Math.max(...hotel.rooms.map(room => room.capacity));

  return (
    <div className="sticky top-5 bg-white border-2 border-gray-200 rounded-lg p-6">
      <div className="bg-indigo-900 text-white p-4 rounded-lg mb-6">
        <div className="flex items-center gap-2">
          <span className="text-xl">⭐</span>
          <p>Members get our best prices when signed in!</p>
        </div>
        <button className="mt-2 text-sm font-medium hover:underline">Sign in</button>
      </div>

      <div className="mb-4">
        <span className="text-2xl font-bold">${hotel.pricing.baseRate}</span>
        <span className="text-gray-600"> per night</span>
      </div>

      <div className="text-green-600 mb-4">Free cancellation</div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex flex-col">
          <label className="text-sm mb-1">Check-in</label>
          <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="p-2 border border-gray-300 rounded" />
        </div>
        <div className="flex flex-col">
          <label className="text-sm mb-1">Check-out</label>
          <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="p-2 border border-gray-300 rounded" />
        </div>
      </div>

      <div className="mb-6">
        <label className="text-sm mb-1 block">Guests</label>
        <select value={guests} onChange={(e) => setGuests(Number(e.target.value))} className="w-full p-2 border border-gray-300 rounded">
          {Array.from({ length: maxGuests }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num} {num === 1 ? 'traveler' : 'travelers'}
            </option>
          ))}
        </select>
      </div>

      <div className="border-t border-gray-200 pt-4 mb-6">
        <div className="font-bold">Total: $0</div>
        <div className="text-sm text-gray-600">Total includes fees, not tax</div>
      </div>

      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700">Book now</button>

      <div className="text-center text-sm text-gray-600 mt-4">You will not be charged yet</div>

      <button className="w-full text-blue-600 font-medium mt-4 hover:underline">Contact host</button>

      <div className="text-center text-sm text-gray-500 mt-4">Property #{hotel.rooms[0]?.name || 'N/A'}</div>
    </div>
  );
};

export default BookingCard;