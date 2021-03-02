import mongoose from 'mongoose';

// Create Schema
const AlbumSchema = new mongoose.Schema({
  albums: {
    type: [],
    required: true
  },
  createdAt: { type: Date, expires: '2m', default: Date.now }, //expires (a lifespan)
});

const Albums = mongoose.model('albums', AlbumSchema);

export default Albums;