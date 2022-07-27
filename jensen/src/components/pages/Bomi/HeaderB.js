//Båmi 

import React, { useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import "./HeaderB.css";

const HeaderB =() => {
    const [activeTab, setActtiveTab] = useState("homeB") ;

    const location = useLocation();
    useEffect(() => {
        if(location.pathname === "/homeB") {
            setActtiveTab("HomeB")
        } else if( location.pathname === "/add") {
            setActtiveTab ("AddUtbildning")
        } else if ( location.pathname ==="/about") {
            setActtiveTab("About")
        }
    }, [location])

    return (
        <div className="headerB">
            <p className= "logo"> Ansökan Utbildning</p>
            <div className= "header-right">
                <Link to = "/homeB">
                    <p className = {` $ { activeTab === "homeB ? "active : ""}`} onClick ={()=> setActtiveTab("homeB")}> 
                    Utbildning</p>
                </Link>
                <Link to = "/add">
                    <p className = {` $ { activeTab === "AddUtbindning ? "active : ""}`} onClick ={()=> setActtiveTab("AddUtbindning")}>
                        Add Utbildning</p>
                </Link>
                <Link to = "/about">
                    <p className = {` $ { activeTab === "About? "active : ""}`} onClick ={()=> setActtiveTab("About")}>
                        About</p>
                </Link>
            </div>
        </div>
    );
};

export default HeaderB;




