export interface Hotel {
    id: string;
    slug: string;
    images: string[];
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
    address: {
      street: string;
      city: string;
      state: string;
      country: string;
      zip: string;
    };
    location: {
      latitude: number;
      longitude: number;
    };
    rooms: Room[];
  }
  
  export interface Room {
    slug: string;
    image: string;
    title: string;
    bedroomCount: number;
  }