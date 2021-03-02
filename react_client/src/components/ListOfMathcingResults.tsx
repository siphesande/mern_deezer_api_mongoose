import React from 'react';
import { useSelector } from 'react-redux';
import Loading from './Loading';
import NothingToShow from './NothingToShow';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles from "./styles";



const ListOfMathcingResults: React.FC = () => {
  const classes = useStyles();
  let artists_results = useSelector(state => state.artists.artists_list);
  let loading = useSelector(state => state.artists.loading);
  let error = useSelector(state => state.artists.error);
  
  if (error) {
    return <Typography variant="h4" color="error">Error! Failed to seach or load artists!</Typography>
  }

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
          <div>

            { artists_results.length === 0 || !artists_results ?
              <NothingToShow />
              :
              <List className={classes.root}>
                {
                  artists_results.map((item:any, key:number) => (
                    <div className="list_item_container">

                    <ListItem
                      className={classes.listItem}
                      key={item.id}
                      alignItems="center"
                      divider
                      button
                      component={Link}
                      to={`/artist/${item.id}`}
                    >

                      <img src={item.picture_medium} alt="img" />
                      <ListItemText primary={`${item.name}`} />
                      <ListItemText primary={`Fans: ${item.nb_fan}`} />
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
};

export default ListOfMathcingResults;