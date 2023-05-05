import CloseButton from "./CloseButton";

function MobileMenu(){
    return (
        <>
            <nav className="nav-mobile">
            <CloseButton />
                <a href="./">Home</a>
                <a href="/new">New</a>
                <a href="/popular">Popular</a>
                <a href="/trending">Trending</a>
                <a href="/categories">Categories</a>
            </nav>
        </>
    )
}

export default MobileMenu;