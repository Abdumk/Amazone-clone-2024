import React ,{ useEffect, useState, useContext } from "react";

import Routinger from './Routinger';
import { reducer,initialState} from './Utility/Reducer';
import{DataProvider} from './components/DataProvider/DataProvider'


import {auth} from './Utility/firebase.js'
import { DataContext } from "./components/DataProvider/DataProvider";
import { Type } from "./Utility/Action.type"

function App() {
  const [loading, setLoading] = useState(true); // New loading state
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log("user is ----",authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({ type: Type.SET_USER, user: null });
      }
    });
  }, []);
 
  return (
  
   
      <Routinger />

  
  );
}

export default App;

