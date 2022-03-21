import React, {useCallback, useContext, useEffect, useMemo, useReducer, useState} from 'react';

const UsersContext = React.createContext({});

const UsersContextProvider = ({children}) => {
  const usersArray = [
    {
      "id": "622cf265ec0d6b987dd8405a",
      "name": "Stav Librowski",
      "email": "stavush93@hotmail.com",
      "city": "תל-אביב",
      "dogs": [],
      "favouriteParks":[]
  },
  {
      "id": "622cf336ec0d6b987dd8405b",
      "name": "Yair Walden",
      "email": "Yair@myEmail.com",
      "city": "תל-אביב",
      "dogs": [],
      "favouriteParks":[]
  },
  {
      "id": "622cf351ec0d6b987dd8405c",
      "name": "Dima Ruban",
      "email": "Dima@mail.com",
      "city": "תל-אביב",
      "dogs": [],
      "favouriteParks":[]
  },
  {
      "id": "622f7d1aec0d6b987dd8407f",
      "name": "Boaz Sachs",
      "email": "boaz@mail.com",
      "city": "תל-אביב",
      "dogs": [],
      "favouriteParks":[]
  }
  ]; 

  const [users, setUsers] = useState(usersArray);

  // useEffect(() => {
  //   fetch('/api/users')
  //     .then(response => response.json())
  //     .then(data => setUsers(data))
  // }, []);

  const value = useMemo( () => ({
    users: users
  }), [users]);

  return (
    <UsersContext.Provider value={value}>
      {children}
    </UsersContext.Provider>
  );

}

function useUsersContext() {
  return useContext(UsersContext);
}

export {
  UsersContextProvider,
  useUsersContext,
};