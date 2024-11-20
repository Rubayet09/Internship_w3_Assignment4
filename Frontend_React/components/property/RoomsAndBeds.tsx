import React from 'react';
import { Room } from '@/types/hotel';

interface RoomsAndBedsProps {
  rooms: Room[];
  totalBathrooms: number;
}

const RoomsAndBeds = ({ rooms, totalBathrooms }: RoomsAndBedsProps) => {
  return (
    <section className="py-8 border-b border-gray-200">
      <h2 className="text-xl font-semibold mb-4">Rooms & beds</h2>
      
      <div className="mb-8">
        <h3 className="text-lg mb-4">
          {rooms.length} bedrooms (sleeps {rooms.reduce((acc, room) => 
            acc + room.beds.reduce((sum, bed) => sum + bed.count, 0), 0
          )})
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rooms.map((room, index) => (
            <div key={index} className="pb-4 border-b border-gray-200">
              <h4 className="font-medium mb-2">{room.name}</h4>
              {room.beds.map((bed, bedIndex) => (
                <div key={bedIndex} className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🛏</span>
                  <span>{bed.count} {bed.type} Bed</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg mb-2">{totalBathrooms} bathroom</h3>
        <p>Full Bathroom</p>
      </div>
    </section>
  );
};

export default RoomsAndBeds;