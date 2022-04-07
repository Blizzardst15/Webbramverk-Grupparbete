import React, { useState, useRef } from "react";
import "../style.css";
import "./Accordion.css";
import Chevron from "./Chevron";

const Accordion = ({ description, fullName, title, onDelete, id, onEdit }) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const descriptionHeight = useRef(null);
    const [setRotate, setRotateState] = useState("accordion_icon");
    const [editInput, setEditInput] = useState("0px")

    // function editFunction() {
    //     setActiveState(setActive === "" ? "active" : "")
    //     setEditInput(setActive === "active" ? "0px" : '20px');
    // }


    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "")
        setHeightState(setActive === "active" ? "0px" : `${descriptionHeight.current.scrollHeight}px`);
        setRotateState(setActive === "active" ? "accordion_icon" : "accordion_icon rotate");
    }

    return (
        <div className="accordion_section">

            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <p className="accordion_title">
                    {fullName}
                </p>

                <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
            </button>

            <div ref={descriptionHeight} style={{ maxHeight: `${setHeight}` }} className="accordion_content">

                <div className="accordion_text" dangerouslySetInnerHTML={{ __html: description }} />
                <button onClick={() => onDelete(id)}>
                    Delete teacher {id}
                </button> <br />
                <button onClick={() => onEdit(id)}>
                    Edit teacher {id}
                </button>
                <div className={`edit ${editInput}`} >
                    <input value={fullName} type="text" className="edit" placeholder="full name" />
                    <input value={fullName} type="text" className="edit" placeholder="description" />
                </div>

            </div>

        </div>
    );
};

export default Accordion;