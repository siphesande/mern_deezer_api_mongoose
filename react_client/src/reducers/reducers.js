import { combineReducers } from 'redux';

import {
  SEARCH_ARTISTS,
  SEARCH_ALBUMS,
  ARTISTS_ERROR,
  ALBUMS_ERROR,
  LOAD_ARTISTS,
  LOAD_ALBUMS,
  REFRESH_STATE
} from '../actions/types';

// Initial state
const artistsState = {
  artists_list: [],
  error: null,
  loading: false
};


// Initial state
const albumsState = {
  albums: [],
  albulms_error: null,
  loading_albums: false
};

/**
 * 
 * @param {*} state 
 * @param {*} action 
 */

const artists = (state = artistsState, action) => {
  switch (action.type) {
    case SEARCH_ARTISTS:
      return {
        ...state,
        loading: false,
        artists_list: action.payload
      };

    case ARTISTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case LOAD_ARTISTS:
      return {
        ...state,
        loading: true,
      };
      case REFRESH_STATE:
        return {
          artists_list: [],
          error: null,
          loading: false
        };

    default:
      return state;
  }
};

const albums = (state = albumsState, action) => {
  switch (action.type) {
    case SEARCH_ALBUMS:
      return {
        ...state,
        loading_albums: false,
        albums: action.payload
      };
    case LOAD_ALBUMS:
      return {
        ...state,
        loading_albums: true,
      };
    case ALBUMS_ERROR:
      return {
        ...state,
        loading_albums: false,
        albums_error: action.payload
      };
    case REFRESH_STATE:
      return {
        albums: [],
        albulms_error: null,
        loading_albums: false
      };

    default:
      return state;
  }
};


export default combineReducers({
  artists,
  albums
});


