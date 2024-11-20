import React from 'react';
import { HotelDetails } from '@/types/hotel';

interface PropertyInfoProps {
  hotel: HotelDetails;
}

const PropertyInfo = ({ hotel }: PropertyInfoProps) => {
  return (
    <section className="max-w-4xl">
      <h1 className="text-2xl font-bold mb-5">{hotel.title}</h1>
      
      <div className="flex items-center gap-3 mb-6">
        <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">
          {hotel.rating}
        </span>
        <span className="font-semibold">Exceptional</span>
        <a href="#reviews" className="text-blue-600 hover:underline">
          See all {hotel.totalReviews} reviews
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">
        <div className="flex items-center gap-2">
          <span className="text-xl">🛏</span>
          <span>{hotel.features.bedrooms} bedrooms</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xl">🛁</span>
          <span>{hotel.features.bathrooms} bathroom</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xl">🛉</span>
          <span>Sleeps {hotel.features.sleeps}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xl">⏍</span>
          <span>{hotel.features.squareFt} sq ft</span>
        </div>
      </div>
    </section>
  );
};

export default PropertyInfo;