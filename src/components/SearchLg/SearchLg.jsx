import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SearchLg = ({
    className,
    searchLg = "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/search-lg.svg",
}) => {
    return <img className={`search-lg ${className}`} alt="Search lg" src={searchLg} />;
};

SearchLg.propTypes = {
    searchLg: PropTypes.string,
};
