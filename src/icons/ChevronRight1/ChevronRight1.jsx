import React from "react";

export const ChevronRight1 = ({ className }) => {
    return (
        <svg
            className={`chevron-right-1 ${className}`}
            fill="none"
            height="16"
            viewBox="0 0 16 16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="path"
                d="M6 12L10 8L6 4"
                stroke="#D0D5DD"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.33333"
            />
        </svg>
    );
};
