import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {searchAlbums} from '../actions/actions';
import Loading from './Loading';
import NothingToShow from './NothingToShow';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles from "./styles";



const Albums = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const artist_name = props.detailed_artist_array[0].name
  const [term,  setTerm] = useState(props.detailed_artist_array[0].name);
  let albums_results = useSelector(state => state.albums.albums);
  let loading = useSelector(state => state.albums.loading_albums);
  let albums_error = useSelector(state => state.albums.albums_error);


  useEffect(() => {
    addSearchTerm()
    
  }, []);

// searching for albums of the artist
  const addSearchTerm = () => {
    dispatch(searchAlbums({
      artist_name
    }))
  }
 console.log(artist_name);
  

  if (albums_error) {
    return <Typography variant="h4" color="error">Error! Failed to seach or load albums!</Typography>
  }
 
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
          <div>

            { albums_results.length === 0 || !albums_results ?
              <NothingToShow />
              :
              <List className={classes.root}>
                {
                  albums_results.map((item, key) => (
                    <div className="list_item_container">

                    <ListItem
                      className={classes.listItem}
                      key={item.id}
                      alignItems="center"
                      divider
                      button
                    >

                      <img src={item.cover_medium} alt="img" />
                      <ListItemText primary={`Title: ${item.title}`} />
                      <ListItemText primary={`Number of tracks: ${item.nb_tracks}`} />
                    </ListItem>
                    </div>
                  ))
                }
              </List>
            }
          </div>
        )}
    </div>
  );
}

export default Albums;