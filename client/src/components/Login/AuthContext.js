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
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, []);

  useEffect(() => {
    const storedUserLoggedInInformaition = localStorage.getItem('isLoggedIn')

    if (storedUserLoggedInInformaition === "1") {
      // setIsLoggedIn(true);
      setUserLoggedObj({...userLoggedObj, isLoggedIn: true});
    }
  },[])
   
  const loginHandler = (name, email, password) => {
    const userObj = users.find((user) => user.name === name)
    if (userObj) {
      if (name === userObj.name && email === userObj.email && password === userObj.password ) {
      localStorage.setItem("isLoggedIn","1")
      // setIsLoggedIn(true);
      setUserLoggedObj({isLoggedIn: true, name: name, email: email, password:password});
      } else {
        window.confirm('one or more is not correct')
      }
    }
     else {
      window.confirm('User Not Found')
    }
  };

  const signInHandler = () => {

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
    onSignIn: signInHandler,
    users: users,
  }), [users, userLoggedObj, logoutHandler, loginHandler]);

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