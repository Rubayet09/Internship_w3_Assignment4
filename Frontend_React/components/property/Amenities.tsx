import React from 'react';
import { Amenity } from '@/types/hotel';

interface AmenitiesProps {
  amenities: Amenity[];
}

const Amenities = ({ amenities }: AmenitiesProps) => {
  return (
    <section className="my-8">
      <h2 className="text-xl font-semibold mb-6">Amenities</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {amenities.slice(0, 6).map((amenity, index) => (
          <div key={index} className="flex items-center gap-3 p-2">
            <span className="text-xl">{amenity.icon}</span>
            <span>{amenity.name}</span>
          </div>
        ))}
      </div>
      
      {amenities.length > 6 && (
        <button className="text-blue-600 hover:underline">
          See all {amenities.length} amenities
        </button>
      )}
    </section>
  );
};

export default Amenities;