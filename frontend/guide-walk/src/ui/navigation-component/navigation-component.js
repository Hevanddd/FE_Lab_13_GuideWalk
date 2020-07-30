import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

const useStyles = makeStyles({
  root: {
    '& button': {
      width: '20%',
      minWidth: 50
    },
    position: 'fixed',
    bottom: 0,
    width: '100%'
  },
});

export const NavigationComponent = () => {
  
  const history = useHistory();

  const classes = useStyles();
  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(newValue);
  };

  return (
    <footer>
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
          <BottomNavigationAction label='Home' value='home' icon={<HomeOutlinedIcon />} />
          <BottomNavigationAction label='Add' value='add-route' icon={<AddCircleOutlineOutlinedIcon />} />
          <BottomNavigationAction label='Current' value='current-route' icon={<ExploreOutlinedIcon />} />
          <BottomNavigationAction label='Favourites' value='favourites' icon={<TurnedInNotOutlinedIcon />} />
          <BottomNavigationAction label='Profile' value='profile' icon={<PersonOutlineOutlinedIcon />} />
      </BottomNavigation>
    </footer>
  );
};
