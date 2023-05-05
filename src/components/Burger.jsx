const menuMobile = document.getElementById("mobileMenu");

const manageBurgerClick = ()=>{
    menuMobile.classList.add("open");
}

function Burger(){

    return(
        <img src="src/assets/icon-menu.svg" alt="menu" onClick={manageBurgerClick}/>
    )
}

export default Burger;