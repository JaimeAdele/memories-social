import { useState, useEffect } from 'react';
// useNavigate allows you to navigate to a page from the code
// useLocation allows you to know which page the user is on (and use a location variable to track when the page has changed)
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { jwtDecode } from 'jwt-decode';

import useStyles from './styles';
import memoriesLogo from '../../images/memoriesLogo.png';
import memoriesText from '../../images/memoriesText.png';
import { LOGOUT } from '../../constants/actionTypes';

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: LOGOUT });

    navigate('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = jwtDecode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <Link to='/' className={classes.brandContainer}>
        <img src={memoriesText} alt='icon' height='45px' />
        <img className={classes.image} src={memoriesLogo} alt='icon' height='40px'/>
      </Link>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.login}>
            <div className={classes.profile}> 
              <Avatar className={classes.purple} alt={user.result.name} src={user.result.picture}>{user.result.name.charAt(0)}</Avatar>
              <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
            </div>
            <Button variant='contained' className={classes.logout} color='secondary' onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to='/auth' variant='contained' color='primary'>Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar