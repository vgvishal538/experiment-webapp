import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Placeholder = ({
    className,
    placeholder = "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder.svg",
}) => {
    return <img className={`placeholder ${className}`} alt="Placeholder" src={placeholder} />;
};

Placeholder.propTypes = {
    placeholder: PropTypes.string,
};
