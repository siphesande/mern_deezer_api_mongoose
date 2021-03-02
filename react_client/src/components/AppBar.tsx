import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {searchArtists} from '../actions/actions';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';

import SearchIcon from '@material-ui/icons/Search';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import { Link } from 'react-router-dom';
import useStyles from "./AppBarStyle";


export default function MainAppBar() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [term, setTerm] = useState('')

  const addSearchTerm = (event) => {
    event.preventDefault()
    dispatch(searchArtists({
      term
    }))
  }

  console.log(term);

  return (
    <div className={classes.appBarRoot}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} component={Link} to="/" color="inherit" aria-label="menu">
            <EqualizerIcon />
          </IconButton>
          <div className={classes.search}>
          <form className="search_form" onSubmit={addSearchTerm}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
          </form>
        </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}