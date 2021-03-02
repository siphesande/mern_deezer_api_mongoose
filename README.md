# mern_deezer_api_mongoose

> Express, React, MongoDB, Deezer API app that uses the Deezer API API to retrieve a list artists and their albums.

You input a word/term on the input form. The user see a list/grid of search results displaying a list of mathcing results

## Quick Start
```# On the terminal

# Install dependencies (server & react_client)npm install (You can also use yarn to install)
cd backend && npm install

# Server only (:5000) On the terminal 
npm run dev or node server
cd react_client && npm install 

# On Front/Client only (:3000)npm start 

# Build for production (Builds into server ./public)
cd frontend && npm run build

# .env file
On the backend you need to add  the  .env file  with environment variables.MONGO_URI= PUT_YOUR_MONGODB_URI_HERE
PORT = 5000
ACCESS_TOKEN = PUT_DEEZER_ACCES_TOKEN_HERE
SEARCH_URL = 'https://api.deezer.com'

# The backend is using Jest and Supertest for Testing 
To run tests
cd backend
npm test

```