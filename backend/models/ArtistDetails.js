import mongoose from 'mongoose';

// Create Schema
const ArtistDetailsSchema = new mongoose.Schema({
  artist_details: {
    type: [],
    required: true
  },
  createdAt: { type: Date, expires: '30m', default: Date.now }, //a lifespan of 30 mim
});

const ArtistDetails = mongoose.model('artistDetails', ArtistDetailsSchema);

export default ArtistDetails;