import PropTypes from "prop-types";

function HeadingAside({text}){
    return(
        <h2 className="heading-aside">{text}</h2>
    )
}

export default HeadingAside;

HeadingAside.propTypes = {
    text: PropTypes.string.isRequired
}