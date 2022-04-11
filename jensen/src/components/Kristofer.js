import React from 'react';
import { SkolaList } from '../components/SkolaList';
import { AddSkola } from './AddSkola';
import { GlobalProvider } from "../components/context/GlobalState"

import './Kristofer.css'

function Kristofer() {
  return (
    <GlobalProvider>
    

      <div className="container">
        <br></br><br></br><br></br>
        <SkolaList />
        <AddSkola />
        
      </div>
    </GlobalProvider>
  );
}

export default Kristofer;
