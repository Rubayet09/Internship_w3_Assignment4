import { ImageController } from '../controllers/ImageController';
import multer from 'multer';
import path from 'path';
import { HotelService } from '../services/HotelService';
import { Router, Request, Response, NextFunction } from 'express';

//Request
interface HotelImageRequest extends Request {
  params: {
      hotelId: string;
  };
  files: Express.Multer.File[];
}

const imageRouter = Router();

// Configure multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix);
    }
  });

 // Add file filter for security
const fileFilter = (_req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  const allowedMimes = ['image/jpeg', 'image/png', 'image/gif'];
  if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
  } else {
      cb(new Error('Invalid file type'));
  }
};

const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: {
      fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

imageRouter.post(
  '/hotels/:hotelId/images',
  upload.array('images'),
  (req: Request, res: Response, next: NextFunction) => {
    const typedReq = req as HotelImageRequest;
    
    const handleUpload = async () => {
      try {
          const hotelId = typedReq.params.hotelId;
          const files = typedReq.files;

          if (!files || files.length === 0) {
              res.status(400).json({ error: 'No images uploaded' });
              return;
          }

          const imageUrls = await HotelService.updateHotelImages(hotelId, files);
          res.status(200).json({ imageUrls });
      } catch (error) {
          next(error);
      }
  };

  handleUpload();
}
);

export default imageRouter;