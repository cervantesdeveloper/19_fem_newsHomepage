import bannerMobile from "../assets/image-web-3-mobile.jpg";
import bannerDesktop from "../assets/image-web-3-desktop.jpg";

function Banner(){
    return(
        <div className="banner">
            <picture>
                <source 
                    srcSet={bannerDesktop}
                    media="(min-width: 768px)"
                />
                <img src={bannerMobile} alt="" />
            </picture>
        </div>
    )
}

export default Banner;