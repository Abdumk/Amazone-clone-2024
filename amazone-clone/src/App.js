import React from 'react'
import Routinger from './Routinger';
import { reducer,initialState} from './Utility/Reducer';
import{DataProvider} from './components/DataProvider/DataProvider'


function App() {
  return (
  //   <>

  //  <Routinger />
  
  //   </>
    <DataProvider reducer={ reducer} initialState={initialState} >
      <Routinger />

    </DataProvider>
  );
}

export default App;
