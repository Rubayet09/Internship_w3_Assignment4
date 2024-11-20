import { Request, Response, NextFunction } from 'express';

export class ValidationMiddleware {
  static validateHotelData(req: Request, res: Response, next: NextFunction): void {
    // Implement validation logic for hotel data
    const { title, description, guestCount } = req.body;

    if (!title || !description || guestCount < 1) {
        res.status(400).json({ error: 'Invalid hotel data' });
        return;
    }

    next();
  }
}