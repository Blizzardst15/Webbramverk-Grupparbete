import React, { useState, useRef } from "react";
import "../style.css";
import "./Accordion.css";
import Chevron from "./Chevron";

const Accordion = ({
    description,
    fullName,
    title,
    onDelete,
    id, updateTeacher,
    editFullName,
    editDescription,
    updateDescription,
    updateFullName,
    updateTitle,
    updateBankAccount,
    editBankAccount,
    editTitle }) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const descriptionHeight = useRef(null);
    const [setRotate, setRotateState] = useState("accordion_icon");



    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "")
        setHeightState(setActive === "active" ? "0px" : `${descriptionHeight.current.scrollHeight}px`);
        setRotateState(setActive === "active" ? "accordion_icon" : "accordion_icon rotate");
    }

    return (
        <div className="accordion_section">

            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <p className="accordion_title">
                    Title:{title} Full name: {fullName}
                </p>

                <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
            </button>

            <div ref={descriptionHeight} style={{ maxHeight: `${setHeight}` }} className="accordion_content">

                <div className="accordion_text" dangerouslySetInnerHTML={{ __html: description }} />
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button class="btn btn-danger" onClick={() => onDelete(id)}>
                        Delete
                    </button>
                    <button class="btn btn-primary" onClick={() => updateTeacher(id)}>
                        Edit
                    </button>
                </div>
                <br /><br />
                <div>
                    <input value={updateFullName} onChange={(e) => {
                        editFullName(e.target.value)
                        console.log(updateFullName)
                    }} type="text" className="edit" placeholder="Full name" />
                    <input value={updateDescription} onChange={(e) => {
                        editDescription(e.target.value)
                        console.log(updateDescription)
                    }} type="text" className="edit" placeholder="Description" />
                    <input value={updateTitle} onChange={(e) => {
                        editTitle(e.target.value)
                        console.log(updateTitle)
                    }} type="text" className="edit" placeholder="Title" />
                    <input value={updateBankAccount} onChange={(e) => {
                        editBankAccount(e.target.value)
                        console.log(updateBankAccount)
                    }} type="text" className="edit" placeholder="Bank Account" />
                </div>

            </div>

        </div>
    );
};

export default Accordion;