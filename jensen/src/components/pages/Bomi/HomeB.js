//Båmi

import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./HomeB.css";
import axios from "axios";


const HomeB = () => {
const [data, setDate] = useState([]);

    useEffect(()=> {
        getUsers();
    }, []);

const getUsers = async () => {
    const res = await axios.get("http://localhost:8080/users")
    if ( res.status === 200) {
        setData(res.data);
    }
};

    console.log("data=>", data);

    return (
    <div style={{marginTop: "150px"}}>
        <table className= "styled-table">
            <thead>
                <tr>
                    <th style = {{textAlign: "center"}}> No. </th>
                    <th style = {{textAlign: "center"}}> firstName </th>
                    <th style = {{textAlign: "center"}}> lastName</th>
                    <th style = {{textAlign: "center"}}> email</th>
                    <th style = {{textAlign: "center"}}> major </th>
                </tr>
            </thead> 
            <tbody>
                {data && data.map((item, index) => {
                    return ( 
                        <tr key= {index}>
                            <th scope="row">{index +1}</th>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.emailName}</td>
                        <td>{item.major}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    
    )
}

export default HomeB;




// import React from 'react'

// const HomeB = () => {
//     return (
//     <div>
//         <h2> Home B</h2>
//     </div>
//   )
// }

// export default HomeB








// const HeaderC = () => {
//     return (
//         <div>
//             <header >
//                 <h2 style={{textAlign: "center", 
//                             backgroundColor:"yellowGreen"}}>
//                 Jensen YH Utbildningar Search</h2>
//             </header>
//         </div>
//     )
// }

// export default HeaderC;