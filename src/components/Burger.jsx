import PropTypes from "prop-types"


function Burger({myClick, clicked}){
    return(
        clicked 
            ? <img src="https://19-fem-news-home.netlify.app/src/assets/icon-menu-close.svg" className="btnClose" alt="close" onClick={myClick}/>
            : <img src="https://19-fem-news-home.netlify.app/src/assets/icon-menu.svg" alt="menu" onClick={myClick}/>
            
    )
}

export default Burger;

Burger.propTypes = {
    myClick: PropTypes.func,
    clicked: PropTypes.bool
}