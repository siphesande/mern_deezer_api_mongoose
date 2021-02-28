import { Router } from 'express';

// Artist Details Model
import Albums from '../../models/Albums.js';
import {  showAlbums } from '../../util/functions.js';


const router = Router();

/**
 * @route   GET api/albums
 * @desc    Get All Albums
 * @access  Public
 */

router.get('/', async (req, res) => {
  try {
    const albums = await Albums.find();
    if (!albums) throw Error('No Artist Details');
    

    res.status(200).json(albums);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/**
 * @route   POST api/albums_details
 * @desc    Create An albums details
 * @access  Private
 */

router.post('/', async (req, res) => {
  console.log('server >', `${req.body.term}`)

  try{
    let find_albums_frm_db = await Albums.find({'albums': { $elemMatch:{ name: req.body.term }}})
    if (!find_albums_frm_db || find_albums_frm_db.length === 0){
      try {
        let show_albums = await showAlbums(req.body.term)
        
        if(show_albums){
          const newListOfAlbums = new Albums({
            artist_details: show_albums
          });
          const item = await newListOfAlbums.save();
          if (!item) throw Error('Something went wrong saving the item');
          //console.log(show_albums)
          res.status(200).json(show_albums);
        }
    
      } catch (e) {
        console.log({ msg: e.message });
        res.status(400).json({ msg: e.message });
      }

    }else{
      console.log('find_albums_frm_db')
      console.log(find_albums_frm_db)
      res.status(200).json(find_albums_frm_db);
    }
    
  }catch (e){

  }
 

});



export default router;
