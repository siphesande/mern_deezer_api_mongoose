import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI,
  ACCESS_TOKEN : process.env.ACCESS_TOKEN,
  SEARCH_URL : process.env.SEARCH_URL || 'https://api.deezer.com'
};
