import Banner from "../components/Banner";
import Button from "../components/Button";
import HeadingMain from "../components/HeadingMain";

function Root(){
    return(
        <>
            <main className="headline">
                <Banner />
                <HeadingMain text="The Bright Future of Web 3.0?" />
                <p className="text-main">
                    We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
                </p>
                <Button type="cta" legend="READ MORE"/>
            </main>
        </>
        
    )
}

export default Root;