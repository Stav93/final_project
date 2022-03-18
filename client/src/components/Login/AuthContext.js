import React, { useState , useEffect } from "react"

// סטייט דיפולטיבי ראשוני
//מחזיר אובייקט שמכיל קומפוננטת ריאקט
// AuthContext.Provider = הקומפוננטה
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformaition = localStorage.getItem('isLoggedIn')

    if (storedUserLoggedInInformaition === "1") {
      setIsLoggedIn(true);
    }
  },[])
   
  const loginHandler = (email, password) => {
    //should check email and password
    localStorage.setItem("isLoggedIn","1")
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return <AuthContext.Provider value={{
    isLoggedIn: isLoggedIn,
    onLogout: logoutHandler,
    onLogin: loginHandler,
  }}>
    {props.children}
  </AuthContext.Provider>
}

export default AuthContext;