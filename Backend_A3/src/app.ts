// import express from 'express';

// import cors from 'cors';
// import { HotelService } from './services/HotelService';
// import hotelRoutes from './routes/hotelRoutes';
// import imageRoutes from './routes/imageRoutes';


// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));
// app.use('/uploads', express.static('uploads'));

// // Initialize HotelService
// HotelService.initialize().catch(console.error);

// app.use('/api/hotels', hotelRoutes);
// app.use('/api', imageRoutes);

// // Error handling middleware
// app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
//   console.error(err.stack);
//   res.status(500).json({ error: err.message });
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// export default app;



import express from 'express';
import cors from 'cors';
import { HotelService } from './services/HotelService';
import hotelRoutes from './routes/hotelRoutes';
import imageRoutes from './routes/imageRoutes';

const app = express();

// Improved CORS configuration
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'], // Add your frontend URLs
  methods: ['GET', 'POST', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

// Initialize HotelService
HotelService.initialize().catch(console.error);

app.use('/api/hotels', hotelRoutes);
app.use('/api', imageRoutes);

// Improved error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ 
    error: 'Internal Server Error',
    message: err.message 
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;