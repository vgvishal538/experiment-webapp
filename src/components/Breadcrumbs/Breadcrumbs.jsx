import PropTypes from "prop-types";
import React from "react";
import { ChevronRight1 } from "../../icons/ChevronRight1";
import { BreadcrumbButton } from "../BreadcrumbButton";
import "./style.css";

export const Breadcrumbs = ({ divider, type, breakpoint, className }) => {
  return (
    <div className={`breadcrumbs type-0-${type} breakpoint-8-${breakpoint} ${className}`}>
      {type === "text" && (
        <BreadcrumbButton className="breadcrumb-button-base" current={false} icon stateProp="default" type="text" />
      )}

      {divider === "slash" && type === "text" && (
        <img
          className="slash-divider"
          alt="Slash divider"
          src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/slash-divider-29.svg"
        />
      )}

      {["button-gray-with-border", "button-gray", "button-primary", "text-with-line"].includes(type) && (
        <div className="tabs">
          <BreadcrumbButton
            className="breadcrumb-button-base"
            current={false}
            icon
            stateProp="default"
            type={type === "text-with-line" ? "text" : type === "button-primary" ? "button-primary" : "button-gray"}
          />
          {divider === "slash" && (
            <img
              className="slash-divider"
              alt="Slash divider"
              src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/slash-divider-29.svg"
            />
          )}

          {divider === "chevron" && <ChevronRight1 className="chevron-right" />}

          <BreadcrumbButton
            className="breadcrumb-button-base"
            current={false}
            icon={false}
            stateProp="default"
            text="Settings"
            type={type === "text-with-line" ? "text" : type === "button-primary" ? "button-primary" : "button-gray"}
          />
          {divider === "chevron" && (
            <>
              <ChevronRight1 className="chevron-right" />
              <BreadcrumbButton
                className="breadcrumb-button-base"
                current={false}
                icon={false}
                stateProp="default"
                text="..."
                type={type === "text-with-line" ? "text" : type === "button-primary" ? "button-primary" : "button-gray"}
              />
              <ChevronRight1 className="chevron-right" />
              <BreadcrumbButton
                className="breadcrumb-button-base"
                current
                icon={false}
                stateProp="default"
                text="Team"
                type={type === "text-with-line" ? "text" : type === "button-primary" ? "button-primary" : "button-gray"}
              />
            </>
          )}

          {divider === "slash" && (
            <>
              <img
                className="slash-divider"
                alt="Slash divider"
                src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/slash-divider-29.svg"
              />
              <BreadcrumbButton
                className="breadcrumb-button-base"
                current={false}
                icon={false}
                stateProp="default"
                text="..."
                type={type === "text-with-line" ? "text" : type === "button-primary" ? "button-primary" : "button-gray"}
              />
              <img
                className="slash-divider"
                alt="Slash divider"
                src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/slash-divider-29.svg"
              />
              <BreadcrumbButton
                className="breadcrumb-button-base"
                current
                icon={false}
                stateProp="default"
                text="Team"
                type={type === "text-with-line" ? "text" : type === "button-primary" ? "button-primary" : "button-gray"}
              />
            </>
          )}
        </div>
      )}

      {type === "text" && divider === "chevron" && <ChevronRight1 className="chevron-right" />}

      {type === "text" && (
        <BreadcrumbButton
          className="breadcrumb-button-base"
          current={false}
          icon={false}
          stateProp="default"
          text="Settings"
          type="text"
        />
      )}

      {type === "text" && divider === "chevron" && (
        <>
          <ChevronRight1 className="chevron-right" />
          <BreadcrumbButton
            className="breadcrumb-button-base"
            current={false}
            icon={false}
            stateProp="default"
            text="..."
            type="text"
          />
          <ChevronRight1 className="chevron-right" />
          <BreadcrumbButton
            className="breadcrumb-button-base"
            current
            icon={false}
            stateProp="default"
            text="Team"
            type="text"
          />
        </>
      )}

      {divider === "slash" && type === "text" && (
        <>
          <img
            className="slash-divider"
            alt="Slash divider"
            src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/slash-divider-29.svg"
          />
          <BreadcrumbButton
            className="breadcrumb-button-base"
            current={false}
            icon={false}
            stateProp="default"
            text="..."
            type="text"
          />
          <img
            className="slash-divider"
            alt="Slash divider"
            src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/slash-divider-29.svg"
          />
          <BreadcrumbButton
            className="breadcrumb-button-base"
            current
            icon={false}
            stateProp="default"
            text="Team"
            type="text"
          />
        </>
      )}
    </div>
  );
};

Breadcrumbs.propTypes = {
  divider: PropTypes.oneOf(["chevron", "slash"]),
  type: PropTypes.oneOf(["button-gray", "button-primary", "button-gray-with-border", "text-with-line", "text"]),
  breakpoint: PropTypes.oneOf(["desktop", "mobile"]),
};