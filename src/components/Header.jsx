import Logo from "./Logo";
import Burger from "./Burger";
import NavMain from "./NavMain";
import MobileMenu from "./MobilMenu";
import { useState } from "react";





function Header(){
    const [click, setClick] = useState(false);

    const manageBurgerClick = ()=>{
        click ? setClick(false) : setClick(true);
    }

    return(
        <header className="header">
            <div className="container">
                <Logo myClass="logoSvg"/>
                {screen.width < 768 ? <Burger myClick={manageBurgerClick} clicked={click}/> : <NavMain />} 
                {screen.width < 768 && <MobileMenu className={click ? "open" : "closed"}/>} 
            </div>
        </header>
    )
}

export default Header;