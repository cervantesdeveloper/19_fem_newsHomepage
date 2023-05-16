import gaming from "../assets/image-gaming-growth.jpg";
import retro from "../assets/image-retro-pcs.jpg";
import top from "../assets/image-top-laptops.jpg";

import Related from "./Related"

function RelatedNews(){
    return(
        <div className="related container">
            <Related 
                image={retro}
                number="01"
                heading="Reviving Retro PCs"
                caption="What happens when old PCs are given modern upgrades?"
            />

            <Related 
                image={top}
                number="02"
                heading="Top 10 Laptops of 2022"
                caption="Our best picks for various needs and budgets."
            />

            <Related 
                image={gaming}
                number="03"
                heading="The Growth of Gaming"
                caption="How the pandemic has sparked fresh opportunities."
            />
        </div>
    )
}

export default RelatedNews