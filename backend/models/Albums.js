import mongoose from 'mongoose';

// Create Schema
const AlbumSchema = new mongoose.Schema({
  albums: {
    type: [],
    required: true
  },
  createdAt: { type: Date, expires: '30m', default: Date.now }, //a lifespan of 30 mim
});

const Albums = mongoose.model('albums', AlbumSchema);

export default Albums;