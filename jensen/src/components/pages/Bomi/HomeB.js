//Båmi

import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./HomeB.css";
import axios from "axios";
import { toast } from 'react-toastify';


const HomeB = () => {
const [data, setData] = useState([]);

    useEffect(()=> {
        getUsers();
    }, []);

const getUsers = async () => {
    const response = await axios.get("http://localhost:8080/users")
    if ( response.status === 200) {
        setData(response.data);
    }
};

    const onDeleteUser = async (id) => {
        if(window.confirm("Are you sure to delete user?")) {
            const response = await axios.delete(`http://localhost:8080/user/${id}`)
            if (response.status === 200) {
                toast.success(response.data);
                getUsers();
            }
        }
    };

    console.log("data=>", data);

    return (
    <div style={{marginTop: "150px"}}>
        <table className= "styled-table">
            <thead>
                <tr>
                    <th style = {{textAlign: "center"}}> No. </th>
                    <th style = {{textAlign: "center"}}> fullName </th>
                
                    <th style = {{textAlign: "center"}}> email</th>
                    <th style = {{textAlign: "center"}}> major </th>
                    <th style = {{textAlign: "center"}}> action</th>
                </tr>
            </thead> 
            <tbody>
                {data && data.map((item, index) => {
                    return ( 
                        <tr key= {index}>
                            <th scope="row">{index +1}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.major}</td>
                        <td>
                            <Link to = {`/update/${item.id}`}>
                            <button className="btn btn-edit">Edit</button>
                            </Link>
                            <button className="btn btn-delete" onClick={()=> onDeleteUser(item.id)}>Delete</button>
                            <Link to = {`/view/${item.id}`}>
                            <button className="btn btn-view">View</button>
                            </Link>
                        </td>
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