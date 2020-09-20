import React from "react";
import PropTypes from "prop-types";

function Movie(id, year, title, summary, poster){
    return <h4>{title}</h4>
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    // rating : PropTypes.number.isRequired
}

export default Movie;
// state가 필요하면 class component
// state가 필요없으면 function component