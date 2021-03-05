import React from "react";
import {useTheme} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import useStyles from "./artistCardStyles";



const ArtistCard = (props) => {
  
  const classes = useStyles();
  const theme = useTheme();
  
  

  return (
    <div className="card_container">
      <div className="card_of_artist">
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
              {props.detailed_artist_array[0].name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                 Fan: {props.detailed_artist_array[0].nb_fan}
              </Typography>
            </CardContent>
            <div className={classes.controls}></div>
          </div>
          <CardMedia
            className={classes.cover}
            image={props.detailed_artist_array[0].picture_medium}
            title="Artist"
          />
        </Card>
      </div>

      <div className="topfive_artists">
        <Typography component="h5" variant="h5">
          Top 5 Tacks
        </Typography>
      </div>
    </div>
  );
};

export default ArtistCard;
