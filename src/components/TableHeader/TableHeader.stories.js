import { TableHeader } from ".";

export default {
    title: "Components/TableHeader",
    component: TableHeader,
    argTypes: {
        arrow: {
            options: ["false", "up", "down"],
            control: { type: "select" },
        },
        stateProp: {
            options: ["disabled", "hover", "default"],
            control: { type: "select" },
        },
    },
};

export const Default = {
    args: {
        helpIcon: true,
        arrow: "false",
        stateProp: "disabled",
        className: {},
        textClassName: {},
        text: "Company",
    },
};
