import request from 'supertest';
import  app  from '../src/app';

describe('HotelController', () => {
  describe('POST /hotel', () => {
    it('should create a new hotel', async () => {
      const hotelData = {
        title: 'Test Hotel',
        description: 'This is a test hotel',
        guestCount: 100,
      };

      const response = await request(app).post('/api/hotel').send(hotelData);
      expect(response.status).toEqual(201);
      expect(response.body.id).toBeDefined();
    });

    it('should return an error for invalid hotel data', async () => {
      const hotelData = {
        description: 'This is a test hotel',
        guestCount: 100,
      };

      const response = await request(app).post('/api/hotel').send(hotelData);
      expect(response.status).toEqual(400);
      expect(response.body.error).toBeDefined();
    });
  });

  // Add more tests for other endpoints
});