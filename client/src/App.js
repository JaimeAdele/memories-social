import { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails';
import Auth from './components/Auth/Auth';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <GoogleOAuthProvider clientId='492237408024-db0ebg532k885kgp8qldgupgc1g6a3sm.apps.googleusercontent.com'>
      <BrowserRouter>
        <Container maxwidth='xl'>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Navigate to='/posts' />} />
            <Route path='/posts' exact element={<Home />} />
            <Route path='/posts/search' exact element={<Home />} />
            <Route path='/posts/:id' element={<PostDetails />} />
            {/* only go to auth page if user is not logged in */}
            <Route path='auth' element={user ? <Navigate to='/posts' /> : <Auth />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;