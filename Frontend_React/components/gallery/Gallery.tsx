// 'use client'

// import Image from 'next/image'
// import { useState } from 'react'
// import { images } from '@/types/hotel'
// import ActionButtons from './ActionButtons'  // Import the ActionButtons component

// interface GalleryProps {
//   photos: images[]
// }

// export function Gallery({ photos }: GalleryProps) {
//   const [showAllPhotos, setShowAllPhotos] = useState(false)

//   // Add handlers for the ActionButtons
//   const handleShare = () => {
//     // Implement share functionality
//     console.log('Share clicked')
//   }

//   const handleSave = () => {
//     // Implement save functionality
//     console.log('Save clicked')
//   }

//   return (
//     <div className="relative">
//       <div className="absolute top-4 left-4 z-10">
//         <button 
//           onClick={() => {}} 
//           className="text-gray-800 hover:text-gray-600"
//         >
//           ← See more photos
//         </button>
//       </div>
      
//       <div className="absolute top-4 right-4 z-10">
//         <ActionButtons 
//           onShare={handleShare}
//           onSave={handleSave}
//         />
//       </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//         <div className="md:col-span-2 aspect-[16/9] relative">
//           <Image
//             src={photos[0].url}
//             alt={photos[0].alt}
//             fill
//             className="object-cover rounded-lg transition-transform hover:scale-105"
//           />
//         </div>
        
//         <div className="hidden md:grid grid-rows-2 gap-4">
//           {photos.slice(1, 3).map((photo, index) => (
//             <div key={index} className="aspect-[4/3] relative">
//               <Image
//                 src={photo.url}
//                 alt={photo.alt}
//                 fill
//                 className="object-cover rounded-lg transition-transform hover:scale-105"
//               />
//             </div>
//           ))}
//         </div>
        
//         {showAllPhotos && (
//           <div className="grid grid-cols-3 gap-4 mt-4">
//             {photos.slice(3).map((photo, index) => (
//               <div key={index} className="aspect-square relative">
//                 <Image
//                   src={photo.url}
//                   alt={photo.alt}
//                   fill
//                   className="object-cover rounded-lg transition-transform hover:scale-105"
//                 />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Gallery

"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Hotel } from '@/types/hotel';
import ActionButtons from './ActionButtons';

interface GalleryProps {
  hotel: Hotel;
}

export function Gallery({ hotel }: GalleryProps) {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const handleShare = () => {
    console.log('Share clicked');
  };

  const handleSave = () => {
    console.log('Save clicked');
  };

  return (
    <div className="relative">
      <div className="absolute top-4 left-4 z-10">
        <button className="text-gray-800 hover:text-gray-600">← See more photos</button>
      </div>

      <div className="absolute top-4 right-4 z-10">
        <ActionButtons onShare={handleShare} onSave={handleSave} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {hotel.images.length > 0 && (
          <div className="md:col-span-2 aspect-[16/9] relative">
            <Image src={hotel.images[0].url} alt={hotel.title} fill className="object-cover rounded-lg transition-transform hover:scale-105" />
          </div>
        )}

        <div className="hidden md:grid grid-rows-2 gap-4">
          {hotel.images.slice(1, 3).map((image, index) => (
            <div key={index} className="aspect-[4/3] relative">
              <Image src={image.url} alt={`${hotel.title} - Image ${index + 2}`} fill className="object-cover rounded-lg transition-transform hover:scale-105" />
            </div>
          ))}
        </div>

        {showAllPhotos && (
          <div className="grid grid-cols-3 gap-4 mt-4">
            {hotel.images.slice(3).map((image, index) => (
              <div key={index} className="aspect-square relative">
                <Image src={image.url} alt={`${hotel.title} - Image ${index + 4}`} fill className="object-cover rounded-lg transition-transform hover:scale-105" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;