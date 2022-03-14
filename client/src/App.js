import React, { useEffect, useState } from 'react';
import MainHeader from "./components/UI/MainHeader/MainHeader.js"
import Login from './components/User/Login/Login.js';
// import Home from './components/UI/Home/Home.js';


function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const storedUserLoggedInInformaition = localStorage.getItem('isLoggedIn')

  //   if (storedUserLoggedInInformaition === "1") {
  //     setIsLoggedIn(true);
  //   }
  // },[])

  // const loginHandler = (name, email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn","1")
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   setIsLoggedIn(false);
  // };

  return (
    <React.Fragment>
      <MainHeader/>
      <Login/>
      {/* <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main> */}
    </React.Fragment>
  );
}

export default App;
