import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
//import { ArrowDown } from "../../icons/ArrowDown";
import { ArrowUp } from "../../icons/ArrowUp";
import "./style.css";

export const TableCell = ({
    style,
    supportingText,
    stateProp,
    className,
    textAndSupportingClassName,
    text = "Olivia Rhye",
}) => {
    const [state, dispatch] = useReducer(reducer, {
        style: style || "lead-text",
        supportingText: supportingText || true,
        state: stateProp || "default",
    });

    return (
        <div
            className={`table-cell ${state.style} state-1-${state.state} supporting-text-${state.supportingText} ${className}`}
            onMouseLeave={() => {
                dispatch("mouse_leave");
            }}
            onMouseEnter={() => {
                dispatch("mouse_enter");
            }}
        >
            {(state.style === "action-dropdown-icon" ||
                (state.style === "avatar-group" && !state.supportingText) ||
                state.style === "badge" ||
                state.style === "badges-multiple" ||
                state.style === "checkbox-only" ||
                state.style === "lead-text" ||
                state.style === "progress-bar" ||
                state.style === "radio-button-only" ||
                state.style === "text" ||
                state.style === "toggle-only" ||
                (state.style === "trend-negative" && !state.supportingText) ||
                (state.style === "trend-positive" && !state.supportingText)) && (
                    <div className={`text-and-supporting ${textAndSupportingClassName}`}>
                        {state.supportingText && (
                            <>
                                <div className="text-2">
                                    {["lead-text", "text"].includes(state.style) && <>{text}</>}

                                    {state.style === "progress-bar" && <div className="progress" />}
                                </div>
                                <div className="supporting-text">
                                    {["lead-text", "text"].includes(state.style) && <></>}

                                    {state.style === "progress-bar" && <>60%</>}
                                </div>
                            </>
                        )}

                        {["avatar-group", "badge", "checkbox-only", "radio-button-only", "toggle-only"].includes(state.style) && (
                            <div className="text-i">
                                {state.style === "badge" && <>Active</>}

                                {state.style === "avatar-group" && (
                                    <>
                                        <div className="avatar-wrapper">
                                            <img
                                                className="img"
                                                alt="Avatar"
                                                src={
                                                    state.state === "hover"
                                                        ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-14.svg"
                                                        : state.state === "disabled"
                                                            ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-4.svg"
                                                            : "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-54.svg"
                                                }
                                            />
                                        </div>
                                        <div className="img-wrapper">
                                            <img
                                                className="avatar-2"
                                                alt="Avatar"
                                                src={
                                                    state.state === "hover"
                                                        ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-13.svg"
                                                        : state.state === "disabled"
                                                            ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-3.svg"
                                                            : "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-53.svg"
                                                }
                                            />
                                        </div>
                                        <div className="img-wrapper">
                                            <img
                                                className="avatar-3"
                                                alt="Avatar"
                                                src={
                                                    state.state === "hover"
                                                        ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-12.svg"
                                                        : state.state === "disabled"
                                                            ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-2.svg"
                                                            : "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-52.svg"
                                                }
                                            />
                                        </div>
                                        <div className="img-wrapper">
                                            <img
                                                className="avatar-4"
                                                alt="Avatar"
                                                src={
                                                    state.state === "hover"
                                                        ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-11.svg"
                                                        : state.state === "disabled"
                                                            ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-1.svg"
                                                            : "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-51.svg"
                                                }
                                            />
                                        </div>
                                        <div className="img-wrapper">
                                            <img
                                                className="avatar-5"
                                                alt="Avatar"
                                                src={
                                                    state.state === "hover"
                                                        ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-10.svg"
                                                        : state.state === "disabled"
                                                            ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar.svg"
                                                            : "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-50.svg"
                                                }
                                            />
                                        </div>
                                        <div className="text-i-wrapper">
                                            <div className="text-3">+5</div>
                                        </div>
                                    </>
                                )}

                                {state.style === "toggle-only" && <div className="button" />}
                            </div>
                        )}

                        {state.style === "badges-multiple" && (
                            <>
                                <div className="div-wrapper">
                                    <div className="text-4">Label</div>
                                </div>
                                <div className="badge-2">
                                    <div className="text-5">Label</div>
                                </div>
                                <div className="badge-3">
                                    <div className="text-6">Label</div>
                                </div>
                                <div className="badge-4">
                                    <div className="text-7">+4</div>
                                </div>
                            </>
                        )}

                        {!state.supportingText && ["lead-text", "text"].includes(state.style) && <>{text}</>}

                        {state.style === "action-dropdown-icon" && (
                            <img
                                className="star-icon"
                                alt="Dots vertical"
                                src="https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/dots-vertical-2.svg"
                            />
                        )}

                        {state.style === "trend-positive" && <ArrowUp className="instance-node" />}

                        {/* {state.style === "trend-negative" && <ArrowDown className="instance-node" />} */}

                        {["trend-negative", "trend-positive"].includes(state.style) && <div className="text-8">20%</div>}
                    </div>
                )}

            {(state.style === "action-buttons" ||
                (state.style === "avatar-group" && state.supportingText) ||
                state.style === "avatar" ||
                state.style === "lead-avatar" ||
                state.style === "lead-checkbox" ||
                state.style === "lead-icon" ||
                state.style === "lead-payment-method" ||
                state.style === "lead-radio-button" ||
                state.style === "lead-toggle" ||
                state.style === "payment-method" ||
                (state.style === "trend-negative" && state.supportingText) ||
                (state.style === "trend-positive" && state.supportingText)) && (
                    <>
                        <div className="text-9">
                            {state.style === "avatar-group" && <>10 users</>}

                            {((state.state === "default" && state.style === "lead-icon" && state.supportingText) ||
                                state.style === "action-buttons" ||
                                state.style === "lead-checkbox" ||
                                state.style === "lead-radio-button" ||
                                state.style === "lead-toggle") && (
                                    <div className="checkbox-base-2">
                                        {state.style === "lead-icon" && (
                                            <img
                                                className="file"
                                                alt="File"
                                                src="https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/file-04-20.svg"
                                            />
                                        )}

                                        {state.style === "lead-toggle" && <div className="button-2" />}

                                        {state.style === "action-buttons" && <>Delete</>}
                                    </div>
                                )}

                            {((state.state === "default" && state.style === "lead-icon" && !state.supportingText) ||
                                (state.state === "disabled" && state.style === "lead-icon") ||
                                (state.state === "hover" && state.style === "lead-icon") ||
                                state.style === "avatar" ||
                                state.style === "lead-avatar" ||
                                state.style === "lead-payment-method" ||
                                state.style === "payment-method") && (
                                    <img
                                        className="avatar-6"
                                        alt="Avatar"
                                        src={
                                            state.state === "default" && state.style === "avatar" && state.supportingText
                                                ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-48.svg"
                                                : ["lead-payment-method", "payment-method"].includes(state.style)
                                                    ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/visa-logo-29.svg"
                                                    : state.style === "lead-icon"
                                                        ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/file-04-20.svg"
                                                        : state.state === "default" && !state.supportingText && state.style === "lead-avatar"
                                                            ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-44.svg"
                                                            : state.state === "default" && state.style === "avatar" && !state.supportingText
                                                                ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-43.svg"
                                                                : state.supportingText && state.state === "hover" && state.style === "lead-avatar"
                                                                    ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-39.svg"
                                                                    : state.style === "avatar" && state.supportingText && state.state === "hover"
                                                                        ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-38.svg"
                                                                        : !state.supportingText && state.state === "hover" && state.style === "lead-avatar"
                                                                            ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-34.svg"
                                                                            : state.style === "avatar" && !state.supportingText && state.state === "hover"
                                                                                ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-33.svg"
                                                                                : state.supportingText && state.state === "disabled" && state.style === "lead-avatar"
                                                                                    ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-29.svg"
                                                                                    : state.style === "avatar" && state.supportingText && state.state === "disabled"
                                                                                        ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-28.svg"
                                                                                        : !state.supportingText && state.state === "disabled" && state.style === "lead-avatar"
                                                                                            ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-24.svg"
                                                                                            : state.style === "avatar" && !state.supportingText && state.state === "disabled"
                                                                                                ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-23.svg"
                                                                                                : "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-49.svg"
                                        }
                                    />
                                )}

                            {["trend-negative", "trend-positive"].includes(state.style) && <>$1,800</>}
                        </div>
                        <div className="avatar-group-2">
                            {["action-buttons", "avatar-group"].includes(state.style) && (
                                <div className="avatars">
                                    {state.style === "avatar-group" && (
                                        <>
                                            <div className="avatar-wrapper">
                                                <img
                                                    className="img"
                                                    alt="Avatar"
                                                    src={
                                                        state.state === "hover"
                                                            ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-19.svg"
                                                            : state.state === "disabled"
                                                                ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-9.svg"
                                                                : "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-59.svg"
                                                    }
                                                />
                                            </div>
                                            <div className="img-wrapper">
                                                <img
                                                    className="avatar-2"
                                                    alt="Avatar"
                                                    src={
                                                        state.state === "hover"
                                                            ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-18.svg"
                                                            : state.state === "disabled"
                                                                ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-8.svg"
                                                                : "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-58.svg"
                                                    }
                                                />
                                            </div>
                                            <div className="img-wrapper">
                                                <img
                                                    className="avatar-3"
                                                    alt="Avatar"
                                                    src={
                                                        state.state === "hover"
                                                            ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-17.svg"
                                                            : state.state === "disabled"
                                                                ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-7.svg"
                                                                : "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-57.svg"
                                                    }
                                                />
                                            </div>
                                            <div className="img-wrapper">
                                                <img
                                                    className="avatar-4"
                                                    alt="Avatar"
                                                    src={
                                                        state.state === "hover"
                                                            ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-16.svg"
                                                            : state.state === "disabled"
                                                                ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-6.svg"
                                                                : "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-56.svg"
                                                    }
                                                />
                                            </div>
                                            <div className="img-wrapper">
                                                <img
                                                    className="avatar-5"
                                                    alt="Avatar"
                                                    src={
                                                        state.state === "hover"
                                                            ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-15.svg"
                                                            : state.state === "disabled"
                                                                ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-5.svg"
                                                                : "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-55.svg"
                                                    }
                                                />
                                            </div>
                                            <div className="text-i-wrapper">
                                                <div className="text-3">+5</div>
                                            </div>
                                        </>
                                    )}

                                    {!state.supportingText && <>Edit</>}
                                </div>
                            )}

                            {((state.style === "avatar" && state.supportingText) ||
                                (state.style === "lead-avatar" && state.supportingText) ||
                                (state.style === "lead-checkbox" && state.supportingText) ||
                                (state.style === "lead-icon" && state.supportingText) ||
                                (state.style === "lead-payment-method" && state.supportingText) ||
                                (state.style === "lead-radio-button" && state.supportingText) ||
                                (state.style === "lead-toggle" && state.supportingText) ||
                                (state.style === "payment-method" && state.supportingText)) && (
                                    <>
                                        <div className="text-10">
                                            {["avatar", "lead-avatar", "lead-checkbox", "lead-radio-button", "lead-toggle"].includes(
                                                state.style
                                            ) && <>{text}</>}

                                            {["lead-payment-method", "payment-method"].includes(state.style) && <>Visa ending in 1234</>}

                                            {state.style === "lead-icon" && <>Tech requirements.pdf</>}
                                        </div>
                                        <div className="supporting-text-2">
                                            {["avatar", "lead-avatar", "lead-checkbox", "lead-radio-button", "lead-toggle"].includes(
                                                state.style
                                            ) && <></>}

                                            {["lead-payment-method", "payment-method"].includes(state.style) && <>Expiry 06/2024</>}

                                            {state.style === "lead-icon" && <>200 KB</>}
                                        </div>
                                    </>
                                )}

                            {!state.supportingText && state.style === "lead-icon" && <>Tech requirements.pdf</>}

                            {!state.supportingText && ["lead-payment-method", "payment-method"].includes(state.style) && (
                                <>Visa ending in 1234</>
                            )}

                            {((state.style === "avatar" && !state.supportingText) ||
                                (state.style === "lead-avatar" && !state.supportingText) ||
                                (state.style === "lead-checkbox" && !state.supportingText) ||
                                (state.style === "lead-radio-button" && !state.supportingText) ||
                                (state.style === "lead-toggle" && !state.supportingText)) && <>{text}</>}

                            {state.style === "trend-positive" && <ArrowUp className="instance-node" />}

                            {/* {state.style === "trend-negative" && <ArrowDown className="instance-node" />} */}

                            {["trend-negative", "trend-positive"].includes(state.style) && <div className="text-11">20%</div>}
                        </div>
                    </>
                )}

            {(state.style === "lead-avatar-checkbox" ||
                state.style === "lead-avatar-radio-button" ||
                state.style === "lead-avatar-toggle" ||
                state.style === "lead-icon-checkbox" ||
                state.style === "lead-icon-radio-button" ||
                state.style === "lead-icon-toggle" ||
                state.style === "lead-payment-method-checkbox" ||
                state.style === "lead-payment-method-radio-button" ||
                state.style === "lead-payment-method-toggle") && (
                    <>
                        <div className="checkbox-base-wrapper">
                            <div className="checkbox-base-3">
                                {["lead-avatar-toggle", "lead-icon-toggle", "lead-payment-method-toggle"].includes(state.style) && (
                                    <div className="button-3" />
                                )}
                            </div>
                        </div>
                        <div className="avatar-7">
                            <img
                                className="avatar-8"
                                alt="Avatar"
                                src={
                                    state.state === "default" && state.supportingText && state.style === "lead-avatar-radio-button"
                                        ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-46.svg"
                                        : state.state === "default" && state.supportingText && state.style === "lead-avatar-toggle"
                                            ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-45.svg"
                                            : ["lead-icon-checkbox", "lead-icon-radio-button", "lead-icon-toggle"].includes(state.style)
                                                ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/file-04-23.svg"
                                                : [
                                                    "lead-payment-method-checkbox",
                                                    "lead-payment-method-radio-button",
                                                    "lead-payment-method-toggle",
                                                ].includes(state.style)
                                                    ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/visa-logo-28.svg"
                                                    : state.state === "default" && !state.supportingText && state.style === "lead-avatar-checkbox"
                                                        ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-42.svg"
                                                        : state.state === "default" && !state.supportingText && state.style === "lead-avatar-radio-button"
                                                            ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-41.svg"
                                                            : state.state === "default" && !state.supportingText && state.style === "lead-avatar-toggle"
                                                                ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-40.svg"
                                                                : state.supportingText && state.state === "hover" && state.style === "lead-avatar-checkbox"
                                                                    ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-37.svg"
                                                                    : state.supportingText && state.state === "hover" && state.style === "lead-avatar-radio-button"
                                                                        ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-36.svg"
                                                                        : state.supportingText && state.style === "lead-avatar-toggle" && state.state === "hover"
                                                                            ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-35.svg"
                                                                            : !state.supportingText && state.state === "hover" && state.style === "lead-avatar-checkbox"
                                                                                ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-32.svg"
                                                                                : !state.supportingText && state.style === "lead-avatar-radio-button" && state.state === "hover"
                                                                                    ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-31.svg"
                                                                                    : !state.supportingText && state.style === "lead-avatar-toggle" && state.state === "hover"
                                                                                        ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-30.svg"
                                                                                        : state.supportingText && state.state === "disabled" && state.style === "lead-avatar-checkbox"
                                                                                            ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-27.svg"
                                                                                            : state.supportingText && state.state === "disabled" && state.style === "lead-avatar-radio-button"
                                                                                                ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-26.svg"
                                                                                                : state.style === "lead-avatar-toggle" && state.supportingText && state.state === "disabled"
                                                                                                    ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-25.svg"
                                                                                                    : !state.supportingText && state.state === "disabled" && state.style === "lead-avatar-checkbox"
                                                                                                        ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-22.svg"
                                                                                                        : !state.supportingText && state.state === "disabled" && state.style === "lead-avatar-radio-button"
                                                                                                            ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-21.svg"
                                                                                                            : !state.supportingText && state.state === "disabled" && state.style === "lead-avatar-toggle"
                                                                                                                ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-20.svg"
                                                                                                                : "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/avatar-47.svg"
                                }
                            />
                        </div>
                        <div className="text-and-supporting-2">
                            {state.supportingText && (
                                <>
                                    <div className="text-12">
                                        {["lead-avatar-checkbox", "lead-avatar-radio-button", "lead-avatar-toggle"].includes(state.style) && (
                                            <>{text}</>
                                        )}

                                        {["lead-icon-checkbox", "lead-icon-radio-button", "lead-icon-toggle"].includes(state.style) && (
                                            <>Tech requirements.pdf</>
                                        )}

                                        {[
                                            "lead-payment-method-checkbox",
                                            "lead-payment-method-radio-button",
                                            "lead-payment-method-toggle",
                                        ].includes(state.style) && <>Visa ending in 1234</>}
                                    </div>
                                    <div className="supporting-text-2">
                                        {["lead-avatar-checkbox", "lead-avatar-radio-button", "lead-avatar-toggle"].includes(state.style) && (
                                            <></>
                                        )}

                                        {["lead-icon-checkbox", "lead-icon-radio-button", "lead-icon-toggle"].includes(state.style) && (
                                            <>200 KB</>
                                        )}

                                        {[
                                            "lead-payment-method-checkbox",
                                            "lead-payment-method-radio-button",
                                            "lead-payment-method-toggle",
                                        ].includes(state.style) && <>Expiry 06/2024</>}
                                    </div>
                                </>
                            )}

                            {!state.supportingText &&
                                ["lead-icon-checkbox", "lead-icon-radio-button", "lead-icon-toggle"].includes(state.style) && (
                                    <>Tech requirements.pdf</>
                                )}

                            {!state.supportingText &&
                                [
                                    "lead-payment-method-checkbox",
                                    "lead-payment-method-radio-button",
                                    "lead-payment-method-toggle",
                                ].includes(state.style) && <>Visa ending in 1234</>}

                            {!state.supportingText &&
                                ["lead-avatar-checkbox", "lead-avatar-radio-button", "lead-avatar-toggle"].includes(state.style) && (
                                    <>{text}</>
                                )}
                        </div>
                    </>
                )}

            {state.style === "action-icons" && (
                <>
                    <div className="button-4">
                        <img
                            className="star-icon"
                            alt="Copy"
                            src={
                                state.state === "hover"
                                    ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/copy-01-1.svg"
                                    : state.state === "disabled"
                                        ? "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/copy-01.svg"
                                        : "https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/copy-01-2.svg"
                            }
                        />
                    </div>
                    <div className="button-4">
                        <img
                            className="star-icon"
                            alt="Download cloud"
                            src="https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/download-cloud-02-2.svg"
                        />
                    </div>
                    <div className="button-4">
                        <img
                            className="star-icon"
                            alt="Trash"
                            src="https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/trash-01-2.svg"
                        />
                    </div>
                    <div className="button-4">
                        <img
                            className="star-icon"
                            alt="Edit"
                            src="https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/edit-01-2.svg"
                        />
                    </div>
                </>
            )}

            {state.style === "star-ratings" && (
                <>
                    <div className="star-icon">
                        <div className="overlap-group">
                            <img
                                className="img-2"
                                alt="Star background"
                                src="https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/star-background-14.svg"
                            />
                            <div className="star">
                                <img
                                    className="img-2"
                                    alt="Star"
                                    src="https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/star-14.svg"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="star-icon">
                        <div className="overlap">
                            <img
                                className="img-2"
                                alt="Star background"
                                src="https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/star-background-14.svg"
                            />
                            <div className="star">
                                <img
                                    className="img-2"
                                    alt="Star"
                                    src="https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/star-14.svg"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="star-icon">
                        <div className="overlap-2">
                            <img
                                className="img-2"
                                alt="Star background"
                                src="https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/star-background-14.svg"
                            />
                            <div className="star">
                                <img
                                    className="img-2"
                                    alt="Star"
                                    src="https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/star-14.svg"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="star-icon">
                        <div className="overlap-3">
                            <img
                                className="img-2"
                                alt="Star background"
                                src="https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/star-background-14.svg"
                            />
                            <div className="star">
                                <img
                                    className="img-2"
                                    alt="Star"
                                    src="https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/star-14.svg"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="star-icon">
                        <img
                            className="img-2"
                            alt="Star background"
                            src="https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/star-background-14.svg"
                        />
                        <div className="star-wrapper">
                            <img
                                className="star-2"
                                alt="Star"
                                src="https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/star-10.svg"
                            />
                        </div>
                    </div>
                </>
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

TableCell.propTypes = {
    style: PropTypes.oneOf([
        "lead-icon-toggle",
        "lead-text",
        "lead-payment-method-checkbox",
        "text",
        "lead-avatar",
        "lead-payment-method-radio-button",
        "lead-payment-method",
        "lead-icon-checkbox",
        "progress-bar",
        "lead-toggle",
        "lead-avatar-checkbox",
        "lead-payment-method-toggle",
        "action-icons",
        "badge",
        "lead-checkbox",
        "lead-avatar-radio-button",
        "lead-icon",
        "lead-radio-button",
        "trend-negative",
        "star-ratings",
        "avatar",
        "action-buttons",
        "avatar-group",
        "toggle-only",
        "badges-multiple",
        "trend-positive",
        "payment-method",
        "lead-icon-radio-button",
        "lead-avatar-toggle",
        "action-dropdown-icon",
        "checkbox-only",
        "radio-button-only",
    ]),
    supportingText: PropTypes.bool,
    stateProp: PropTypes.oneOf(["disabled", "hover", "default"]),
    text: PropTypes.string,
};