import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Coins = ({
    className,
    coins = "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/coins-02-3.svg",
}) => {
    return <img className={`coins ${className}`} alt="Coins" src={coins} />;
};

Coins.propTypes = {
    coins: PropTypes.string,
};
