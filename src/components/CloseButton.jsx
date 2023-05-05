const menuMobile = document.getElementById("mobileMenu");

const manageCloseClick = ()=>{
    menuMobile.classList.remove("open");
}

function CloseButton(){

    return(
        <img src="src/assets/icon-menu-close.svg" alt="close" onClick={manageCloseClick}/>
    )
}

export default CloseButton;