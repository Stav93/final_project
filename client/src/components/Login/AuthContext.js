import React, { useState , useEffect, useContext, useMemo } from "react"

// סטייט דיפולטיבי ראשוני
//מחזיר אובייקט שמכיל קומפוננטת ריאקט
// AuthContext.Provider = הקומפוננטה
const AuthContext = React.createContext({});

// provider - לעטוף את כל מה שנרצה שיהיה לו גישה לקונטקסט
// consume it - vie useContext

  const AuthContextProvider = ({children}) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userLoggedObj, setUserLoggedObj] = 
  useState({isLoggedIn:false, name:"", email:"", password:""});

  useEffect(() => {
    const storedUserLoggedInInformaition = localStorage.getItem('isLoggedIn')

    if (storedUserLoggedInInformaition === "1") {
      // setIsLoggedIn(true);
      setUserLoggedObj({...userLoggedObj, isLoggedIn: true});
    }
  },[])
   
  const loginHandler = (name, email, password) => {
    //should check email and password
    localStorage.setItem("isLoggedIn","1")
    // setIsLoggedIn(true);
    setUserLoggedObj({isLoggedIn: true, name: name, email: email, password:password});
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    // setIsLoggedIn(false);
    setUserLoggedObj({...userLoggedObj, isLoggedIn: false});

  };

  const value = useMemo(() => ({
    // isLoggedIn: isLoggedIn,
    // isLogged: {isLoggedIn, name, email, password}
    userLoggedObj: userLoggedObj,
    onLogout: logoutHandler,
    onLogin: loginHandler,
  }), [userLoggedObj, logoutHandler, loginHandler]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );

}

function useAuthContext() {
  return useContext(AuthContext);
}

export {
  AuthContextProvider,
  useAuthContext,
};