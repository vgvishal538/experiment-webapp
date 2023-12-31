import React from "react";

export const XClose = ({ className }) => {
    return (
        <svg
            className={`x-close ${className}`}
            fill="none"
            height="12"
            viewBox="0 0 12 12"
            width="12"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="path"
                d="M9 3L3 9M3 3L9 9"
                stroke="#98A2B3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
            />
        </svg>
    );
};
