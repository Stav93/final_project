import React from 'react'
// import Login from '../Login/Login.js';
import { Route, Routes } from 'react-router-dom';
import UserProfile from '../components/User/UserProfile/UserProfile.js';
import SignUp from "../components/SignUp/SignUp.js"
// import AddDog from '../Dogs/AddDog/AddDog.js';
// import ParksList from '../Parks/ParksList/ParksList.js';
// import Park from '../Parks/Park/Park.js';
import App from "../App.js"

function AppRoutes() {

  return (

    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/sign-up" element={<SignUp />} />
   </Routes>

    // <Routes>
    //   {/* לוגין */}
    //   {/* <Route path='/login' element={(<Login/>)} />  */}
    
    //   {/* פרופיל */}
    //   <Route path='/profile/:profileName' element={( <UserProfile />)}/>
    //   <Route path='/profile/:profileName/:dogName' element={(<AddDog/>)} />
          
    //   {/* גינות */}
    //   <Route path='/parks' element={(<ParksList />)}/>
    //   <Route path='/parks/:parkName' element={(<Park/>)} /> 
    // </Routes>
  )
}

export default AppRoutes