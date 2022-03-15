import React from 'react'
import Login from '../User/Login/Login.js';
import { Route, Routes } from 'react-router-dom';
import UserProfile from '../User/UserProfile/UserProfile.js';
import AddDog from '../User/Dogs/AddDog/AddDog.js';
import ParksList from '../Parks/ParksList/ParksList.js';
import Park from '../Parks/Park/Park.js';

function AppRoutes() {

  return (

    <Routes>
      {/* לוגין */}
      {/* <Route path='/login' element={(<Login/>)} />  */}
    
      {/* פרופיל */}
      <Route path='/profile/:profileName' element={( <UserProfile />)}/>
      <Route path='/profile/:profileName/:dogName' element={(<AddDog/>)} />
          
      {/* גינות */}
      <Route path='/parks' element={(<ParksList />)}/>
      <Route path='/parks/:parkName' element={(<Park/>)} /> 
    </Routes>
  )
}

export default AppRoutes