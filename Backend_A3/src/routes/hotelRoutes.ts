import { Router } from 'express';
import { HotelController } from '../controllers/HotelController';
import { ValidationMiddleware } from '../middleware/ValidationMiddleware';


const hotelRouter = Router();
hotelRouter.post('/', ValidationMiddleware.validateHotelData, HotelController.createHotel);

//hotelRouter.post('/', HotelController.createHotel);
hotelRouter.get('/:hotelId', HotelController.getHotelById);
hotelRouter.put('/:hotelId', HotelController.updateHotelById);

//module.exports = hotelRouter;
export default hotelRouter;