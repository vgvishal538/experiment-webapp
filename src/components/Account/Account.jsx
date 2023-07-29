import React from "react";
import "./style.css";

export const Account = ({ className, groupClassName }) => {
  return (
    <div className={`account ${className}`}>
      <div className={`group ${groupClassName}`} />
    </div>
  );
};
