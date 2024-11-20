# React and NextJS Internship Assignment 4
This repository contains Assignment 4 for the React and NextJS nternship program. The project highlights the implementation of advanced NextJS concepts, which integrates with a Backend API implemented with NodeJS and ExpressJS. Throughout the project TypeScript have been used to ensure scalability and maintainability.

## Project Overview
The project demonstrates

A server-side, component-based application using React and Next.js for the Frontend part and integrated with a Backend API developed with ExpressJS and NodeJS.

### Project Structure - Backend_A3
├── data/
│   ├── hotels.json
├── src/
│   ├── controllers/    
│   ├── routes/         
│   ├── middlewares/            
│   ├── utils/         
│   ├── types/
│   ├── services
├── app.js              
├── package.json           
   
### Project Structure - Frontend_A4
├── app/
│   ├── [hotel-details/[slug]/[hotelId]]/
│   ├── globals.css 
│   ├── layout.tsx 
├── components/   
│   ├── booking/    
│   ├── gallery/         
│   ├── location/  
│   ├── navigation/
│   ├── property/    
│   ├── reviews/             
├── lib/
├── public/
├── types/
│   ├── hotel.ts    
├── next-env.d.ts
├── next.config.ts 
├── package-lock.json
├── postcss.config,mjs          
├── package.json 
├── tailwind.config.ts 
├── tsconfig.json       
└── README.md   


## Key Features
Component-based application: a serverside component basd application using react and nextJS.

Dynamic Routing: Flexible routing with parameters.

Scalable Design: Modular structure for easier maintenance and scalability.

## Prerequisites
Ensure the following are installed on your system:

React
Node.js (v16 or higher)
npm

## Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/Rubayet09/Internship_w3_Assignment4.git
cd Internship_w3_Assignment4
npm install
npm install axios
npm install eslint prettier eslint-plugin-react eslint-config-prettier eslint-plugin-prettier
```
Set up the database by configuring the connection string in the config/ directory.

## Usage
Start the backend:
```bash
npm run dev
```
The application will run on http://localhost:3000 by default.

Make sure API Endpoint: GET	/api/items/:id	Retrieve a single item by ID works.
``` bash
http://localhost:3000/api/hotels/3dcc829e-cb40-4e58-9bd0-cbfb6605f923
```
The hotel details should be on your browser.

Next for the frontend:
```bash
npm run dev
```
The application will run on http://localhost:3001 

Make sure about the URL format: [hotel-details/[slug]/[hotelId]]

The hotel details should be on your browser.


## Author
Rubayet Shareen
Software Engineer Intern

