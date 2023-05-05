import Logo from "./Logo";
import Burger from "./Burger";
import NavMain from "./NavMain";

function Header(){
    return(
        <header className="header">
            <Logo myClass="logoSvg"/>
            {screen.width < 768 ? <Burger /> : <NavMain />} 
        </header>
    )
}

export default Header;