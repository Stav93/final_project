import React, { useEffect, useState, useContext } from 'react';

import Login from './components/Login/Login';
import UserProfile from "../src/components/User/UserProfile/UserProfile"
import Header from "../src/components/UI/Header/Header"
import { useAuthContext} from "../src/components/Login/AuthContext.js"

function App() {
  const ctx =  useAuthContext()
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const storedUserLoggedInInformaition = localStorage.getItem('isLoggedIn')

  //   if (storedUserLoggedInInformaition === "1") {
  //     setIsLoggedIn(true);
  //   }
  // },[])

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   localStorage.setItem("isLoggedIn","1")
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem('isLoggedIn');
  //   setIsLoggedIn(false);
  // };

  return (
    <>
      <Header/>
      <UserProfile/>
      <main>
        {/* {!ctx.userLoggedObj.isLoggedIn && <Login/>}
        {ctx.userLoggedObj.isLoggedIn && <UserProfile/>} */}
      </main>
    </>
  );
}

export default App;

  // return (
  //   <DogsProvider>
  //   <>
  //      <MainHeader/>
  //      <ParksList/>
  //      <DogsList/>
  //   </>
  //   </DogsProvider>
  // );

