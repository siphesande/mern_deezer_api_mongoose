import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import config from './config/index.js';
import fetch from 'node-fetch'

// routes
import artistRoutes from './routes/api/artistDetails.js';
import albumRoutes from './routes/api/albums.js';

import {  showArtists } from './util/functions.js';



const { MONGO_URI } = config;

const app = express();


const UI_API_URL = 'http://localhost:3000';



// CORS Middleware
app.use(cors());
// Logger Middleware
app.use(morgan('dev'));
// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = `${MONGO_URI}`;

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Use Routes

app.use('/api/artist_details', artistRoutes);
//app.use('/api/albums', albumRoutes);
app.get('/', (req, res) => {
  res.status(200).json({ msg: "Deezer Search API" });
})

app.get('*', (req, res) => {
  res.status(404).json({ msg: "Not found!" });
});




export default app;
