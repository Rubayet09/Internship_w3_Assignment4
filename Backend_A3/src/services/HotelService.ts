import { Hotel } from '../types/Hotel';
import { Image } from '../types/Image';
import { createSlug  } from '../utils/slugify';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export class HotelService {
  private static hotelDataPath = 'data/hotels.json';
  private static uploadsPath = 'uploads';

    // Initialize necessary directories
  static async initialize(): Promise<void> {
    try {
      await fs.promises.mkdir('data', { recursive: true });
      await fs.promises.mkdir(this.uploadsPath, { recursive: true });
      
      // Create hotels.json if it doesn't exist
      if (!fs.existsSync(this.hotelDataPath)) {
        await fs.promises.writeFile(this.hotelDataPath, '[]');
      }
    } catch (error) {
      throw new Error(`Failed to initialize hotel service`);
    }
  }

  static async getHotels(): Promise<Hotel[]> {
    try {
      const data = await fs.promises.readFile(this.hotelDataPath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }
  static async getHotelById(hotelId: string): Promise<Hotel> {
    const hotels = await this.getHotels();
    const hotel = hotels.find((h) => h.id === hotelId);

    if (!hotel) {
      throw new Error('Hotel not found');
    }

    return hotel;
  }

  static async createHotel(hotelData: Hotel): Promise<string> {
    const hotels = await this.getHotels();
    const newHotel:  Hotel = {
        id: this.generateUniqueId(),
        slug: createSlug(hotelData.title),
        images: [],
        title: hotelData.title,
        description: hotelData.description,
        guestCount: hotelData.guestCount,
        bedroomCount: hotelData.bedroomCount,
        bathroomCount: hotelData.bathroomCount,
        amenities: hotelData.amenities,
        host: hotelData.host,
        address: hotelData.address,
        location: hotelData.location,
        rooms: hotelData.rooms,
      };
    
    hotels.push(newHotel);
    await this.saveHotels(hotels);
    return newHotel.id;
  }

  static async updateHotelById(hotelId: string, updatedData: Partial<Hotel>): Promise<void> {
    const hotels = await this.getHotels();
    const index = hotels.findIndex((h) => h.id === hotelId);

    if (index === -1) {
      throw new Error('Hotel not found');
    }

    const updatedHotel = { ...hotels[index], ...updatedData };
    hotels[index] = updatedHotel;
    await this.saveHotels(hotels);
  }

  private static generateUniqueId(): string {
    return uuidv4();
  }
  private static async saveHotels(hotels: Hotel[]): Promise<void> {
    await fs.promises.writeFile(this.hotelDataPath, JSON.stringify(hotels, null, 2));
  }

  static async updateHotelImages(hotelId: string, images: Express.Multer.File[]): Promise<string[]> {
    const hotels = await this.getHotels();
    const hotel = hotels.find((h) => h.id === hotelId);

    if (!hotel) {
      throw new Error('Hotel not found');
    }

    const imageUrls = await Promise.all(
      images.map(async (image) => {
        const fileExtension = path.extname(image.originalname);
        const imageUrl = `/uploads/${hotel.slug}-${image.filename}${fileExtension}`;
        // Move the uploaded file to the correct location
        await fs.promises.rename(image.path, `uploads/${hotel.slug}-${image.filename}${fileExtension}`);
        return imageUrl;
      })
    );

    hotel.images = imageUrls;
    await this.saveHotels(hotels);
    return imageUrls;
  }

  // Implement other CRUD methods for hotels
}