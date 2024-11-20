// src/controllers/HotelController.ts
import { Request, Response } from 'express';
import { Hotel } from '../types/Hotel';
import { HotelService } from '../services/HotelService';
import { createSlug  } from '../utils/slugify';

export class HotelController {
  static async createHotel(req: Request, res: Response) {
    try {
      const hotelData: Hotel = req.body;
      const hotelId = await HotelService.createHotel(hotelData);
      res.status(201).json({ id: hotelId });
    } catch (error) {
        if (error instanceof Error) {
          res.status(400).json({ error: error.message });
        } else {
          res.status(400).json({ error: 'An unknown error occurred' });
        }
    }
    }
       // ... createHotel method
  
    static async getHotelById(req: Request, res: Response) {
        try {
          const { hotelId } = req.params;
          const hotel = await HotelService.getHotelById(hotelId);
          res.status(200).json(hotel);
        } catch (error) {
            if (error instanceof Error) {
                res.status(404).json({ error: error.message });
              } else {
                res.status(404).json({ error: 'An unknown error occurred' });
              }        }
      }
      static async updateHotelById(req: Request, res: Response) {
        try {
          const { hotelId } = req.params;
          const updatedHotelData = req.body;
          await HotelService.updateHotelById(hotelId, updatedHotelData);
          res.status(200).json({ message: 'Hotel updated successfully' });
        } catch (error){
            if (error instanceof Error) {
              res.status(400).json({ error: error.message });
            } else {
              res.status(400).json({ error: 'An unknown error occurred' });
            }
        }
  }
}

