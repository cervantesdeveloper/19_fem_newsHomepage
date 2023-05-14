import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function MobileMenu({className}){
    return (
        <div id="mobileMenu" className={className}>
            <nav className="nav-mobile">
                <NavLink to="./">Home</NavLink>
                <NavLink to="/new">News</NavLink>
                <NavLink to="/popular">Popular</NavLink>
                <NavLink to="/trending">Trending</NavLink>
                <NavLink to="/categories">Categories</NavLink>
            </nav>
        </div>
    )
}

export default MobileMenu;

MobileMenu.propTypes = {
    className: PropTypes.string
}