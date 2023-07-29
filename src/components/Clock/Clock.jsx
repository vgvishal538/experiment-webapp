import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Clock = ({
    className,
    clock = "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/clock.svg",
}) => {
    return <img className={`clock ${className}`} alt="Clock" src={clock} />;
};

Clock.propTypes = {
    clock: PropTypes.string,
};