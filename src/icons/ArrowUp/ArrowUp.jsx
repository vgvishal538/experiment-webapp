import React from "react";

export const ArrowUp = ({ className }) => {
    return (
        <svg
            className={`arrow-up ${className}`}
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="path"
                d="M12 19V5M12 5L5 12M12 5L19 12"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>
    );
};
