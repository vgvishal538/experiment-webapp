import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Dot } from "../Dot";
import { Placeholder } from "../Placeholder";
import "./style.css";

export const Button = ({
  iconTrailing = true,
  iconLeading = true,
  size,
  hierarchy,
  icon,
  destructive,
  stateProp,
  className,
  text = "Button CTA",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "md",
    hierarchy: hierarchy || "primary",
    icon: icon || "dot-leading",
    destructive: destructive,

    state: stateProp || "default",
  });

  return (
    <div
      className={`button ${state.size} ${state.hierarchy} ${state.icon} state-0-${state.state} destructive-${state.destructive} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {state.icon === "dot-leading" && (
        <Dot
          className="dot-instance"
          dotClassName={`${state.hierarchy === "primary" && "class-4"} ${
            state.state === "disabled" && state.hierarchy === "secondary-color" && !state.destructive && "class-5"
          } ${
            ((state.destructive && state.hierarchy === "link-color" && state.state === "disabled") ||
              (state.destructive && state.hierarchy === "link-gray" && state.state === "disabled") ||
              (state.destructive && state.hierarchy === "secondary-color" && state.state === "disabled") ||
              (state.destructive && state.hierarchy === "secondary-gray" && state.state === "disabled") ||
              (state.destructive && state.hierarchy === "tertiary-color" && state.state === "disabled") ||
              (state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")) &&
            "class-6"
          } ${
            ((!state.destructive && state.hierarchy === "link-color" && state.state === "disabled") ||
              (!state.destructive && state.hierarchy === "link-gray" && state.state === "disabled") ||
              (!state.destructive && state.hierarchy === "secondary-gray" && state.state === "disabled") ||
              (!state.destructive && state.hierarchy === "tertiary-color" && state.state === "disabled") ||
              (!state.destructive && state.hierarchy === "tertiary-gray" && state.state === "disabled")) &&
            "class-7"
          }`}
          size="md"
        />
      )}

      {state.icon === "default" && (
        <>
          <>
            {iconLeading && (
              <Placeholder
                className={`${state.size === "two-xl" ? "class-8" : "class-9"}`}
                placeholder={
                  state.state === "default" &&
                  state.hierarchy === "primary" &&
                  state.size === "md" &&
                  !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-760.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.hierarchy === "primary" &&
                      state.size === "md"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-758.svg"
                    : state.state === "default" &&
                      state.size === "md" &&
                      state.hierarchy === "secondary-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-756.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.size === "md" &&
                      state.hierarchy === "secondary-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-754.svg"
                    : state.state === "default" &&
                      state.size === "md" &&
                      state.hierarchy === "link-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-752.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.size === "md" &&
                      state.hierarchy === "link-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-750.svg"
                    : state.state === "default" &&
                      state.size === "md" &&
                      state.hierarchy === "link-gray" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-748.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.size === "md" &&
                      state.hierarchy === "link-gray"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-746.svg"
                    : state.state === "default" &&
                      state.hierarchy === "tertiary-color" &&
                      state.size === "md" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-744.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.size === "md" &&
                      state.hierarchy === "tertiary-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-742.svg"
                    : state.state === "default" &&
                      state.hierarchy === "tertiary-gray" &&
                      state.size === "md" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-740.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.hierarchy === "tertiary-gray" &&
                      state.size === "md"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-738.svg"
                    : state.state === "default" &&
                      state.hierarchy === "secondary-gray" &&
                      state.size === "md" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-736.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.hierarchy === "secondary-gray" &&
                      state.size === "md"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-734.svg"
                    : state.state === "disabled" &&
                      state.hierarchy === "primary" &&
                      state.size === "md" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-732.svg"
                    : state.state === "disabled" &&
                      state.destructive &&
                      state.hierarchy === "primary" &&
                      state.size === "md"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-730.svg"
                    : state.state === "disabled" &&
                      state.size === "md" &&
                      state.hierarchy === "secondary-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-728.svg"
                    : state.state === "disabled" &&
                      state.destructive &&
                      state.size === "md" &&
                      state.hierarchy === "secondary-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-726.svg"
                    : state.state === "disabled" &&
                      state.size === "md" &&
                      state.hierarchy === "link-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-724.svg"
                    : state.state === "disabled" &&
                      state.destructive &&
                      state.size === "md" &&
                      state.hierarchy === "link-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-722.svg"
                    : state.state === "disabled" &&
                      state.size === "md" &&
                      state.hierarchy === "link-gray" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-720.svg"
                    : state.state === "disabled" &&
                      state.destructive &&
                      state.size === "md" &&
                      state.hierarchy === "link-gray"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-718.svg"
                    : state.state === "disabled" &&
                      state.hierarchy === "tertiary-color" &&
                      state.size === "md" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-716.svg"
                    : state.state === "disabled" &&
                      state.destructive &&
                      state.size === "md" &&
                      state.hierarchy === "tertiary-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-714.svg"
                    : state.state === "disabled" &&
                      state.hierarchy === "tertiary-gray" &&
                      state.size === "md" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-712.svg"
                    : state.state === "disabled" &&
                      state.destructive &&
                      state.hierarchy === "tertiary-gray" &&
                      state.size === "md"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-710.svg"
                    : state.state === "disabled" &&
                      state.hierarchy === "secondary-gray" &&
                      state.size === "md" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-708.svg"
                    : state.state === "disabled" &&
                      state.destructive &&
                      state.hierarchy === "secondary-gray" &&
                      state.size === "md"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-706.svg"
                    : state.hierarchy === "primary" &&
                      state.size === "md" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-704.svg"
                    : state.destructive &&
                      state.hierarchy === "primary" &&
                      state.size === "md" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-702.svg"
                    : state.state === "focused" &&
                      state.size === "md" &&
                      state.hierarchy === "secondary-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-700.svg"
                    : state.destructive &&
                      state.size === "md" &&
                      state.hierarchy === "secondary-color" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-698.svg"
                    : state.state === "focused" &&
                      state.size === "md" &&
                      state.hierarchy === "link-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-696.svg"
                    : state.destructive &&
                      state.size === "md" &&
                      state.hierarchy === "link-color" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-694.svg"
                    : state.size === "md" &&
                      state.hierarchy === "link-gray" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-692.svg"
                    : state.destructive &&
                      state.size === "md" &&
                      state.hierarchy === "link-gray" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-690.svg"
                    : state.hierarchy === "tertiary-color" &&
                      state.size === "md" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-688.svg"
                    : state.destructive &&
                      state.size === "md" &&
                      state.hierarchy === "tertiary-color" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-686.svg"
                    : state.hierarchy === "tertiary-gray" &&
                      state.size === "md" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-684.svg"
                    : state.destructive &&
                      state.hierarchy === "tertiary-gray" &&
                      state.size === "md" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-682.svg"
                    : state.hierarchy === "secondary-gray" &&
                      state.size === "md" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-680.svg"
                    : state.destructive &&
                      state.hierarchy === "secondary-gray" &&
                      state.size === "md" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-678.svg"
                    : state.hierarchy === "primary" &&
                      state.size === "md" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-676.svg"
                    : state.destructive &&
                      state.hierarchy === "primary" &&
                      state.size === "md" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-674.svg"
                    : state.size === "md" &&
                      state.hierarchy === "secondary-color" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-672.svg"
                    : state.destructive &&
                      state.size === "md" &&
                      state.hierarchy === "secondary-color" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-670.svg"
                    : state.size === "md" &&
                      state.hierarchy === "link-color" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-668.svg"
                    : state.destructive &&
                      state.size === "md" &&
                      state.hierarchy === "link-color" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-666.svg"
                    : state.size === "md" &&
                      state.hierarchy === "link-gray" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-664.svg"
                    : state.destructive &&
                      state.size === "md" &&
                      state.hierarchy === "link-gray" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-662.svg"
                    : state.hierarchy === "tertiary-color" &&
                      state.size === "md" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-660.svg"
                    : state.destructive &&
                      state.size === "md" &&
                      state.state === "hover" &&
                      state.hierarchy === "tertiary-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-658.svg"
                    : state.hierarchy === "tertiary-gray" &&
                      state.size === "md" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-656.svg"
                    : state.destructive &&
                      state.hierarchy === "tertiary-gray" &&
                      state.size === "md" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-654.svg"
                    : state.hierarchy === "secondary-gray" &&
                      state.size === "md" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-652.svg"
                    : state.destructive &&
                      state.hierarchy === "secondary-gray" &&
                      state.size === "md" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-650.svg"
                    : state.state === "default" &&
                      state.size === "lg" &&
                      state.hierarchy === "primary" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-608.svg"
                    : state.state === "default" &&
                      state.size === "lg" &&
                      state.hierarchy === "primary" &&
                      state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-606.svg"
                    : state.state === "default" &&
                      state.size === "lg" &&
                      state.hierarchy === "secondary-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-604.svg"
                    : state.state === "default" &&
                      state.size === "lg" &&
                      state.destructive &&
                      state.hierarchy === "secondary-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-602.svg"
                    : state.state === "default" &&
                      state.size === "lg" &&
                      state.hierarchy === "link-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-600.svg"
                    : state.state === "default" &&
                      state.size === "lg" &&
                      state.destructive &&
                      state.hierarchy === "link-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-598.svg"
                    : state.state === "default" &&
                      state.size === "lg" &&
                      state.hierarchy === "link-gray" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-596.svg"
                    : state.state === "default" &&
                      state.size === "lg" &&
                      state.destructive &&
                      state.hierarchy === "link-gray"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-594.svg"
                    : state.state === "default" &&
                      state.size === "lg" &&
                      state.hierarchy === "tertiary-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-592.svg"
                    : state.state === "default" &&
                      state.size === "lg" &&
                      state.destructive &&
                      state.hierarchy === "tertiary-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-590.svg"
                    : state.state === "default" &&
                      state.size === "lg" &&
                      state.hierarchy === "tertiary-gray" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-588.svg"
                    : state.state === "default" &&
                      state.size === "lg" &&
                      state.hierarchy === "tertiary-gray" &&
                      state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-586.svg"
                    : state.state === "default" &&
                      state.size === "lg" &&
                      state.hierarchy === "secondary-gray" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-584.svg"
                    : state.state === "default" &&
                      state.size === "lg" &&
                      state.hierarchy === "secondary-gray" &&
                      state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-582.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "primary" &&
                      state.state === "disabled" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-580.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "primary" &&
                      state.destructive &&
                      state.state === "disabled"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-578.svg"
                    : state.size === "lg" &&
                      state.state === "disabled" &&
                      state.hierarchy === "secondary-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-576.svg"
                    : state.size === "lg" &&
                      state.destructive &&
                      state.state === "disabled" &&
                      state.hierarchy === "secondary-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-574.svg"
                    : state.size === "lg" &&
                      state.state === "disabled" &&
                      state.hierarchy === "link-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-572.svg"
                    : state.size === "lg" &&
                      state.destructive &&
                      state.state === "disabled" &&
                      state.hierarchy === "link-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-570.svg"
                    : state.state === "disabled" &&
                      state.size === "lg" &&
                      state.hierarchy === "link-gray" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-568.svg"
                    : state.state === "disabled" &&
                      state.size === "lg" &&
                      state.destructive &&
                      state.hierarchy === "link-gray"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-566.svg"
                    : state.size === "lg" &&
                      state.state === "disabled" &&
                      state.hierarchy === "tertiary-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-564.svg"
                    : state.size === "lg" &&
                      state.destructive &&
                      state.state === "disabled" &&
                      state.hierarchy === "tertiary-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-562.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "tertiary-gray" &&
                      state.state === "disabled" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-560.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "tertiary-gray" &&
                      state.destructive &&
                      state.state === "disabled"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-558.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "secondary-gray" &&
                      state.state === "disabled" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-556.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "secondary-gray" &&
                      state.destructive &&
                      state.state === "disabled"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-554.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "primary" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-552.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "primary" &&
                      state.destructive &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-550.svg"
                    : state.size === "lg" &&
                      state.state === "focused" &&
                      state.hierarchy === "secondary-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-548.svg"
                    : state.size === "lg" &&
                      state.destructive &&
                      state.hierarchy === "secondary-color" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-546.svg"
                    : state.size === "lg" &&
                      state.state === "focused" &&
                      state.hierarchy === "link-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-544.svg"
                    : state.size === "lg" &&
                      state.destructive &&
                      state.hierarchy === "link-color" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-542.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "link-gray" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-540.svg"
                    : state.size === "lg" &&
                      state.destructive &&
                      state.hierarchy === "link-gray" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-538.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "tertiary-color" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-536.svg"
                    : state.size === "lg" &&
                      state.destructive &&
                      state.hierarchy === "tertiary-color" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-534.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "tertiary-gray" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-532.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "tertiary-gray" &&
                      state.destructive &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-530.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "secondary-gray" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-528.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "secondary-gray" &&
                      state.destructive &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-526.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "primary" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-524.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "primary" &&
                      state.destructive &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-522.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "secondary-color" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-520.svg"
                    : state.size === "lg" &&
                      state.destructive &&
                      state.hierarchy === "secondary-color" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-518.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "link-color" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-516.svg"
                    : state.size === "lg" &&
                      state.destructive &&
                      state.hierarchy === "link-color" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-514.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "link-gray" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-512.svg"
                    : state.size === "lg" &&
                      state.destructive &&
                      state.hierarchy === "link-gray" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-510.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "tertiary-color" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-508.svg"
                    : state.size === "lg" &&
                      state.destructive &&
                      state.hierarchy === "tertiary-color" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-506.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "tertiary-gray" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-504.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "tertiary-gray" &&
                      state.destructive &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-502.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "secondary-gray" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-500.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "secondary-gray" &&
                      state.destructive &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-498.svg"
                    : state.state === "default" &&
                      state.hierarchy === "primary" &&
                      state.size === "xl" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-456.svg"
                    : state.hierarchy === "primary" && state.size === "two-xl"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-454.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.hierarchy === "primary" &&
                      state.size === "xl"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-452.svg"
                    : state.state === "default" &&
                      state.size === "xl" &&
                      state.hierarchy === "secondary-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-448.svg"
                    : (!state.destructive &&
                        state.hierarchy === "link-color" &&
                        state.size === "two-xl" &&
                        state.state === "default") ||
                      (!state.destructive &&
                        state.hierarchy === "link-color" &&
                        state.size === "two-xl" &&
                        state.state === "focused") ||
                      (!state.destructive &&
                        state.hierarchy === "secondary-color" &&
                        state.size === "two-xl" &&
                        state.state === "default") ||
                      (!state.destructive &&
                        state.hierarchy === "secondary-color" &&
                        state.size === "two-xl" &&
                        state.state === "focused") ||
                      (!state.destructive &&
                        state.hierarchy === "tertiary-color" &&
                        state.size === "two-xl" &&
                        state.state === "default") ||
                      (!state.destructive &&
                        state.hierarchy === "tertiary-color" &&
                        state.size === "two-xl" &&
                        state.state === "focused")
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-446.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.size === "xl" &&
                      state.hierarchy === "secondary-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-444.svg"
                    : state.state === "default" &&
                      state.size === "xl" &&
                      state.hierarchy === "link-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-440.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.size === "xl" &&
                      state.hierarchy === "link-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-436.svg"
                    : state.state === "default" &&
                      state.size === "xl" &&
                      state.hierarchy === "link-gray" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-432.svg"
                    : (!state.destructive &&
                        state.hierarchy === "link-gray" &&
                        state.size === "two-xl" &&
                        state.state === "default") ||
                      (!state.destructive &&
                        state.hierarchy === "link-gray" &&
                        state.size === "two-xl" &&
                        state.state === "focused") ||
                      (!state.destructive &&
                        state.hierarchy === "tertiary-gray" &&
                        state.size === "two-xl" &&
                        state.state === "default") ||
                      (!state.destructive &&
                        state.hierarchy === "tertiary-gray" &&
                        state.size === "two-xl" &&
                        state.state === "focused")
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-430.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.size === "xl" &&
                      state.hierarchy === "link-gray"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-428.svg"
                    : state.state === "default" &&
                      state.hierarchy === "tertiary-color" &&
                      state.size === "xl" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-424.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.size === "xl" &&
                      state.hierarchy === "tertiary-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-420.svg"
                    : state.state === "default" &&
                      state.hierarchy === "tertiary-gray" &&
                      state.size === "xl" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-416.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.hierarchy === "tertiary-gray" &&
                      state.size === "xl"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-412.svg"
                    : state.state === "default" &&
                      state.hierarchy === "secondary-gray" &&
                      state.size === "xl" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-408.svg"
                    : (!state.destructive &&
                        state.hierarchy === "link-gray" &&
                        state.size === "two-xl" &&
                        state.state === "hover") ||
                      (!state.destructive &&
                        state.hierarchy === "secondary-gray" &&
                        state.size === "two-xl" &&
                        state.state === "default") ||
                      (!state.destructive &&
                        state.hierarchy === "secondary-gray" &&
                        state.size === "two-xl" &&
                        state.state === "focused") ||
                      (!state.destructive &&
                        state.hierarchy === "tertiary-gray" &&
                        state.size === "two-xl" &&
                        state.state === "hover")
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-406.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.hierarchy === "secondary-gray" &&
                      state.size === "xl"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-404.svg"
                    : state.size === "xl" &&
                      state.hierarchy === "primary" &&
                      state.state === "disabled" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-400.svg"
                    : state.size === "xl" &&
                      state.destructive &&
                      state.hierarchy === "primary" &&
                      state.state === "disabled"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-396.svg"
                    : state.size === "xl" &&
                      state.state === "disabled" &&
                      state.hierarchy === "secondary-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-392.svg"
                    : !state.destructive &&
                      state.state === "disabled" &&
                      state.hierarchy === "secondary-color" &&
                      state.size === "two-xl"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-390.svg"
                    : state.size === "xl" &&
                      state.destructive &&
                      state.state === "disabled" &&
                      state.hierarchy === "secondary-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-388.svg"
                    : (state.destructive &&
                        state.hierarchy === "link-color" &&
                        state.size === "two-xl" &&
                        state.state === "disabled") ||
                      (state.destructive &&
                        state.hierarchy === "link-gray" &&
                        state.size === "two-xl" &&
                        state.state === "disabled") ||
                      (state.destructive &&
                        state.hierarchy === "secondary-color" &&
                        state.size === "two-xl" &&
                        state.state === "disabled") ||
                      (state.destructive &&
                        state.hierarchy === "secondary-gray" &&
                        state.size === "two-xl" &&
                        state.state === "disabled") ||
                      (state.destructive &&
                        state.hierarchy === "tertiary-color" &&
                        state.size === "two-xl" &&
                        state.state === "disabled") ||
                      (state.destructive &&
                        state.hierarchy === "tertiary-gray" &&
                        state.size === "two-xl" &&
                        state.state === "disabled")
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-386.svg"
                    : state.size === "xl" &&
                      state.state === "disabled" &&
                      state.hierarchy === "link-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-384.svg"
                    : (!state.destructive &&
                        state.hierarchy === "link-color" &&
                        state.size === "two-xl" &&
                        state.state === "disabled") ||
                      (!state.destructive &&
                        state.hierarchy === "link-gray" &&
                        state.size === "two-xl" &&
                        state.state === "disabled") ||
                      (!state.destructive &&
                        state.hierarchy === "secondary-gray" &&
                        state.size === "two-xl" &&
                        state.state === "disabled") ||
                      (!state.destructive &&
                        state.hierarchy === "tertiary-color" &&
                        state.size === "two-xl" &&
                        state.state === "disabled") ||
                      (!state.destructive &&
                        state.hierarchy === "tertiary-gray" &&
                        state.size === "two-xl" &&
                        state.state === "disabled")
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-382.svg"
                    : state.size === "xl" &&
                      state.destructive &&
                      state.state === "disabled" &&
                      state.hierarchy === "link-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-380.svg"
                    : state.state === "disabled" &&
                      state.size === "xl" &&
                      state.hierarchy === "link-gray" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-376.svg"
                    : state.state === "disabled" &&
                      state.destructive &&
                      state.size === "xl" &&
                      state.hierarchy === "link-gray"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-372.svg"
                    : state.size === "xl" &&
                      state.hierarchy === "tertiary-color" &&
                      state.state === "disabled" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-368.svg"
                    : state.size === "xl" &&
                      state.destructive &&
                      state.state === "disabled" &&
                      state.hierarchy === "tertiary-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-364.svg"
                    : state.size === "xl" &&
                      state.hierarchy === "tertiary-gray" &&
                      state.state === "disabled" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-360.svg"
                    : state.size === "xl" &&
                      state.destructive &&
                      state.hierarchy === "tertiary-gray" &&
                      state.state === "disabled"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-356.svg"
                    : state.size === "xl" &&
                      state.hierarchy === "secondary-gray" &&
                      state.state === "disabled" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-352.svg"
                    : state.size === "xl" &&
                      state.destructive &&
                      state.hierarchy === "secondary-gray" &&
                      state.state === "disabled"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-348.svg"
                    : state.hierarchy === "primary" &&
                      state.size === "xl" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-344.svg"
                    : state.destructive &&
                      state.hierarchy === "primary" &&
                      state.size === "xl" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-340.svg"
                    : state.state === "focused" &&
                      state.size === "xl" &&
                      state.hierarchy === "secondary-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-336.svg"
                    : state.destructive &&
                      state.size === "xl" &&
                      state.hierarchy === "secondary-color" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-332.svg"
                    : state.state === "focused" &&
                      state.size === "xl" &&
                      state.hierarchy === "link-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-328.svg"
                    : state.destructive &&
                      state.size === "xl" &&
                      state.hierarchy === "link-color" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-324.svg"
                    : state.size === "xl" &&
                      state.hierarchy === "link-gray" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-320.svg"
                    : state.size === "xl" &&
                      state.destructive &&
                      state.hierarchy === "link-gray" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-316.svg"
                    : state.hierarchy === "tertiary-color" &&
                      state.size === "xl" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-312.svg"
                    : state.destructive &&
                      state.size === "xl" &&
                      state.hierarchy === "tertiary-color" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-308.svg"
                    : state.hierarchy === "tertiary-gray" &&
                      state.size === "xl" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-304.svg"
                    : state.destructive &&
                      state.hierarchy === "tertiary-gray" &&
                      state.size === "xl" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-300.svg"
                    : state.hierarchy === "secondary-gray" &&
                      state.size === "xl" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-296.svg"
                    : state.destructive &&
                      state.hierarchy === "secondary-gray" &&
                      state.size === "xl" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-292.svg"
                    : state.hierarchy === "primary" &&
                      state.size === "xl" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-288.svg"
                    : state.destructive &&
                      state.hierarchy === "primary" &&
                      state.size === "xl" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-284.svg"
                    : state.size === "xl" &&
                      state.hierarchy === "secondary-color" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-280.svg"
                    : (!state.destructive &&
                        state.hierarchy === "link-color" &&
                        state.size === "two-xl" &&
                        state.state === "hover") ||
                      (!state.destructive &&
                        state.hierarchy === "secondary-color" &&
                        state.size === "two-xl" &&
                        state.state === "hover") ||
                      (!state.destructive &&
                        state.hierarchy === "tertiary-color" &&
                        state.size === "two-xl" &&
                        state.state === "hover")
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-278.svg"
                    : state.destructive &&
                      state.size === "xl" &&
                      state.hierarchy === "secondary-color" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-276.svg"
                    : (state.destructive &&
                        state.hierarchy === "link-color" &&
                        state.size === "two-xl" &&
                        state.state === "hover") ||
                      (state.destructive &&
                        state.hierarchy === "link-gray" &&
                        state.size === "two-xl" &&
                        state.state === "hover") ||
                      (state.destructive &&
                        state.hierarchy === "secondary-color" &&
                        state.size === "two-xl" &&
                        state.state === "hover") ||
                      (state.destructive &&
                        state.hierarchy === "secondary-gray" &&
                        state.size === "two-xl" &&
                        state.state === "hover") ||
                      (state.destructive &&
                        state.hierarchy === "tertiary-color" &&
                        state.size === "two-xl" &&
                        state.state === "hover") ||
                      (state.destructive &&
                        state.hierarchy === "tertiary-gray" &&
                        state.size === "two-xl" &&
                        state.state === "hover")
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-274.svg"
                    : state.size === "xl" &&
                      state.hierarchy === "link-color" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-272.svg"
                    : state.destructive &&
                      state.size === "xl" &&
                      state.hierarchy === "link-color" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-268.svg"
                    : state.size === "xl" &&
                      state.hierarchy === "link-gray" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-264.svg"
                    : state.size === "xl" &&
                      state.destructive &&
                      state.hierarchy === "link-gray" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-260.svg"
                    : state.hierarchy === "tertiary-color" &&
                      state.size === "xl" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-256.svg"
                    : state.destructive &&
                      state.size === "xl" &&
                      state.state === "hover" &&
                      state.hierarchy === "tertiary-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-252.svg"
                    : state.hierarchy === "tertiary-gray" &&
                      state.size === "xl" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-248.svg"
                    : state.destructive &&
                      state.hierarchy === "tertiary-gray" &&
                      state.size === "xl" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-244.svg"
                    : state.hierarchy === "secondary-gray" &&
                      state.size === "xl" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-240.svg"
                    : state.hierarchy === "secondary-gray" &&
                      !state.destructive &&
                      state.state === "hover" &&
                      state.size === "two-xl"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-238.svg"
                    : state.destructive &&
                      state.hierarchy === "secondary-gray" &&
                      state.size === "xl" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-236.svg"
                    : state.state === "default" &&
                      state.hierarchy === "primary" &&
                      state.size === "sm" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-152.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.hierarchy === "primary" &&
                      state.size === "sm"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-150.svg"
                    : state.state === "default" &&
                      state.size === "sm" &&
                      state.hierarchy === "secondary-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-148.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.size === "sm" &&
                      state.hierarchy === "secondary-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-146.svg"
                    : state.state === "default" &&
                      state.size === "sm" &&
                      state.hierarchy === "link-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-144.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.size === "sm" &&
                      state.hierarchy === "link-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-142.svg"
                    : state.state === "default" &&
                      state.hierarchy === "link-gray" &&
                      state.size === "sm" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-140.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.hierarchy === "link-gray" &&
                      state.size === "sm"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-138.svg"
                    : state.state === "default" &&
                      state.hierarchy === "tertiary-color" &&
                      state.size === "sm" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-136.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.hierarchy === "tertiary-color" &&
                      state.size === "sm"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-134.svg"
                    : state.state === "default" &&
                      state.hierarchy === "tertiary-gray" &&
                      state.size === "sm" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-132.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.hierarchy === "tertiary-gray" &&
                      state.size === "sm"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-130.svg"
                    : state.state === "default" &&
                      state.hierarchy === "secondary-gray" &&
                      state.size === "sm" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-128.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.hierarchy === "secondary-gray" &&
                      state.size === "sm"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-126.svg"
                    : state.hierarchy === "primary" &&
                      state.state === "disabled" &&
                      state.size === "sm" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-124.svg"
                    : state.destructive &&
                      state.hierarchy === "primary" &&
                      state.state === "disabled" &&
                      state.size === "sm"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-122.svg"
                    : state.state === "disabled" &&
                      state.hierarchy === "secondary-color" &&
                      state.size === "sm" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-120.svg"
                    : state.destructive &&
                      state.state === "disabled" &&
                      state.hierarchy === "secondary-color" &&
                      state.size === "sm"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-118.svg"
                    : state.state === "disabled" &&
                      state.hierarchy === "link-color" &&
                      state.size === "sm" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-116.svg"
                    : state.destructive &&
                      state.state === "disabled" &&
                      state.hierarchy === "link-color" &&
                      state.size === "sm"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-114.svg"
                    : state.state === "disabled" &&
                      state.hierarchy === "link-gray" &&
                      state.size === "sm" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-112.svg"
                    : state.state === "disabled" &&
                      state.destructive &&
                      state.hierarchy === "link-gray" &&
                      state.size === "sm"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-110.svg"
                    : state.hierarchy === "tertiary-color" &&
                      state.state === "disabled" &&
                      state.size === "sm" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-108.svg"
                    : state.destructive &&
                      state.state === "disabled" &&
                      state.size === "sm" &&
                      state.hierarchy === "tertiary-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-106.svg"
                    : state.hierarchy === "tertiary-gray" &&
                      state.state === "disabled" &&
                      state.size === "sm" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-104.svg"
                    : state.destructive &&
                      state.hierarchy === "tertiary-gray" &&
                      state.state === "disabled" &&
                      state.size === "sm"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-102.svg"
                    : state.hierarchy === "secondary-gray" &&
                      state.state === "disabled" &&
                      state.size === "sm" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-100.svg"
                    : state.destructive &&
                      state.hierarchy === "secondary-gray" &&
                      state.state === "disabled" &&
                      state.size === "sm"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-98.svg"
                    : state.hierarchy === "primary" &&
                      state.size === "sm" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-96.svg"
                    : state.destructive &&
                      state.hierarchy === "primary" &&
                      state.size === "sm" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-94.svg"
                    : state.state === "focused" &&
                      state.size === "sm" &&
                      state.hierarchy === "secondary-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-92.svg"
                    : state.destructive &&
                      state.size === "sm" &&
                      state.hierarchy === "secondary-color" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-90.svg"
                    : state.state === "focused" &&
                      state.size === "sm" &&
                      state.hierarchy === "link-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-88.svg"
                    : state.destructive &&
                      state.size === "sm" &&
                      state.hierarchy === "link-color" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-86.svg"
                    : state.hierarchy === "link-gray" &&
                      state.state === "focused" &&
                      state.size === "sm" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-84.svg"
                    : state.destructive &&
                      state.hierarchy === "link-gray" &&
                      state.size === "sm" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-82.svg"
                    : state.hierarchy === "tertiary-color" &&
                      state.state === "focused" &&
                      state.size === "sm" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-80.svg"
                    : state.destructive &&
                      state.hierarchy === "tertiary-color" &&
                      state.size === "sm" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-78.svg"
                    : state.hierarchy === "tertiary-gray" &&
                      state.size === "sm" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-76.svg"
                    : state.destructive &&
                      state.hierarchy === "tertiary-gray" &&
                      state.size === "sm" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-74.svg"
                    : state.hierarchy === "secondary-gray" &&
                      state.size === "sm" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-72.svg"
                    : state.destructive &&
                      state.hierarchy === "secondary-gray" &&
                      state.size === "sm" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-70.svg"
                    : state.hierarchy === "primary" &&
                      state.size === "sm" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-68.svg"
                    : state.destructive &&
                      state.hierarchy === "primary" &&
                      state.size === "sm" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-66.svg"
                    : state.size === "sm" &&
                      state.hierarchy === "secondary-color" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-64.svg"
                    : state.destructive &&
                      state.size === "sm" &&
                      state.hierarchy === "secondary-color" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-62.svg"
                    : state.size === "sm" &&
                      state.hierarchy === "link-color" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-60.svg"
                    : state.destructive &&
                      state.size === "sm" &&
                      state.hierarchy === "link-color" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-58.svg"
                    : state.state === "hover" &&
                      state.hierarchy === "link-gray" &&
                      state.size === "sm" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-56.svg"
                    : state.destructive &&
                      state.state === "hover" &&
                      state.hierarchy === "link-gray" &&
                      state.size === "sm"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-54.svg"
                    : state.size === "sm" &&
                      state.hierarchy === "tertiary-color" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-52.svg"
                    : state.destructive &&
                      state.hierarchy === "tertiary-color" &&
                      state.state === "hover" &&
                      state.size === "sm"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-50.svg"
                    : state.hierarchy === "tertiary-gray" &&
                      state.size === "sm" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-48.svg"
                    : state.destructive &&
                      state.hierarchy === "tertiary-gray" &&
                      state.size === "sm" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-46.svg"
                    : state.hierarchy === "secondary-gray" &&
                      state.size === "sm" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-44.svg"
                    : state.destructive &&
                      state.hierarchy === "secondary-gray" &&
                      state.size === "sm" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-42.svg"
                    : "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-442.svg"
                }
              />
            )}
          </>
        </>
      )}

      {["default", "dot-leading"].includes(state.icon) && <div className="text-8">{text}</div>}

      {state.icon === "default" && (
        <>
          <>
            {iconTrailing && (
              <Placeholder
                className={`${state.size === "two-xl" ? "class-8" : "class-9"}`}
                placeholder={
                  state.state === "default" &&
                  state.hierarchy === "primary" &&
                  state.size === "md" &&
                  !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-759.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.hierarchy === "primary" &&
                      state.size === "md"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-757.svg"
                    : state.state === "default" &&
                      state.size === "md" &&
                      state.hierarchy === "secondary-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-755.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.size === "md" &&
                      state.hierarchy === "secondary-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-753.svg"
                    : state.state === "default" &&
                      state.size === "md" &&
                      state.hierarchy === "link-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-751.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.size === "md" &&
                      state.hierarchy === "link-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-749.svg"
                    : state.state === "default" &&
                      state.size === "md" &&
                      state.hierarchy === "link-gray" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-747.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.size === "md" &&
                      state.hierarchy === "link-gray"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-745.svg"
                    : state.state === "default" &&
                      state.hierarchy === "tertiary-color" &&
                      state.size === "md" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-743.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.size === "md" &&
                      state.hierarchy === "tertiary-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-741.svg"
                    : state.state === "default" &&
                      state.hierarchy === "tertiary-gray" &&
                      state.size === "md" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-739.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.hierarchy === "tertiary-gray" &&
                      state.size === "md"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-737.svg"
                    : state.state === "default" &&
                      state.hierarchy === "secondary-gray" &&
                      state.size === "md" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-735.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.hierarchy === "secondary-gray" &&
                      state.size === "md"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-733.svg"
                    : state.state === "disabled" &&
                      state.hierarchy === "primary" &&
                      state.size === "md" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-731.svg"
                    : state.state === "disabled" &&
                      state.destructive &&
                      state.hierarchy === "primary" &&
                      state.size === "md"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-729.svg"
                    : state.state === "disabled" &&
                      state.size === "md" &&
                      state.hierarchy === "secondary-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-727.svg"
                    : state.state === "disabled" &&
                      state.destructive &&
                      state.size === "md" &&
                      state.hierarchy === "secondary-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-725.svg"
                    : state.state === "disabled" &&
                      state.size === "md" &&
                      state.hierarchy === "link-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-723.svg"
                    : state.state === "disabled" &&
                      state.destructive &&
                      state.size === "md" &&
                      state.hierarchy === "link-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-721.svg"
                    : state.state === "disabled" &&
                      state.size === "md" &&
                      state.hierarchy === "link-gray" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-719.svg"
                    : state.state === "disabled" &&
                      state.destructive &&
                      state.size === "md" &&
                      state.hierarchy === "link-gray"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-717.svg"
                    : state.state === "disabled" &&
                      state.hierarchy === "tertiary-color" &&
                      state.size === "md" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-715.svg"
                    : state.state === "disabled" &&
                      state.destructive &&
                      state.size === "md" &&
                      state.hierarchy === "tertiary-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-713.svg"
                    : state.state === "disabled" &&
                      state.hierarchy === "tertiary-gray" &&
                      state.size === "md" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-711.svg"
                    : state.state === "disabled" &&
                      state.destructive &&
                      state.hierarchy === "tertiary-gray" &&
                      state.size === "md"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-709.svg"
                    : state.state === "disabled" &&
                      state.hierarchy === "secondary-gray" &&
                      state.size === "md" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-707.svg"
                    : state.state === "disabled" &&
                      state.destructive &&
                      state.hierarchy === "secondary-gray" &&
                      state.size === "md"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-705.svg"
                    : state.hierarchy === "primary" &&
                      state.size === "md" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-703.svg"
                    : state.destructive &&
                      state.hierarchy === "primary" &&
                      state.size === "md" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-701.svg"
                    : state.state === "focused" &&
                      state.size === "md" &&
                      state.hierarchy === "secondary-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-699.svg"
                    : state.destructive &&
                      state.size === "md" &&
                      state.hierarchy === "secondary-color" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-697.svg"
                    : state.state === "focused" &&
                      state.size === "md" &&
                      state.hierarchy === "link-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-695.svg"
                    : state.destructive &&
                      state.size === "md" &&
                      state.hierarchy === "link-color" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-693.svg"
                    : state.size === "md" &&
                      state.hierarchy === "link-gray" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-691.svg"
                    : state.destructive &&
                      state.size === "md" &&
                      state.hierarchy === "link-gray" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-689.svg"
                    : state.hierarchy === "tertiary-color" &&
                      state.size === "md" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-687.svg"
                    : state.destructive &&
                      state.size === "md" &&
                      state.hierarchy === "tertiary-color" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-685.svg"
                    : state.hierarchy === "tertiary-gray" &&
                      state.size === "md" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-683.svg"
                    : state.destructive &&
                      state.hierarchy === "tertiary-gray" &&
                      state.size === "md" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-681.svg"
                    : state.hierarchy === "secondary-gray" &&
                      state.size === "md" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-679.svg"
                    : state.destructive &&
                      state.hierarchy === "secondary-gray" &&
                      state.size === "md" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-677.svg"
                    : state.hierarchy === "primary" &&
                      state.size === "md" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-675.svg"
                    : state.destructive &&
                      state.hierarchy === "primary" &&
                      state.size === "md" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-673.svg"
                    : state.size === "md" &&
                      state.hierarchy === "secondary-color" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-671.svg"
                    : state.destructive &&
                      state.size === "md" &&
                      state.hierarchy === "secondary-color" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-669.svg"
                    : state.size === "md" &&
                      state.hierarchy === "link-color" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-667.svg"
                    : state.destructive &&
                      state.size === "md" &&
                      state.hierarchy === "link-color" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-665.svg"
                    : state.size === "md" &&
                      state.hierarchy === "link-gray" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-663.svg"
                    : state.destructive &&
                      state.size === "md" &&
                      state.hierarchy === "link-gray" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-661.svg"
                    : state.hierarchy === "tertiary-color" &&
                      state.size === "md" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-659.svg"
                    : state.destructive &&
                      state.size === "md" &&
                      state.state === "hover" &&
                      state.hierarchy === "tertiary-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-657.svg"
                    : state.hierarchy === "tertiary-gray" &&
                      state.size === "md" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-655.svg"
                    : state.destructive &&
                      state.hierarchy === "tertiary-gray" &&
                      state.size === "md" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-653.svg"
                    : state.hierarchy === "secondary-gray" &&
                      state.size === "md" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-651.svg"
                    : state.destructive &&
                      state.hierarchy === "secondary-gray" &&
                      state.size === "md" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-649.svg"
                    : state.state === "default" &&
                      state.size === "lg" &&
                      state.hierarchy === "primary" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-607.svg"
                    : state.state === "default" &&
                      state.size === "lg" &&
                      state.hierarchy === "primary" &&
                      state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-605.svg"
                    : state.state === "default" &&
                      state.size === "lg" &&
                      state.hierarchy === "secondary-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-603.svg"
                    : state.state === "default" &&
                      state.size === "lg" &&
                      state.destructive &&
                      state.hierarchy === "secondary-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-601.svg"
                    : state.state === "default" &&
                      state.size === "lg" &&
                      state.hierarchy === "link-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-599.svg"
                    : state.state === "default" &&
                      state.size === "lg" &&
                      state.destructive &&
                      state.hierarchy === "link-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-597.svg"
                    : state.state === "default" &&
                      state.size === "lg" &&
                      state.hierarchy === "link-gray" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-595.svg"
                    : state.state === "default" &&
                      state.size === "lg" &&
                      state.destructive &&
                      state.hierarchy === "link-gray"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-593.svg"
                    : state.state === "default" &&
                      state.size === "lg" &&
                      state.hierarchy === "tertiary-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-591.svg"
                    : state.state === "default" &&
                      state.size === "lg" &&
                      state.destructive &&
                      state.hierarchy === "tertiary-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-589.svg"
                    : state.state === "default" &&
                      state.size === "lg" &&
                      state.hierarchy === "tertiary-gray" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-587.svg"
                    : state.state === "default" &&
                      state.size === "lg" &&
                      state.hierarchy === "tertiary-gray" &&
                      state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-585.svg"
                    : state.state === "default" &&
                      state.size === "lg" &&
                      state.hierarchy === "secondary-gray" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-583.svg"
                    : state.state === "default" &&
                      state.size === "lg" &&
                      state.hierarchy === "secondary-gray" &&
                      state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-581.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "primary" &&
                      state.state === "disabled" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-579.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "primary" &&
                      state.destructive &&
                      state.state === "disabled"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-577.svg"
                    : state.size === "lg" &&
                      state.state === "disabled" &&
                      state.hierarchy === "secondary-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-575.svg"
                    : state.size === "lg" &&
                      state.destructive &&
                      state.state === "disabled" &&
                      state.hierarchy === "secondary-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-573.svg"
                    : state.size === "lg" &&
                      state.state === "disabled" &&
                      state.hierarchy === "link-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-571.svg"
                    : state.size === "lg" &&
                      state.destructive &&
                      state.state === "disabled" &&
                      state.hierarchy === "link-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-569.svg"
                    : state.state === "disabled" &&
                      state.size === "lg" &&
                      state.hierarchy === "link-gray" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-567.svg"
                    : state.state === "disabled" &&
                      state.size === "lg" &&
                      state.destructive &&
                      state.hierarchy === "link-gray"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-565.svg"
                    : state.size === "lg" &&
                      state.state === "disabled" &&
                      state.hierarchy === "tertiary-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-563.svg"
                    : state.size === "lg" &&
                      state.destructive &&
                      state.state === "disabled" &&
                      state.hierarchy === "tertiary-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-561.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "tertiary-gray" &&
                      state.state === "disabled" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-559.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "tertiary-gray" &&
                      state.destructive &&
                      state.state === "disabled"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-557.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "secondary-gray" &&
                      state.state === "disabled" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-555.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "secondary-gray" &&
                      state.destructive &&
                      state.state === "disabled"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-553.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "primary" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-551.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "primary" &&
                      state.destructive &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-549.svg"
                    : state.size === "lg" &&
                      state.state === "focused" &&
                      state.hierarchy === "secondary-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-547.svg"
                    : state.size === "lg" &&
                      state.destructive &&
                      state.hierarchy === "secondary-color" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-545.svg"
                    : state.size === "lg" &&
                      state.state === "focused" &&
                      state.hierarchy === "link-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-543.svg"
                    : state.size === "lg" &&
                      state.destructive &&
                      state.hierarchy === "link-color" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-541.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "link-gray" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-539.svg"
                    : state.size === "lg" &&
                      state.destructive &&
                      state.hierarchy === "link-gray" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-537.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "tertiary-color" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-535.svg"
                    : state.size === "lg" &&
                      state.destructive &&
                      state.hierarchy === "tertiary-color" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-533.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "tertiary-gray" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-531.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "tertiary-gray" &&
                      state.destructive &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-529.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "secondary-gray" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-527.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "secondary-gray" &&
                      state.destructive &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-525.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "primary" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-523.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "primary" &&
                      state.destructive &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-521.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "secondary-color" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-519.svg"
                    : state.size === "lg" &&
                      state.destructive &&
                      state.hierarchy === "secondary-color" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-517.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "link-color" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-515.svg"
                    : state.size === "lg" &&
                      state.destructive &&
                      state.hierarchy === "link-color" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-513.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "link-gray" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-511.svg"
                    : state.size === "lg" &&
                      state.destructive &&
                      state.hierarchy === "link-gray" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-509.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "tertiary-color" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-507.svg"
                    : state.size === "lg" &&
                      state.destructive &&
                      state.hierarchy === "tertiary-color" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-505.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "tertiary-gray" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-503.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "tertiary-gray" &&
                      state.destructive &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-501.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "secondary-gray" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-499.svg"
                    : state.size === "lg" &&
                      state.hierarchy === "secondary-gray" &&
                      state.destructive &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-497.svg"
                    : state.state === "default" &&
                      state.hierarchy === "primary" &&
                      state.size === "xl" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-455.svg"
                    : state.hierarchy === "primary" && state.size === "two-xl"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-454.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.hierarchy === "primary" &&
                      state.size === "xl"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-451.svg"
                    : state.state === "default" &&
                      state.size === "xl" &&
                      state.hierarchy === "secondary-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-447.svg"
                    : (!state.destructive &&
                        state.hierarchy === "link-color" &&
                        state.size === "two-xl" &&
                        state.state === "default") ||
                      (!state.destructive &&
                        state.hierarchy === "link-color" &&
                        state.size === "two-xl" &&
                        state.state === "focused") ||
                      (!state.destructive &&
                        state.hierarchy === "secondary-color" &&
                        state.size === "two-xl" &&
                        state.state === "default") ||
                      (!state.destructive &&
                        state.hierarchy === "secondary-color" &&
                        state.size === "two-xl" &&
                        state.state === "focused") ||
                      (!state.destructive &&
                        state.hierarchy === "tertiary-color" &&
                        state.size === "two-xl" &&
                        state.state === "default") ||
                      (!state.destructive &&
                        state.hierarchy === "tertiary-color" &&
                        state.size === "two-xl" &&
                        state.state === "focused")
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-446.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.size === "xl" &&
                      state.hierarchy === "secondary-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-443.svg"
                    : state.state === "default" &&
                      state.size === "xl" &&
                      state.hierarchy === "link-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-439.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.size === "xl" &&
                      state.hierarchy === "link-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-435.svg"
                    : state.state === "default" &&
                      state.size === "xl" &&
                      state.hierarchy === "link-gray" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-431.svg"
                    : (!state.destructive &&
                        state.hierarchy === "link-gray" &&
                        state.size === "two-xl" &&
                        state.state === "default") ||
                      (!state.destructive &&
                        state.hierarchy === "link-gray" &&
                        state.size === "two-xl" &&
                        state.state === "focused") ||
                      (!state.destructive &&
                        state.hierarchy === "tertiary-gray" &&
                        state.size === "two-xl" &&
                        state.state === "default")
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-430.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.size === "xl" &&
                      state.hierarchy === "link-gray"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-427.svg"
                    : state.state === "default" &&
                      state.hierarchy === "tertiary-color" &&
                      state.size === "xl" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-423.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.size === "xl" &&
                      state.hierarchy === "tertiary-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-419.svg"
                    : state.state === "default" &&
                      state.hierarchy === "tertiary-gray" &&
                      state.size === "xl" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-415.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.hierarchy === "tertiary-gray" &&
                      state.size === "xl"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-411.svg"
                    : state.state === "default" &&
                      state.hierarchy === "secondary-gray" &&
                      state.size === "xl" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-407.svg"
                    : (!state.destructive &&
                        state.hierarchy === "link-gray" &&
                        state.size === "two-xl" &&
                        state.state === "hover") ||
                      (!state.destructive &&
                        state.hierarchy === "secondary-gray" &&
                        state.size === "two-xl" &&
                        state.state === "default") ||
                      (!state.destructive &&
                        state.hierarchy === "secondary-gray" &&
                        state.size === "two-xl" &&
                        state.state === "focused") ||
                      (!state.destructive &&
                        state.hierarchy === "tertiary-gray" &&
                        state.size === "two-xl" &&
                        state.state === "focused") ||
                      (!state.destructive &&
                        state.hierarchy === "tertiary-gray" &&
                        state.size === "two-xl" &&
                        state.state === "hover")
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-406.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.hierarchy === "secondary-gray" &&
                      state.size === "xl"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-403.svg"
                    : state.size === "xl" &&
                      state.hierarchy === "primary" &&
                      state.state === "disabled" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-399.svg"
                    : state.size === "xl" &&
                      state.destructive &&
                      state.hierarchy === "primary" &&
                      state.state === "disabled"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-395.svg"
                    : state.size === "xl" &&
                      state.state === "disabled" &&
                      state.hierarchy === "secondary-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-391.svg"
                    : !state.destructive &&
                      state.state === "disabled" &&
                      state.hierarchy === "secondary-color" &&
                      state.size === "two-xl"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-390.svg"
                    : state.size === "xl" &&
                      state.destructive &&
                      state.state === "disabled" &&
                      state.hierarchy === "secondary-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-387.svg"
                    : (state.destructive &&
                        state.hierarchy === "link-color" &&
                        state.size === "two-xl" &&
                        state.state === "disabled") ||
                      (state.destructive &&
                        state.hierarchy === "link-gray" &&
                        state.size === "two-xl" &&
                        state.state === "disabled") ||
                      (state.destructive &&
                        state.hierarchy === "secondary-color" &&
                        state.size === "two-xl" &&
                        state.state === "disabled") ||
                      (state.destructive &&
                        state.hierarchy === "secondary-gray" &&
                        state.size === "two-xl" &&
                        state.state === "disabled") ||
                      (state.destructive &&
                        state.hierarchy === "tertiary-color" &&
                        state.size === "two-xl" &&
                        state.state === "disabled") ||
                      (state.destructive &&
                        state.hierarchy === "tertiary-gray" &&
                        state.size === "two-xl" &&
                        state.state === "disabled")
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-386.svg"
                    : state.size === "xl" &&
                      state.state === "disabled" &&
                      state.hierarchy === "link-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-383.svg"
                    : (!state.destructive &&
                        state.hierarchy === "link-color" &&
                        state.size === "two-xl" &&
                        state.state === "disabled") ||
                      (!state.destructive &&
                        state.hierarchy === "link-gray" &&
                        state.size === "two-xl" &&
                        state.state === "disabled") ||
                      (!state.destructive &&
                        state.hierarchy === "secondary-gray" &&
                        state.size === "two-xl" &&
                        state.state === "disabled") ||
                      (!state.destructive &&
                        state.hierarchy === "tertiary-color" &&
                        state.size === "two-xl" &&
                        state.state === "disabled") ||
                      (!state.destructive &&
                        state.hierarchy === "tertiary-gray" &&
                        state.size === "two-xl" &&
                        state.state === "disabled")
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-382.svg"
                    : state.size === "xl" &&
                      state.destructive &&
                      state.state === "disabled" &&
                      state.hierarchy === "link-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-379.svg"
                    : state.state === "disabled" &&
                      state.size === "xl" &&
                      state.hierarchy === "link-gray" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-375.svg"
                    : state.state === "disabled" &&
                      state.destructive &&
                      state.size === "xl" &&
                      state.hierarchy === "link-gray"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-371.svg"
                    : state.size === "xl" &&
                      state.hierarchy === "tertiary-color" &&
                      state.state === "disabled" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-367.svg"
                    : state.size === "xl" &&
                      state.destructive &&
                      state.state === "disabled" &&
                      state.hierarchy === "tertiary-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-363.svg"
                    : state.size === "xl" &&
                      state.hierarchy === "tertiary-gray" &&
                      state.state === "disabled" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-359.svg"
                    : state.size === "xl" &&
                      state.destructive &&
                      state.hierarchy === "tertiary-gray" &&
                      state.state === "disabled"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-355.svg"
                    : state.size === "xl" &&
                      state.hierarchy === "secondary-gray" &&
                      state.state === "disabled" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-351.svg"
                    : state.size === "xl" &&
                      state.destructive &&
                      state.hierarchy === "secondary-gray" &&
                      state.state === "disabled"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-347.svg"
                    : state.hierarchy === "primary" &&
                      state.size === "xl" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-343.svg"
                    : state.destructive &&
                      state.hierarchy === "primary" &&
                      state.size === "xl" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-339.svg"
                    : state.state === "focused" &&
                      state.size === "xl" &&
                      state.hierarchy === "secondary-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-335.svg"
                    : state.destructive &&
                      state.size === "xl" &&
                      state.hierarchy === "secondary-color" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-331.svg"
                    : state.state === "focused" &&
                      state.size === "xl" &&
                      state.hierarchy === "link-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-327.svg"
                    : state.destructive &&
                      state.size === "xl" &&
                      state.hierarchy === "link-color" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-323.svg"
                    : state.size === "xl" &&
                      state.hierarchy === "link-gray" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-319.svg"
                    : state.size === "xl" &&
                      state.destructive &&
                      state.hierarchy === "link-gray" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-315.svg"
                    : state.hierarchy === "tertiary-color" &&
                      state.size === "xl" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-311.svg"
                    : state.destructive &&
                      state.size === "xl" &&
                      state.hierarchy === "tertiary-color" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-307.svg"
                    : state.hierarchy === "tertiary-gray" &&
                      state.size === "xl" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-303.svg"
                    : state.destructive &&
                      state.hierarchy === "tertiary-gray" &&
                      state.size === "xl" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-299.svg"
                    : state.hierarchy === "secondary-gray" &&
                      state.size === "xl" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-295.svg"
                    : state.destructive &&
                      state.hierarchy === "secondary-gray" &&
                      state.size === "xl" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-291.svg"
                    : state.hierarchy === "primary" &&
                      state.size === "xl" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-287.svg"
                    : state.destructive &&
                      state.hierarchy === "primary" &&
                      state.size === "xl" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-283.svg"
                    : state.size === "xl" &&
                      state.hierarchy === "secondary-color" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-279.svg"
                    : (!state.destructive &&
                        state.hierarchy === "link-color" &&
                        state.size === "two-xl" &&
                        state.state === "hover") ||
                      (!state.destructive &&
                        state.hierarchy === "secondary-color" &&
                        state.size === "two-xl" &&
                        state.state === "hover") ||
                      (!state.destructive &&
                        state.hierarchy === "tertiary-color" &&
                        state.size === "two-xl" &&
                        state.state === "hover")
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-278.svg"
                    : state.destructive &&
                      state.size === "xl" &&
                      state.hierarchy === "secondary-color" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-275.svg"
                    : (state.destructive &&
                        state.hierarchy === "link-color" &&
                        state.size === "two-xl" &&
                        state.state === "hover") ||
                      (state.destructive &&
                        state.hierarchy === "link-gray" &&
                        state.size === "two-xl" &&
                        state.state === "hover") ||
                      (state.destructive &&
                        state.hierarchy === "secondary-color" &&
                        state.size === "two-xl" &&
                        state.state === "hover") ||
                      (state.destructive &&
                        state.hierarchy === "secondary-gray" &&
                        state.size === "two-xl" &&
                        state.state === "hover") ||
                      (state.destructive &&
                        state.hierarchy === "tertiary-color" &&
                        state.size === "two-xl" &&
                        state.state === "hover") ||
                      (state.destructive &&
                        state.hierarchy === "tertiary-gray" &&
                        state.size === "two-xl" &&
                        state.state === "hover")
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-274.svg"
                    : state.size === "xl" &&
                      state.hierarchy === "link-color" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-271.svg"
                    : state.destructive &&
                      state.size === "xl" &&
                      state.hierarchy === "link-color" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-267.svg"
                    : state.size === "xl" &&
                      state.hierarchy === "link-gray" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-263.svg"
                    : state.size === "xl" &&
                      state.destructive &&
                      state.hierarchy === "link-gray" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-259.svg"
                    : state.hierarchy === "tertiary-color" &&
                      state.size === "xl" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-255.svg"
                    : state.destructive &&
                      state.size === "xl" &&
                      state.state === "hover" &&
                      state.hierarchy === "tertiary-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-251.svg"
                    : state.hierarchy === "tertiary-gray" &&
                      state.size === "xl" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-247.svg"
                    : state.destructive &&
                      state.hierarchy === "tertiary-gray" &&
                      state.size === "xl" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-243.svg"
                    : state.hierarchy === "secondary-gray" &&
                      state.size === "xl" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-239.svg"
                    : state.hierarchy === "secondary-gray" &&
                      !state.destructive &&
                      state.state === "hover" &&
                      state.size === "two-xl"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-238.svg"
                    : state.destructive &&
                      state.hierarchy === "secondary-gray" &&
                      state.size === "xl" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-235.svg"
                    : state.state === "default" &&
                      state.hierarchy === "primary" &&
                      state.size === "sm" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-151.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.hierarchy === "primary" &&
                      state.size === "sm"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-149.svg"
                    : state.state === "default" &&
                      state.size === "sm" &&
                      state.hierarchy === "secondary-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-147.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.size === "sm" &&
                      state.hierarchy === "secondary-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-145.svg"
                    : state.state === "default" &&
                      state.size === "sm" &&
                      state.hierarchy === "link-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-143.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.size === "sm" &&
                      state.hierarchy === "link-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-141.svg"
                    : state.state === "default" &&
                      state.hierarchy === "link-gray" &&
                      state.size === "sm" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-139.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.hierarchy === "link-gray" &&
                      state.size === "sm"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-137.svg"
                    : state.state === "default" &&
                      state.hierarchy === "tertiary-color" &&
                      state.size === "sm" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-135.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.hierarchy === "tertiary-color" &&
                      state.size === "sm"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-133.svg"
                    : state.state === "default" &&
                      state.hierarchy === "tertiary-gray" &&
                      state.size === "sm" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-131.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.hierarchy === "tertiary-gray" &&
                      state.size === "sm"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-129.svg"
                    : state.state === "default" &&
                      state.hierarchy === "secondary-gray" &&
                      state.size === "sm" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-127.svg"
                    : state.state === "default" &&
                      state.destructive &&
                      state.hierarchy === "secondary-gray" &&
                      state.size === "sm"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-125.svg"
                    : state.hierarchy === "primary" &&
                      state.state === "disabled" &&
                      state.size === "sm" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-123.svg"
                    : state.destructive &&
                      state.hierarchy === "primary" &&
                      state.state === "disabled" &&
                      state.size === "sm"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-121.svg"
                    : state.state === "disabled" &&
                      state.hierarchy === "secondary-color" &&
                      state.size === "sm" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-119.svg"
                    : state.destructive &&
                      state.state === "disabled" &&
                      state.hierarchy === "secondary-color" &&
                      state.size === "sm"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-117.svg"
                    : state.state === "disabled" &&
                      state.hierarchy === "link-color" &&
                      state.size === "sm" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-115.svg"
                    : state.destructive &&
                      state.state === "disabled" &&
                      state.hierarchy === "link-color" &&
                      state.size === "sm"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-113.svg"
                    : state.state === "disabled" &&
                      state.hierarchy === "link-gray" &&
                      state.size === "sm" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-111.svg"
                    : state.state === "disabled" &&
                      state.destructive &&
                      state.hierarchy === "link-gray" &&
                      state.size === "sm"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-109.svg"
                    : state.hierarchy === "tertiary-color" &&
                      state.state === "disabled" &&
                      state.size === "sm" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-107.svg"
                    : state.destructive &&
                      state.state === "disabled" &&
                      state.size === "sm" &&
                      state.hierarchy === "tertiary-color"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-105.svg"
                    : state.hierarchy === "tertiary-gray" &&
                      state.state === "disabled" &&
                      state.size === "sm" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-103.svg"
                    : state.destructive &&
                      state.hierarchy === "tertiary-gray" &&
                      state.state === "disabled" &&
                      state.size === "sm"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-101.svg"
                    : state.hierarchy === "secondary-gray" &&
                      state.state === "disabled" &&
                      state.size === "sm" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-99.svg"
                    : state.destructive &&
                      state.hierarchy === "secondary-gray" &&
                      state.state === "disabled" &&
                      state.size === "sm"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-97.svg"
                    : state.hierarchy === "primary" &&
                      state.size === "sm" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-95.svg"
                    : state.destructive &&
                      state.hierarchy === "primary" &&
                      state.size === "sm" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-93.svg"
                    : state.state === "focused" &&
                      state.size === "sm" &&
                      state.hierarchy === "secondary-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-91.svg"
                    : state.destructive &&
                      state.size === "sm" &&
                      state.hierarchy === "secondary-color" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-89.svg"
                    : state.state === "focused" &&
                      state.size === "sm" &&
                      state.hierarchy === "link-color" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-87.svg"
                    : state.destructive &&
                      state.size === "sm" &&
                      state.hierarchy === "link-color" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-85.svg"
                    : state.hierarchy === "link-gray" &&
                      state.state === "focused" &&
                      state.size === "sm" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-83.svg"
                    : state.destructive &&
                      state.hierarchy === "link-gray" &&
                      state.size === "sm" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-81.svg"
                    : state.hierarchy === "tertiary-color" &&
                      state.state === "focused" &&
                      state.size === "sm" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-79.svg"
                    : state.destructive &&
                      state.hierarchy === "tertiary-color" &&
                      state.size === "sm" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-77.svg"
                    : state.hierarchy === "tertiary-gray" &&
                      state.size === "sm" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-75.svg"
                    : state.destructive &&
                      state.hierarchy === "tertiary-gray" &&
                      state.size === "sm" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-73.svg"
                    : state.hierarchy === "secondary-gray" &&
                      state.size === "sm" &&
                      state.state === "focused" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-71.svg"
                    : state.destructive &&
                      state.hierarchy === "secondary-gray" &&
                      state.size === "sm" &&
                      state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-69.svg"
                    : state.hierarchy === "primary" &&
                      state.size === "sm" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-67.svg"
                    : state.destructive &&
                      state.hierarchy === "primary" &&
                      state.size === "sm" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-65.svg"
                    : state.size === "sm" &&
                      state.hierarchy === "secondary-color" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-63.svg"
                    : state.destructive &&
                      state.size === "sm" &&
                      state.hierarchy === "secondary-color" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-61.svg"
                    : state.size === "sm" &&
                      state.hierarchy === "link-color" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-59.svg"
                    : state.destructive &&
                      state.size === "sm" &&
                      state.hierarchy === "link-color" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-57.svg"
                    : state.state === "hover" &&
                      state.hierarchy === "link-gray" &&
                      state.size === "sm" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-55.svg"
                    : state.destructive &&
                      state.state === "hover" &&
                      state.hierarchy === "link-gray" &&
                      state.size === "sm"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-53.svg"
                    : state.size === "sm" &&
                      state.hierarchy === "tertiary-color" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-51.svg"
                    : state.destructive &&
                      state.hierarchy === "tertiary-color" &&
                      state.state === "hover" &&
                      state.size === "sm"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-49.svg"
                    : state.hierarchy === "tertiary-gray" &&
                      state.size === "sm" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-47.svg"
                    : state.destructive &&
                      state.hierarchy === "tertiary-gray" &&
                      state.size === "sm" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-45.svg"
                    : state.hierarchy === "secondary-gray" &&
                      state.size === "sm" &&
                      state.state === "hover" &&
                      !state.destructive
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-43.svg"
                    : state.destructive &&
                      state.hierarchy === "secondary-gray" &&
                      state.size === "sm" &&
                      state.state === "hover"
                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-41.svg"
                    : "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-442.svg"
                }
              />
            )}
          </>
        </>
      )}

      {state.icon === "only" && (
        <Placeholder
          className={`${state.size === "two-xl" ? "class-8" : "class-9"}`}
          placeholder={
            state.state === "default" && state.hierarchy === "primary" && state.size === "md" && !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-648.svg"
              : state.state === "default" && state.destructive && state.hierarchy === "primary" && state.size === "md"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-647.svg"
              : state.state === "default" &&
                state.size === "md" &&
                state.hierarchy === "secondary-color" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-646.svg"
              : state.state === "default" &&
                state.destructive &&
                state.size === "md" &&
                state.hierarchy === "secondary-color"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-645.svg"
              : state.state === "default" &&
                state.hierarchy === "tertiary-color" &&
                state.size === "md" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-644.svg"
              : state.state === "default" &&
                state.destructive &&
                state.size === "md" &&
                state.hierarchy === "tertiary-color"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-643.svg"
              : state.state === "default" &&
                state.hierarchy === "tertiary-gray" &&
                state.size === "md" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-642.svg"
              : state.state === "default" &&
                state.destructive &&
                state.hierarchy === "tertiary-gray" &&
                state.size === "md"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-641.svg"
              : state.state === "default" &&
                state.hierarchy === "secondary-gray" &&
                state.size === "md" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-640.svg"
              : state.state === "default" &&
                state.destructive &&
                state.hierarchy === "secondary-gray" &&
                state.size === "md"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-639.svg"
              : state.state === "disabled" && state.hierarchy === "primary" && state.size === "md" && !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-638.svg"
              : state.state === "disabled" && state.destructive && state.hierarchy === "primary" && state.size === "md"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-637.svg"
              : state.state === "disabled" &&
                state.size === "md" &&
                state.hierarchy === "secondary-color" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-636.svg"
              : state.state === "disabled" &&
                state.destructive &&
                state.size === "md" &&
                state.hierarchy === "secondary-color"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-635.svg"
              : state.state === "disabled" &&
                state.hierarchy === "tertiary-color" &&
                state.size === "md" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-634.svg"
              : state.state === "disabled" &&
                state.destructive &&
                state.size === "md" &&
                state.hierarchy === "tertiary-color"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-633.svg"
              : state.state === "disabled" &&
                state.hierarchy === "tertiary-gray" &&
                state.size === "md" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-632.svg"
              : state.state === "disabled" &&
                state.destructive &&
                state.hierarchy === "tertiary-gray" &&
                state.size === "md"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-631.svg"
              : state.state === "disabled" &&
                state.hierarchy === "secondary-gray" &&
                state.size === "md" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-630.svg"
              : state.state === "disabled" &&
                state.destructive &&
                state.hierarchy === "secondary-gray" &&
                state.size === "md"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-629.svg"
              : state.hierarchy === "primary" && state.size === "md" && state.state === "focused" && !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-628.svg"
              : state.destructive && state.hierarchy === "primary" && state.size === "md" && state.state === "focused"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-627.svg"
              : state.state === "focused" &&
                state.size === "md" &&
                state.hierarchy === "secondary-color" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-626.svg"
              : state.destructive &&
                state.size === "md" &&
                state.hierarchy === "secondary-color" &&
                state.state === "focused"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-625.svg"
              : state.hierarchy === "tertiary-color" &&
                state.size === "md" &&
                state.state === "focused" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-624.svg"
              : state.destructive &&
                state.size === "md" &&
                state.hierarchy === "tertiary-color" &&
                state.state === "focused"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-623.svg"
              : state.hierarchy === "tertiary-gray" &&
                state.size === "md" &&
                state.state === "focused" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-622.svg"
              : state.destructive &&
                state.hierarchy === "tertiary-gray" &&
                state.size === "md" &&
                state.state === "focused"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-621.svg"
              : state.hierarchy === "secondary-gray" &&
                state.size === "md" &&
                state.state === "focused" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-620.svg"
              : state.destructive &&
                state.hierarchy === "secondary-gray" &&
                state.size === "md" &&
                state.state === "focused"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-619.svg"
              : state.hierarchy === "primary" && state.size === "md" && state.state === "hover" && !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-618.svg"
              : state.destructive && state.hierarchy === "primary" && state.size === "md" && state.state === "hover"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-617.svg"
              : state.size === "md" &&
                state.hierarchy === "secondary-color" &&
                state.state === "hover" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-616.svg"
              : state.destructive &&
                state.size === "md" &&
                state.hierarchy === "secondary-color" &&
                state.state === "hover"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-615.svg"
              : state.hierarchy === "tertiary-color" &&
                state.size === "md" &&
                state.state === "hover" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-614.svg"
              : state.destructive &&
                state.size === "md" &&
                state.state === "hover" &&
                state.hierarchy === "tertiary-color"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-613.svg"
              : state.hierarchy === "tertiary-gray" &&
                state.size === "md" &&
                state.state === "hover" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-612.svg"
              : state.destructive &&
                state.hierarchy === "tertiary-gray" &&
                state.size === "md" &&
                state.state === "hover"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-611.svg"
              : state.hierarchy === "secondary-gray" &&
                state.size === "md" &&
                state.state === "hover" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-610.svg"
              : state.destructive &&
                state.hierarchy === "secondary-gray" &&
                state.size === "md" &&
                state.state === "hover"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-609.svg"
              : state.state === "default" && state.size === "lg" && state.hierarchy === "primary" && !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-496.svg"
              : state.state === "default" && state.size === "lg" && state.hierarchy === "primary" && state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-495.svg"
              : state.state === "default" &&
                state.size === "lg" &&
                state.hierarchy === "secondary-color" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-494.svg"
              : state.state === "default" &&
                state.size === "lg" &&
                state.destructive &&
                state.hierarchy === "secondary-color"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-493.svg"
              : state.state === "default" &&
                state.size === "lg" &&
                state.hierarchy === "tertiary-color" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-492.svg"
              : state.state === "default" &&
                state.size === "lg" &&
                state.destructive &&
                state.hierarchy === "tertiary-color"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-491.svg"
              : state.state === "default" &&
                state.size === "lg" &&
                state.hierarchy === "tertiary-gray" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-490.svg"
              : state.state === "default" &&
                state.size === "lg" &&
                state.hierarchy === "tertiary-gray" &&
                state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-489.svg"
              : state.state === "default" &&
                state.size === "lg" &&
                state.hierarchy === "secondary-gray" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-488.svg"
              : state.state === "default" &&
                state.size === "lg" &&
                state.hierarchy === "secondary-gray" &&
                state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-487.svg"
              : state.size === "lg" && state.hierarchy === "primary" && state.state === "disabled" && !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-486.svg"
              : state.size === "lg" && state.hierarchy === "primary" && state.destructive && state.state === "disabled"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-485.svg"
              : state.size === "lg" &&
                state.state === "disabled" &&
                state.hierarchy === "secondary-color" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-484.svg"
              : state.size === "lg" &&
                state.destructive &&
                state.state === "disabled" &&
                state.hierarchy === "secondary-color"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-483.svg"
              : state.size === "lg" &&
                state.state === "disabled" &&
                state.hierarchy === "tertiary-color" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-482.svg"
              : state.size === "lg" &&
                state.destructive &&
                state.state === "disabled" &&
                state.hierarchy === "tertiary-color"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-481.svg"
              : state.size === "lg" &&
                state.hierarchy === "tertiary-gray" &&
                state.state === "disabled" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-480.svg"
              : state.size === "lg" &&
                state.hierarchy === "tertiary-gray" &&
                state.destructive &&
                state.state === "disabled"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-479.svg"
              : state.size === "lg" &&
                state.hierarchy === "secondary-gray" &&
                state.state === "disabled" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-478.svg"
              : state.size === "lg" &&
                state.hierarchy === "secondary-gray" &&
                state.destructive &&
                state.state === "disabled"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-477.svg"
              : state.size === "lg" && state.hierarchy === "primary" && state.state === "focused" && !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-476.svg"
              : state.size === "lg" && state.hierarchy === "primary" && state.destructive && state.state === "focused"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-475.svg"
              : state.size === "lg" &&
                state.state === "focused" &&
                state.hierarchy === "secondary-color" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-474.svg"
              : state.size === "lg" &&
                state.destructive &&
                state.hierarchy === "secondary-color" &&
                state.state === "focused"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-473.svg"
              : state.size === "lg" &&
                state.hierarchy === "tertiary-color" &&
                state.state === "focused" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-472.svg"
              : state.size === "lg" &&
                state.destructive &&
                state.hierarchy === "tertiary-color" &&
                state.state === "focused"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-471.svg"
              : state.size === "lg" &&
                state.hierarchy === "tertiary-gray" &&
                state.state === "focused" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-470.svg"
              : state.size === "lg" &&
                state.hierarchy === "tertiary-gray" &&
                state.destructive &&
                state.state === "focused"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-469.svg"
              : state.size === "lg" &&
                state.hierarchy === "secondary-gray" &&
                state.state === "focused" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-468.svg"
              : state.size === "lg" &&
                state.hierarchy === "secondary-gray" &&
                state.destructive &&
                state.state === "focused"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-467.svg"
              : state.size === "lg" && state.hierarchy === "primary" && state.state === "hover" && !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-466.svg"
              : state.size === "lg" && state.hierarchy === "primary" && state.destructive && state.state === "hover"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-465.svg"
              : state.size === "lg" &&
                state.hierarchy === "secondary-color" &&
                state.state === "hover" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-464.svg"
              : state.size === "lg" &&
                state.destructive &&
                state.hierarchy === "secondary-color" &&
                state.state === "hover"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-463.svg"
              : state.size === "lg" &&
                state.hierarchy === "tertiary-color" &&
                state.state === "hover" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-462.svg"
              : state.size === "lg" &&
                state.destructive &&
                state.hierarchy === "tertiary-color" &&
                state.state === "hover"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-461.svg"
              : state.size === "lg" &&
                state.hierarchy === "tertiary-gray" &&
                state.state === "hover" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-460.svg"
              : state.size === "lg" &&
                state.hierarchy === "tertiary-gray" &&
                state.destructive &&
                state.state === "hover"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-459.svg"
              : state.size === "lg" &&
                state.hierarchy === "secondary-gray" &&
                state.state === "hover" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-458.svg"
              : state.size === "lg" &&
                state.hierarchy === "secondary-gray" &&
                state.destructive &&
                state.state === "hover"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-457.svg"
              : state.state === "default" && state.hierarchy === "primary" && state.size === "xl" && !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-232.svg"
              : state.hierarchy === "primary" && state.size === "two-xl"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-454.svg"
              : state.state === "default" && state.destructive && state.hierarchy === "primary" && state.size === "xl"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-230.svg"
              : state.state === "default" &&
                state.size === "xl" &&
                state.hierarchy === "secondary-color" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-228.svg"
              : (!state.destructive &&
                  state.hierarchy === "secondary-color" &&
                  state.size === "two-xl" &&
                  state.state === "default") ||
                (!state.destructive &&
                  state.hierarchy === "secondary-color" &&
                  state.size === "two-xl" &&
                  state.state === "focused") ||
                (!state.destructive &&
                  state.hierarchy === "tertiary-color" &&
                  state.size === "two-xl" &&
                  state.state === "default") ||
                (!state.destructive &&
                  state.hierarchy === "tertiary-color" &&
                  state.size === "two-xl" &&
                  state.state === "focused")
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-446.svg"
              : state.state === "default" &&
                state.destructive &&
                state.size === "xl" &&
                state.hierarchy === "secondary-color"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-226.svg"
              : (state.destructive &&
                  state.hierarchy === "secondary-color" &&
                  state.size === "two-xl" &&
                  state.state === "default") ||
                (state.destructive &&
                  state.hierarchy === "secondary-color" &&
                  state.size === "two-xl" &&
                  state.state === "focused") ||
                (state.destructive &&
                  state.hierarchy === "secondary-gray" &&
                  state.size === "two-xl" &&
                  state.state === "default") ||
                (state.destructive &&
                  state.hierarchy === "secondary-gray" &&
                  state.size === "two-xl" &&
                  state.state === "focused") ||
                (state.destructive &&
                  state.hierarchy === "tertiary-color" &&
                  state.size === "two-xl" &&
                  state.state === "default") ||
                (state.destructive &&
                  state.hierarchy === "tertiary-color" &&
                  state.size === "two-xl" &&
                  state.state === "focused") ||
                (state.destructive &&
                  state.hierarchy === "tertiary-gray" &&
                  state.size === "two-xl" &&
                  state.state === "default") ||
                (state.destructive &&
                  state.hierarchy === "tertiary-gray" &&
                  state.size === "two-xl" &&
                  state.state === "focused")
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-442.svg"
              : state.state === "default" &&
                state.hierarchy === "tertiary-color" &&
                state.size === "xl" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-224.svg"
              : state.state === "default" &&
                state.destructive &&
                state.size === "xl" &&
                state.hierarchy === "tertiary-color"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-222.svg"
              : state.state === "default" &&
                state.hierarchy === "tertiary-gray" &&
                state.size === "xl" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-220.svg"
              : (!state.destructive &&
                  state.hierarchy === "tertiary-gray" &&
                  state.size === "two-xl" &&
                  state.state === "default") ||
                (!state.destructive &&
                  state.hierarchy === "tertiary-gray" &&
                  state.size === "two-xl" &&
                  state.state === "focused")
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-430.svg"
              : state.state === "default" &&
                state.destructive &&
                state.hierarchy === "tertiary-gray" &&
                state.size === "xl"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-218.svg"
              : state.state === "default" &&
                state.hierarchy === "secondary-gray" &&
                state.size === "xl" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-216.svg"
              : (!state.destructive &&
                  state.hierarchy === "secondary-gray" &&
                  state.size === "two-xl" &&
                  state.state === "default") ||
                (!state.destructive &&
                  state.hierarchy === "secondary-gray" &&
                  state.size === "two-xl" &&
                  state.state === "focused") ||
                (!state.destructive &&
                  state.hierarchy === "tertiary-gray" &&
                  state.size === "two-xl" &&
                  state.state === "hover")
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-406.svg"
              : state.state === "default" &&
                state.destructive &&
                state.hierarchy === "secondary-gray" &&
                state.size === "xl"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-214.svg"
              : state.size === "xl" && state.hierarchy === "primary" && state.state === "disabled" && !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-212.svg"
              : state.size === "xl" && state.destructive && state.hierarchy === "primary" && state.state === "disabled"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-210.svg"
              : state.size === "xl" &&
                state.state === "disabled" &&
                state.hierarchy === "secondary-color" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-208.svg"
              : !state.destructive &&
                state.state === "disabled" &&
                state.hierarchy === "secondary-color" &&
                state.size === "two-xl"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-390.svg"
              : state.size === "xl" &&
                state.destructive &&
                state.state === "disabled" &&
                state.hierarchy === "secondary-color"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-206.svg"
              : (state.destructive &&
                  state.hierarchy === "secondary-color" &&
                  state.size === "two-xl" &&
                  state.state === "disabled") ||
                (state.destructive &&
                  state.hierarchy === "secondary-gray" &&
                  state.size === "two-xl" &&
                  state.state === "disabled") ||
                (state.destructive &&
                  state.hierarchy === "tertiary-color" &&
                  state.size === "two-xl" &&
                  state.state === "disabled") ||
                (state.destructive &&
                  state.hierarchy === "tertiary-gray" &&
                  state.size === "two-xl" &&
                  state.state === "disabled")
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-386.svg"
              : state.size === "xl" &&
                state.hierarchy === "tertiary-color" &&
                state.state === "disabled" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-204.svg"
              : (!state.destructive &&
                  state.hierarchy === "secondary-gray" &&
                  state.size === "two-xl" &&
                  state.state === "disabled") ||
                (!state.destructive &&
                  state.hierarchy === "tertiary-color" &&
                  state.size === "two-xl" &&
                  state.state === "disabled") ||
                (!state.destructive &&
                  state.hierarchy === "tertiary-gray" &&
                  state.size === "two-xl" &&
                  state.state === "disabled")
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-382.svg"
              : state.size === "xl" &&
                state.destructive &&
                state.state === "disabled" &&
                state.hierarchy === "tertiary-color"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-202.svg"
              : state.size === "xl" &&
                state.hierarchy === "tertiary-gray" &&
                state.state === "disabled" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-200.svg"
              : state.size === "xl" &&
                state.destructive &&
                state.hierarchy === "tertiary-gray" &&
                state.state === "disabled"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-198.svg"
              : state.size === "xl" &&
                state.hierarchy === "secondary-gray" &&
                state.state === "disabled" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-196.svg"
              : state.size === "xl" &&
                state.destructive &&
                state.hierarchy === "secondary-gray" &&
                state.state === "disabled"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-194.svg"
              : state.hierarchy === "primary" && state.size === "xl" && state.state === "focused" && !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-192.svg"
              : state.destructive && state.hierarchy === "primary" && state.size === "xl" && state.state === "focused"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-190.svg"
              : state.state === "focused" &&
                state.size === "xl" &&
                state.hierarchy === "secondary-color" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-188.svg"
              : state.destructive &&
                state.size === "xl" &&
                state.hierarchy === "secondary-color" &&
                state.state === "focused"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-186.svg"
              : state.hierarchy === "tertiary-color" &&
                state.size === "xl" &&
                state.state === "focused" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-184.svg"
              : state.destructive &&
                state.size === "xl" &&
                state.hierarchy === "tertiary-color" &&
                state.state === "focused"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-182.svg"
              : state.hierarchy === "tertiary-gray" &&
                state.size === "xl" &&
                state.state === "focused" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-180.svg"
              : state.destructive &&
                state.hierarchy === "tertiary-gray" &&
                state.size === "xl" &&
                state.state === "focused"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-178.svg"
              : state.hierarchy === "secondary-gray" &&
                state.size === "xl" &&
                state.state === "focused" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-176.svg"
              : state.destructive &&
                state.hierarchy === "secondary-gray" &&
                state.size === "xl" &&
                state.state === "focused"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-174.svg"
              : state.hierarchy === "primary" && state.size === "xl" && state.state === "hover" && !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-172.svg"
              : state.destructive && state.hierarchy === "primary" && state.size === "xl" && state.state === "hover"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-170.svg"
              : state.size === "xl" &&
                state.hierarchy === "secondary-color" &&
                state.state === "hover" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-168.svg"
              : (!state.destructive &&
                  state.hierarchy === "secondary-color" &&
                  state.size === "two-xl" &&
                  state.state === "hover") ||
                (!state.destructive &&
                  state.hierarchy === "tertiary-color" &&
                  state.size === "two-xl" &&
                  state.state === "hover")
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-278.svg"
              : state.destructive &&
                state.size === "xl" &&
                state.hierarchy === "secondary-color" &&
                state.state === "hover"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-166.svg"
              : (state.destructive &&
                  state.hierarchy === "secondary-color" &&
                  state.size === "two-xl" &&
                  state.state === "hover") ||
                (state.destructive &&
                  state.hierarchy === "secondary-gray" &&
                  state.size === "two-xl" &&
                  state.state === "hover") ||
                (state.destructive &&
                  state.hierarchy === "tertiary-color" &&
                  state.size === "two-xl" &&
                  state.state === "hover") ||
                (state.destructive &&
                  state.hierarchy === "tertiary-gray" &&
                  state.size === "two-xl" &&
                  state.state === "hover")
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-274.svg"
              : state.hierarchy === "tertiary-color" &&
                state.size === "xl" &&
                state.state === "hover" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-164.svg"
              : state.destructive &&
                state.size === "xl" &&
                state.state === "hover" &&
                state.hierarchy === "tertiary-color"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-162.svg"
              : state.hierarchy === "tertiary-gray" &&
                state.size === "xl" &&
                state.state === "hover" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-160.svg"
              : state.destructive &&
                state.hierarchy === "tertiary-gray" &&
                state.size === "xl" &&
                state.state === "hover"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-158.svg"
              : state.hierarchy === "secondary-gray" &&
                state.size === "xl" &&
                state.state === "hover" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-156.svg"
              : state.hierarchy === "secondary-gray" &&
                !state.destructive &&
                state.state === "hover" &&
                state.size === "two-xl"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-238.svg"
              : state.destructive &&
                state.hierarchy === "secondary-gray" &&
                state.size === "xl" &&
                state.state === "hover"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-154.svg"
              : state.state === "default" && state.hierarchy === "primary" && state.size === "sm" && !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-40.svg"
              : state.state === "default" && state.destructive && state.hierarchy === "primary" && state.size === "sm"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-39.svg"
              : state.state === "default" &&
                state.size === "sm" &&
                state.hierarchy === "secondary-color" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-38.svg"
              : state.state === "default" &&
                state.destructive &&
                state.size === "sm" &&
                state.hierarchy === "secondary-color"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-37.svg"
              : state.state === "default" &&
                state.hierarchy === "tertiary-color" &&
                state.size === "sm" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-36.svg"
              : state.state === "default" &&
                state.destructive &&
                state.hierarchy === "tertiary-color" &&
                state.size === "sm"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-35.svg"
              : state.state === "default" &&
                state.hierarchy === "tertiary-gray" &&
                state.size === "sm" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-34.svg"
              : state.state === "default" &&
                state.destructive &&
                state.hierarchy === "tertiary-gray" &&
                state.size === "sm"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-33.svg"
              : state.state === "default" &&
                state.hierarchy === "secondary-gray" &&
                state.size === "sm" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-32.svg"
              : state.state === "default" &&
                state.destructive &&
                state.hierarchy === "secondary-gray" &&
                state.size === "sm"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-31.svg"
              : state.hierarchy === "primary" && state.state === "disabled" && state.size === "sm" && !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-30.svg"
              : state.destructive && state.hierarchy === "primary" && state.state === "disabled" && state.size === "sm"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-29.svg"
              : state.state === "disabled" &&
                state.hierarchy === "secondary-color" &&
                state.size === "sm" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-28.svg"
              : state.destructive &&
                state.state === "disabled" &&
                state.hierarchy === "secondary-color" &&
                state.size === "sm"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-27.svg"
              : state.hierarchy === "tertiary-color" &&
                state.state === "disabled" &&
                state.size === "sm" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-26.svg"
              : state.destructive &&
                state.state === "disabled" &&
                state.size === "sm" &&
                state.hierarchy === "tertiary-color"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-25.svg"
              : state.hierarchy === "tertiary-gray" &&
                state.state === "disabled" &&
                state.size === "sm" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-24.svg"
              : state.destructive &&
                state.hierarchy === "tertiary-gray" &&
                state.state === "disabled" &&
                state.size === "sm"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-23.svg"
              : state.hierarchy === "secondary-gray" &&
                state.state === "disabled" &&
                state.size === "sm" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-22.svg"
              : state.destructive &&
                state.hierarchy === "secondary-gray" &&
                state.state === "disabled" &&
                state.size === "sm"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-21.svg"
              : state.hierarchy === "primary" && state.size === "sm" && state.state === "focused" && !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-20.svg"
              : state.destructive && state.hierarchy === "primary" && state.size === "sm" && state.state === "focused"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-19.svg"
              : state.state === "focused" &&
                state.size === "sm" &&
                state.hierarchy === "secondary-color" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-18.svg"
              : state.destructive &&
                state.size === "sm" &&
                state.hierarchy === "secondary-color" &&
                state.state === "focused"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-17.svg"
              : state.hierarchy === "tertiary-color" &&
                state.state === "focused" &&
                state.size === "sm" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-16.svg"
              : state.destructive &&
                state.hierarchy === "tertiary-color" &&
                state.size === "sm" &&
                state.state === "focused"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-15.svg"
              : state.hierarchy === "tertiary-gray" &&
                state.size === "sm" &&
                state.state === "focused" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-14.svg"
              : state.destructive &&
                state.hierarchy === "tertiary-gray" &&
                state.size === "sm" &&
                state.state === "focused"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-13.svg"
              : state.hierarchy === "secondary-gray" &&
                state.size === "sm" &&
                state.state === "focused" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-12.svg"
              : state.destructive &&
                state.hierarchy === "secondary-gray" &&
                state.size === "sm" &&
                state.state === "focused"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-11.svg"
              : state.hierarchy === "primary" && state.size === "sm" && state.state === "hover" && !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-10.svg"
              : state.destructive && state.hierarchy === "primary" && state.size === "sm" && state.state === "hover"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-9.svg"
              : state.size === "sm" &&
                state.hierarchy === "secondary-color" &&
                state.state === "hover" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-8.svg"
              : state.destructive &&
                state.size === "sm" &&
                state.hierarchy === "secondary-color" &&
                state.state === "hover"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-7.svg"
              : state.hierarchy === "tertiary-color" &&
                state.size === "sm" &&
                state.state === "hover" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-6.svg"
              : state.destructive &&
                state.size === "sm" &&
                state.state === "hover" &&
                state.hierarchy === "tertiary-color"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-5.svg"
              : state.hierarchy === "tertiary-gray" &&
                state.size === "sm" &&
                state.state === "hover" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-4.svg"
              : state.destructive &&
                state.hierarchy === "tertiary-gray" &&
                state.size === "sm" &&
                state.state === "hover"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-3.svg"
              : state.hierarchy === "secondary-gray" &&
                state.size === "sm" &&
                state.state === "hover" &&
                !state.destructive
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-2.svg"
              : state.destructive &&
                state.hierarchy === "secondary-gray" &&
                state.size === "sm" &&
                state.state === "hover"
              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/placeholder-1.svg"
              : undefined
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
  }

  return state;
}

Button.propTypes = {
  iconTrailing: PropTypes.bool,
  iconLeading: PropTypes.bool,
  size: PropTypes.oneOf(["xl", "lg", "two-xl", "sm", "md"]),
  hierarchy: PropTypes.oneOf([
    "tertiary-color",
    "link-color",
    "tertiary-gray",
    "secondary-color",
    "link-gray",
    "primary",
    "secondary-gray",
  ]),
  icon: PropTypes.oneOf(["dot-leading", "only", "default"]),
  destructive: PropTypes.bool,
  stateProp: PropTypes.oneOf(["disabled", "focused", "hover", "default"]),
  text: PropTypes.string,
};
