import { TableHeaderCell } from ".";

export default {
    title: "Components/TableHeaderCell",
    component: TableHeaderCell,
    argTypes: {
        color: {
            options: ["gray", "white"],
            control: { type: "select" },
        },
    },
};

export const Default = {
    args: {
        text: true,
        checkbox: true,
        color: "gray",
        className: {},
        tableHeaderText: "Company",
        tableHeaderTextClassName: {},
    },
};
