import PropTypes from "prop-types"

function News({heading, children}){
    return(
        <article className="news">
            <h3>{heading}</h3>
            <p>{children}</p>
        </article>
    )
}

export default News;

News.propTypes = {
    heading: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}