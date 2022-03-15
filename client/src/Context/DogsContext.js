import React, {useCallback, useContext, useMemo, useReducer, useState} from 'react';

const Context = React.createContext({});

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_DOG':
      return {
        ...state,
        dogs: [...state.dogs, action.payload.id],
      };

    case 'REMOVE_DOG':
      return {
        ...state,
        dogs: state.dogs.filter(dog => dog !== action.payload.id),
      };
  }
}

function DogsProvider({children}) {
  const [state, dispatch] = useReducer(reducer, {
    dogs: [],
  });

  const addDog = useCallback((id) => 
    dispatch({
      type: 'ADD_DOG',
      payload: {id},
    }));

  const removeDog = useCallback((id) => 
    dispatch({
      type: 'REMOVE_DOG',
      payload: {id},
    }));

  const value = useMemo(() => ({
    state, 
    addDog, 
    removeDog
  }), [state, dispatch]);

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

function useDogsContext() {
  return useContext(Context);
}

export {
  DogsProvider,
  useDogsContext,
};