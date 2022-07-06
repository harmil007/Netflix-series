import React from 'react';
import Netflix from './Netflix.jsx';
import Amazon from './Amazon.jsx';

const favserise = "Netflix";
 

const App = () => (
   <>
      <h1 className='main__heading'>LIST OF TOP 5 NETFLIX SERIES IN 2022</h1>
      {/* <FavS /> */}
      {(favserise === "Netflix") ? <Netflix /> :<Amazon />}
   </>
);

export default App;
