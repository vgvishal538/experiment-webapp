import PropTypes from "prop-types";
import React from "react";
import { TableHeader } from "../TableHeader";
import "./style.css";

export const TableHeaderCell = ({
    text,
    checkbox,
    color,
    className,
    tableHeaderText = "Company",
    tableHeaderTextClassName,
}) => {
    return (
        <div className={`table-header-cell ${color} text-${text} checkbox-${checkbox} ${className}`}>
            {checkbox && (
                <div className="checkbox">
                    <div className="checkbox-base" />
                </div>
            )}

            {checkbox && text && (
                <TableHeader
                    arrow="down"
                    className="table-header-instance"
                    helpIcon={false}
                    stateProp="default"
                    text="Company"
                />
            )}

            {!checkbox && text && (
                <TableHeader
                    arrow="false"
                    className="table-header-instance"
                    helpIcon={false}
                    stateProp="default"
                    text={tableHeaderText}
                    textClassName={tableHeaderTextClassName}
                />
            )}
        </div>
    );
};

TableHeaderCell.propTypes = {
    text: PropTypes.bool,
    checkbox: PropTypes.bool,
    color: PropTypes.oneOf(["gray", "white"]),
    tableHeaderText: PropTypes.string,
};
