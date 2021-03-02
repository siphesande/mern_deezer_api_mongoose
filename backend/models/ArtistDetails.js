import mongoose from 'mongoose';

// Create Schema
const ArtistDetailsSchema = new mongoose.Schema({
  artist_details: {
    type: [],
    required: true
  },
  createdAt: { type: Date, expires: '2m', default: Date.now }, //expires (a lifespan)
});

const ArtistDetails = mongoose.model('artistDetails', ArtistDetailsSchema);

export default ArtistDetails;