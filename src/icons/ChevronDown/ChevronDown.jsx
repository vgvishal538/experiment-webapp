import React from "react";

export const ChevronDown = ({ className }) => {
    return (
        <svg
            className={`chevron-down ${className}`}
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="path"
                d="M6 9L12 15L18 9"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>
    );
};
