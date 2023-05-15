import Related from "./Related"

function RelatedNews(){
    return(
        <div className="related container">
            <Related 
                image="../src/assets/image-retro-pcs.jpg"
                number="01"
                heading="Reviving Retro PCs"
                caption="What happens when old PCs are given modern upgrades?"
            />

            <Related 
                image="../src/assets/image-top-laptops.jpg"
                number="02"
                heading="Top 10 Laptops of 2022"
                caption="Our best picks for various needs and budgets."
            />

            <Related 
                image="../src/assets/image-gaming-growth.jpg"
                number="03"
                heading="The Growth of Gaming"
                caption="How the pandemic has sparked fresh opportunities."
            />
        </div>
    )
}

export default RelatedNews