import PropTypes from "prop-types";

function Related({image, number, heading, caption}){
    return(
        <a className="related-link" href="#">
            <figure>
                <img src={image} alt="" />
                <figcaption>
                    <span>{number}</span>
                    <h4>{heading}</h4>
                    <p>{caption}</p>
                </figcaption>
            </figure>
        </a>
    )
}

export default Related;

Related.propTypes = {
    image: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired
}