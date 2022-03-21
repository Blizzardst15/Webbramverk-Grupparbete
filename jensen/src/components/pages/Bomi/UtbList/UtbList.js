import React from 'react';
import './UtbList.css';

const UtbList = props =>{
    // console.log(props.items);
    return (<ul className="utb-list">
            {props.utbs.map((utb)=> {
            return <li key={utb.id}>{utb.text}</li>
            })}  
        </ul>
    );
};

export default UtbList;