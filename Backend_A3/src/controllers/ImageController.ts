
import { Request, Response } from 'express'; 
import multer from 'multer';
import { HotelService } from '../services/HotelService';

const upload = multer({ dest: 'uploads/' });

export class ImageController {
  static uploadImages = [
    upload.array('images'),
    async (req: Request, res: Response) => {
      try {
        const { hotelId } = req.body;

        // Type check for req.files and handle undefined or invalid type cases
        if (!req.files || !Array.isArray(req.files)) {
          throw new Error('No files uploaded or invalid file format');
        }

        const imageUrls = await HotelService.updateHotelImages(hotelId, req.files as Express.Multer.File[]);
        res.status(200).json({ imageUrls });
      } catch (error) {
        if (error instanceof Error) {
          res.status(400).json({ error: error.message });
        } else {
          res.status(400).json({ error: 'An unknown error occurred' });
        }
      }
    }
  ];
}
