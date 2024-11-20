import request from 'supertest';
import { app } from '../src/app';
import fs from 'fs';
import path from 'path';

describe('ImageController', () => {
  describe('POST /images', () => {
    it('should upload images and update hotel records', async () => {
      const hotelId = 'test-hotel-id';
      const imageFiles = [
        { fieldname: 'images', originalname: 'image1.jpg', path: 'tests/fixtures/image1.jpg' },
        { fieldname: 'images', originalname: 'image2.jpg', path: 'tests/fixtures/image2.jpg' },
      ];

      const response = await request(app)
        .post('/api/images')
        .field('hotelId', hotelId)
        .attach('images', fs.readFileSync(imageFiles[0].path), imageFiles[0].originalname)
        .attach('images', fs.readFileSync(imageFiles[1].path), imageFiles[1].originalname);

      expect(response.status).toEqual(200);
      expect(response.body.imageUrls).toHaveLength(2);

      // Check if the uploaded images exist in the uploads directory
      imageFiles.forEach((file) => {
        const uploadedFilePath = path.join('uploads', `test-hotel-slug-${path.basename(file.path)}`);
        expect(fs.existsSync(uploadedFilePath)).toBe(true);
      });
    });
  });

  // Add more tests for other image-related functionality
});