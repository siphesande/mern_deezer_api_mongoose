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
            picture_medium: item.picture_medium,
            tracklist: async() => {
                try {
                    let tacks_response = await fetch(`${item.tracklist}`, requestOptions)
                    let track_list = await tacks_response.json();
                    let results = track_list.data
                    return tacklist_results;




                } catch (e) {
                    console.log({ msg: e.message });
                }

            }
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
        let response = await fetch(`${config.SEARCH_URL}/search/album?q=${search_term}`, requestOptions);
        let artists_list = await response.json();
        let results = artists_list.data

        let album_results = results.map(item => ({
            id: item.id,
            title: item.title,
            cover_medium: item.cover_medium,
            nb_tracks: item.nb_tracks,
        }))
        return album_results;


    } catch (e) {
        console.log({ msg: e.message });
    }
}


// export async function getArtistsWithtrackList(show_artists) {
//     const requestOptions = {
//         method: 'GET',
//         headers: {
//             'Authorization': `${config.ACCESS_TOKEN}`
//         },
//     };
//     try {
//         let tacks_response = await fetch(`${show_artists.tracklist}`, requestOptions)
//         let track_list = await tacks_response.json();
//         let results = track_list.data

//         let tacklist_results = show_artists.map(item => ({
//             id: item.id,
//             name: item.name,
//             nb_fan: item.nb_fan,
//             picture_small: item.picture_small,
//             picture_medium: item.picture_medium,
//             tracklist: results

//         }))
//         return tacklist_results;


//     } catch (e) {
//         console.log({ msg: e.message });
//     }
// }


