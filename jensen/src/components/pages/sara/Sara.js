import React from "react";
import "../style.css";
import "./Sara.css";
import Accordion from "./Accordion";
const Sara = () => {
    return (
        <div className="container">
            <Accordion title="Teachers information" content="sldkfwmp ojwjöwldlöfmöwlefölwe" />
            <Accordion title="Teachers information" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        </div>
    );
};

export default Sara;