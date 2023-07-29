import { TableCell } from ".";

export default {
    title: "Components/TableCell",
    component: TableCell,
    argTypes: {
        style: {
            options: [
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
            ],
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
        style: "lead-icon-toggle",
        supportingText: true,
        stateProp: "disabled",
        className: {},
        textAndSupportingClassName: {},
        text: "Olivia Rhye",
    },
};
