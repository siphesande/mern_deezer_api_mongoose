import { Router } from 'express';

// Artist Details Model
import ArtistDetails from '../../models/ArtistDetails.js';
import {  showArtists } from '../../util/functions.js';


const router = Router();

/**
 * @route   GET api/artist_details
 * @desc    Get All Artists
 * @access  Public
 */

router.get('/', async (req, res) => {
  try {
    const artist_details = await ArtistDetails.find();
    if (!artist_details) throw Error('No Artist Details');
    

    res.status(200).json(artist_details);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/**
 * @route   POST api/artists_details
 * @desc    Create An Artists details
 * @access  Private
 */

router.post('/', async (req, res) => {
  console.log('server >', `${req.body.term}`)

  try{
    let find_artists_frm_db = await ArtistDetails.find({'artist_details': { $elemMatch:{ name: req.body.term }}})
    if (!find_artists_frm_db || find_artists_frm_db.length === 0){
      try {
        let show_artists = await showArtists(req.body.term)
        
        if(show_artists){
          const newListOfArtists = new ArtistDetails({
            artist_details: show_artists
          });
          const item = await newListOfArtists.save();
          if (!item) throw Error('Something went wrong saving the item');
          //console.log(show_artists)
          res.status(200).json(show_artists);
        }
    
      } catch (e) {
        console.log({ msg: e.message });
        res.status(400).json({ msg: e.message });
      }

    }else{
      console.log('find_artists_frm_db')
      console.log(find_artists_frm_db)
      res.status(200).json(find_artists_frm_db);
    }
    
  }catch (e){

  }
 

});



export default router;
