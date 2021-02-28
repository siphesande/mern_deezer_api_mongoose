import mongoose from 'mongoose';

// Create Schema
const AlbumSchema = new mongoose.Schema({
  albums: {
    type: [],
    required: true
  },
  createdAt: { type: Date, expires: '30m', default: Date.now },
});

const Albums = mongoose.model('albums', AlbumSchema);

export default Albums;