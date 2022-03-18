import React,{useState} from 'react';
import './Info.css';
import UtbList from './UtbList/UtbList';
import NewUtb from './NewUtb/NewUtb';


const Info = ()=>{
  const [utbNames, setUtbNames]= useState([

    {id: 'utb1', text: 'Frontendutvecklare inriktning webbsäkerhet'},
    {id: 'utb1', text: 'AI Developer'},
    {id: 'utb1', text: 'Cloud Amazon webbservice'},
    {id: 'utb1', text: 'Teknisk testare'},
  ]);

  const addNewUtbHandler = newUtb =>{
    setUtbNames((preUtbNames)=>{
      return preUtbNames.concat(newUtb);
    });
    // setUtbNames(utbNames.concat(newUtb));
    // utbNames.push(newUtb);
    // console.log(utbNames);
  };

  
  return(
    <div className="kurs-app">
      <h1 title="Jensen YH">Välkommen,<span> Ansökan</span> till Jensens utbildiningar!</h1>
      <h2>utbildiningar Info</h2>
      <h3>(Ny utbildning: IT 💻 & music ♩♪♫♬♭♮♯ & eating broadcasting 🍣🍳🍔🍟!)</h3>
      <NewUtb  onAddUtb ={addNewUtbHandler}/>
      <UtbList utbs ={utbNames}/>
    </div>
  )
}






export default Info;


