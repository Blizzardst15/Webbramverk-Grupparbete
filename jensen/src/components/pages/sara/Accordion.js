import React, { useState, useRef } from "react";
import "../style.css";
import "./Accordion.css";
import Chevron from "./Chevron";

const Accordion = (props) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "")
        setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`);
    }
    return (
        <div className="accordion_section">

            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <p className="accordion_title">
                    {props.title}
                </p>
                <Chevron width={10} fill={"#777"} />
            </button>

            <div ref={content} style={{ maxHeight: `${setHeight}` }} className="accordion_content">

                <div className="accodion_text" dangerouslySetInnerHTML={{ __html: props.content }} />

            </div>

        </div>
    );
};

export default Accordion;