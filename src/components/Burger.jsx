import burger from "../assets/icon-menu.svg";
import close from "../assets/icon-menu-close.svg"

import PropTypes from "prop-types"


function Burger({myClick, clicked}){
    return(
        clicked 
            ? <img src={close} className="btnClose" alt="close" onClick={myClick}/>
            : <img src={burger} alt="menu" onClick={myClick}/>
            
    )
}

export default Burger;

Burger.propTypes = {
    myClick: PropTypes.func,
    clicked: PropTypes.bool
}