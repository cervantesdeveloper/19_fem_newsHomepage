import { useLocation } from "react-router-dom";

function FakeLink(){
    let {pathname} = useLocation();
    console.log(pathname);
    return(
        <h1 className="content">{pathname.replace("/", "")} content</h1>
    )
}

export default FakeLink