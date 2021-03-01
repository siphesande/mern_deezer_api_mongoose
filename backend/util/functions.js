import fetch from 'node-fetch';
import config from '../config/index.js';


export async function showArtists(search_term) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Authorization': `${config.ACCESS_TOKEN}`
        },
    };
    try {
        let response = await fetch(`${config.SEARCH_URL}/search/artist?q=${search_term}`, requestOptions);
        let artists_list = await response.json();
        let results = artists_list.data
        let shorten_results = results.map(item => ({
            id: item.id,
            name: item.name,
            nb_fan: item.nb_fan,
            picture_small: item.picture_small,
            tracklist: item.tracklist
        }))
        return shorten_results;

    } catch (e) {
        console.log({ msg: e.message });
    }
}
export async function showAlbums(search_term) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Authorization': `${config.ACCESS_TOKEN}`
        },
    };
    try {
        let response = await fetch(`${config.SEARCH_URL}/search/album?q=eminem`, requestOptions);
        let artists_list = await response.json();
        let results = artists_list.data
        let shorten_results = results.map(item => ({
            id: item.id,
            title: item.title,
            cover_small: item.cover_small,
            nb_tracks: item.nb_tracks,
            tracklist: item.record_type
        }))
        return shorten_results;


    } catch (e) {
        console.log({ msg: e.message });
    }
}