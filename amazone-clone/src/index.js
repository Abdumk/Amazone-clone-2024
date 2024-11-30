import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
// import { reducer,initialState} from './Utility/Reducer';
// import{DataProvider} from './components/DataProvider/DataProvider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <DataProvider reducer={ reducer} initialState={initialState} > */}
    <App />
    {/* </DataProvider> */}
  </React.StrictMode>
);

