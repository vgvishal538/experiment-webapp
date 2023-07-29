import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const HomeLine = ({
    className,
    homeLine = "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/home-line.svg",
}) => {
    return <img className={`home-line ${className}`} alt="Home line" src={homeLine} />;
};

HomeLine.propTypes = {
    homeLine: PropTypes.string,
};
