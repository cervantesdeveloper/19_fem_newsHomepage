import HeadingAside from "./HeadingAside";
import News from "./News"

function Aside(){
    return(
        <aside className="aside">
            <HeadingAside text="New"/>
            <News heading="Hydrogen Vs Electric Cars">
                Will hydrogen-fueled cars ever catch up to EVs?
            </News>
            <News heading="The downsides of AI Artistry">
                What are the possible adverse affects of on-demand AI image generation?
            </News>
            <News heading="Is VC Funding Drying Up">
                Private funding by VC firms is down 50% YOY. We take a look at what that means.
            </News>
        </aside>
    )
}

export default Aside;