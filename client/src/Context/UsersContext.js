import React, {useCallback, useContext, useEffect, useMemo, useReducer, useState} from 'react';

const UsersContext = React.createContext({});

const UsersContextProvider = ({children}) => 
{const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, []);

  const value = useMemo(() => ({
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