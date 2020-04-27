/** @module components/Title */

import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/**
* Displays a classification string on the appropriately colored background
*
* @author Micah Ricks <micahricks26@gmail.com>
*/
function Title(props) {
    return (
        <div className="title-container">
            <h1>{props.Name}</h1>
            <h2>{props.Title}</h2>
            <p>Interactive Resume</p>
        </div>
    );
}

/**
* @prop {string} classifciation - classification string to display
*/
Title.propTypes = {
    Name: PropTypes.string,
    Title: PropTypes.string,
};

Title.defaultProps = {
    Name: "FName LName",
    Title: "Jobless",
};

export default Title;
