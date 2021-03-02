import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { Link, RouteComponentProps} from 'react-router-dom';
import ArtistCard from './ArtistCard';
import Albums from './Albums';




const ArtistDetailts  = ({ match }) => {
  let artists_results = useSelector(state => state.artists.artists_list);
  const [detailed_artist_array, setDetailedArtistArray] = useState([{
    id: '',
    name: '',
    nb_fan: '',
    picture_small: '',
    picture_medium: '',
    tracklist: []
}]);
  
  useEffect(() => {
    
    const artist_array = artists_results.filter(artists_item => artists_item.id == match.params.artist_id)
  if (artist_array){

    setDetailedArtistArray(artist_array)
  }
  }, []);

  console.log(detailed_artist_array[0])

  

  return (
    <div>
      <ArtistCard detailed_artist_array={detailed_artist_array} />
      <Albums detailed_artist_array={detailed_artist_array} /> 
    
    </div>
  );
}

export default ArtistDetailts;