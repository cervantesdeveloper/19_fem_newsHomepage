import PropTypes from "prop-types";

function HeadingMain({text}){
    return(
        <h1>{text}</h1>
    )
}

export default HeadingMain;

HeadingMain.propTypes = {
    text: PropTypes.string
}