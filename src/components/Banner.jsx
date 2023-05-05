function Banner(){
    return(
        <div className="banner">
            <picture>
                <source 
                    srcSet="src/assets/image-web-3-desktop.jpg"
                    media="(min-width: 768px)"
                />
                <img src="src/assets/image-web-3-mobile.jpg" alt="" />
            </picture>
        </div>
    )
}

export default Banner;