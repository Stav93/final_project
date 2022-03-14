import React, { useEffect, useState } from 'react';
import MainHeader from "./components/UI/MainHeader/MainHeader.js"
import AppRoutes from "./components/UI/AppRoutes.js"

function App() {

  return (
    <React.Fragment>
      <MainHeader/>
      <AppRoutes/>
    </React.Fragment>
  );
}

export default App;

