import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { HomeLine } from "../HomeLine";
import "./style.css";

export const BreadcrumbButton = ({ current, type, icon, stateProp, className, text = "Projects" }) => {
    const [state, dispatch] = useReducer(reducer, {
        current: current,

        type: type || "text",
        icon: icon,

        state: stateProp || "focused",
    });

    return (
        <div
            className={`breadcrumb-button ${state.type} icon-${state.icon} current-${state.current} ${state.state} ${className}`}
            onMouseLeave={() => {
                dispatch("mouse_leave");
            }}
            onMouseEnter={() => {
                dispatch("mouse_enter");
            }}
        >
            {!state.icon && <div className="text-7">{text}</div>}

            {state.icon && (
                <HomeLine
                    className="home-line-instance"
                    homeLine={
                        !state.current && ["default", "focused"].includes(state.state)
                            ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/home-line-44.svg"
                            : (!state.current && state.state === "hover" && state.type === "button-primary") ||
                                (state.current && state.type === "button-primary") ||
                                (state.current && state.type === "text")
                                ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/home-line-17.svg"
                                : "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/home-line-13.svg"
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

BreadcrumbButton.propTypes = {
    current: PropTypes.bool,
    type: PropTypes.oneOf(["button-gray", "text", "button-primary"]),
    icon: PropTypes.bool,
    stateProp: PropTypes.oneOf(["default", "focused", "hover"]),
    text: PropTypes.string,
};