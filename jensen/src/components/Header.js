import { Outlet, Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <div className="fixed-header">
            <nav>

                <Link to="/" style={{ textDecoration: "none", color: "white", paddingRight: '20px', paddingLeft: '20px' }}>Home</Link>
                <Link to="/sara" style={{ textDecoration: "none", color: "white", paddingRight: '20px', paddingLeft: '20px' }}>sara</Link>
                <Link to="/bomi" style={{ textDecoration: "none", color: "white", paddingRight: '20px', paddingLeft: '20px' }}>bomi</Link>
                <Link to="/kristofer" style={{ textDecoration: "none", color: "white", paddingRight: '20px', paddingLeft: '20px' }}>kristofer</Link>
                <Link to="/erik" style={{ textDecoration: "none", color: "white", paddingRight: '20px', paddingLeft: '20px' }}>Erik</Link>

            </nav>

            <Outlet />
        </div>
    )
};

export default Header;