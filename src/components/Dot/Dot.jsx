import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Dot = ({ size, className, dotClassName }) => {
    return (
        <div className={`dot size-0-${size} ${className}`}>
            <div className={`div-3 ${dotClassName}`} />
        </div>
    );
};

Dot.propTypes = {
    size: PropTypes.oneOf(["md", "lg", "sm"]),
};
