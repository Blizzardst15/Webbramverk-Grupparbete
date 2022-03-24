import React,{useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import "./Huvud.css"
import axios from "axios";

const Huvud = () => {
    const [activeTab, setActiveTab]= useState("Huvud");
    
    const location = useLocation();
    useEffect(()=>{
        if(location.pathname === "/bomi/pages/jensen"){
            setActiveTab("Huvud")
        }else if(location.pathname === "/bomi/pages/add"){
            setActiveTab("AddUser")
        }else if(location.pathname ==="/bomi/pages/about") {
            setActiveTab("About")
        }
    },[location])
    
    return (
    <div className="huvud">
        <p className="logo">Students Management System</p>
        <div className="huvud-right">
            <Link to ="/bomi/pages/jensen">
                <p style={{marginTop:"100px"}} className={`${activeTab ==="Huvud" ? "active" : ""}` } onClick={()=> setActiveTab("Huvud")}>Jensen YH </p>
            </Link>
            <Link to ="/bomi/pages/add">
                <p style={{marginTop:"100px"}} className={`${activeTab ==="AddUser" ? "active" : ""}` } onClick={()=> setActiveTab("AddUser")}>Add Student</p>
            </Link>
            <Link to ="/bomi/pages/about">
                <p style={{marginTop:"100px"}} className={`${activeTab ==="About" ? "active" : ""}` } onClick={()=> setActiveTab("About")}>About</p>
            </Link>
        </div>
    </div>
    )
}

export default Huvud;