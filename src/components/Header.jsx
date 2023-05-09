import Logo from "./Logo";
import Burger from "./Burger";
import NavMain from "./NavMain";

function Header(){
    return(
        <header className="header">
            <div className="container">
                <Logo myClass="logoSvg"/>
                {screen.width < 768 ? <Burger /> : <NavMain />} 
            </div>
        </header>
    )
}

export default Header;