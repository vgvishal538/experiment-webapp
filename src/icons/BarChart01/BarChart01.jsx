import React from "react";

export const BarChart01 = ({ className }) => {
    return (
        <svg
            className={`bar-chart-01 ${className}`}
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="path"
                d="M18 20V10M12 20V4M6 20V14"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>
    );
};
