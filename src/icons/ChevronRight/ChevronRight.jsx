import React from "react";

export const ChevronRight = ({ className }) => {
    return (
        <svg
            className={`chevron-right ${className}`}
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="path"
                d="M9 18L15 12L9 6"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>
    );
};
