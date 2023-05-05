import PropTypes from "prop-types";

function Button({type, legend}){
    return(
        <div className={`btn ${type}`}>
            {legend}
        </div>
    )
}

export default Button;

Button.propTypes = {
    type: PropTypes.string.isRequired,
    legend: PropTypes.string.isRequired
}