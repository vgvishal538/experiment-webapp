import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const TableHeader = ({ helpIcon, arrow, stateProp, className, textClassName, text = "Company" }) => {
    const [state, dispatch] = useReducer(reducer, {
        helpIcon: helpIcon,

        arrow: arrow || "false",
        state: stateProp || "default",
    });

    return (
        <div
            className={`table-header ${className}`}
            onMouseLeave={() => {
                dispatch("mouse_leave");
            }}
            onMouseEnter={() => {
                dispatch("mouse_enter");
            }}
        >
            {!state.helpIcon && state.arrow === "false" && (
                <div className={`text-wrapper ${state.state} ${textClassName}`}>{text}</div>
            )}

            {(state.arrow === "down" || state.arrow === "up" || (state.helpIcon && state.arrow === "false")) && (
                <div className={`div state-${state.state}`}>{text}</div>
            )}

            {state.helpIcon && <div className={`help-icon ${state.arrow} state-0-${state.state}`} />}

            {["down", "up"].includes(state.arrow) && (
                <img
                    className="arrow-down"
                    alt="Arrow down"
                    src={
                        state.state === "default" && state.arrow === "up"
                            ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/arrow-up-11.svg"
                            : state.state === "disabled" && state.arrow === "down"
                                ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/arrow-down-10.svg"
                                : state.arrow === "up" && state.state === "disabled"
                                    ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/arrow-up-10.svg"
                                    : state.arrow === "down" && state.state === "hover"
                                        ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/arrow-down-9.svg"
                                        : state.arrow === "up" && state.state === "hover"
                                            ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/arrow-up-9.svg"
                                            : "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/arrow-down-13.svg"
                    }
                />
            )}
        </div>
    );
};

function reducer(state, action) {
    switch (action) {
        case "mouse_enter":
            return {
                ...state,
                state: "hover",
            };

        case "mouse_leave":
            return {
                ...state,
                state: "default",
            };
            default:
    }

    return state;
}

TableHeader.propTypes = {
    helpIcon: PropTypes.bool,
    arrow: PropTypes.oneOf(["false", "up", "down"]),
    stateProp: PropTypes.oneOf(["disabled", "hover", "default"]),
    text: PropTypes.string,
};
