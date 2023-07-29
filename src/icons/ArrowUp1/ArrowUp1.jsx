import React from "react";

export const ArrowUp1 = ({ className }) => {
    return (
        <svg
            className={`arrow-up-1 ${className}`}
            fill="none"
            height="12"
            viewBox="0 0 12 12"
            width="12"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="path"
                d="M6 9.5V2.5M6 2.5L2.5 6M6 2.5L9.5 6"
                stroke="#039855"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
            />
        </svg>
    );
};
