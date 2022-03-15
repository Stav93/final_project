import React, { useEffect, useState } from 'react';
import MainHeader from "./components/UI/MainHeader/MainHeader.js"
import ParksList from "./components/Parks/ParksList/ParksList.js"
import DogsList from "./components/User/Dogs/DogsList/DogsList.js"
import AppRoutes from "./components/UI/AppRoutes.js"
import {DogsProvider} from "./Context/DogsContext"


function App() {

  return (
    <DogsProvider>
    <>
       <MainHeader/>
       <ParksList/>
       <DogsList/>
    </>
    </DogsProvider>
  );
}

export default App;

