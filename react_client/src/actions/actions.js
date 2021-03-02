
import axios from 'axios';

import {
  SEARCH_ARTISTS,
  SEARCH_ALBUMS,
  ARTISTS_ERROR,
  ALBUMS_ERROR,
  LOAD_ARTISTS,
  LOAD_ALBUMS,
  REFRESH_STATE

} from './types';


// SEARCH ARTIST
export const searchArtists = (data) => dispatch => {
  dispatch(setStateRefresh()); 
  dispatch(setArtistsLoading());
  axios
    .post("/api/artist_details", data)
    .then(res => {
      dispatch({
        type: SEARCH_ARTISTS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: ARTISTS_ERROR,
        payload: { msg: err }
      });
    });
};

//get ALBUMS
export const searchAlbums = (data) => dispatch => {
  dispatch(setStateRefresh()); 
  dispatch(setAlbumsLoading());
  axios
    .post('/api/albums', data)
    .then(res => {
      dispatch({
        type: SEARCH_ALBUMS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: ALBUMS_ERROR,
        payload: { msg: err }
      });
    });
};


//load ARTISTS
export const setArtistsLoading = () => {
  return {
    type: LOAD_ARTISTS,
  };
};

//load ALBUMS
export const setAlbumsLoading = () => {
  return {
    type: LOAD_ALBUMS,
  };
};

// REFRESH OUR STATE

export const setStateRefresh = () => {
  return {
    type: REFRESH_STATE,
  };
};


