import { InputDropdown } from ".";

export default {
    title: "Components/InputDropdown",
    component: InputDropdown,
    argTypes: {
        type: {
            options: [
                "icon-leading",
                "avatar-leading",
                "default",
                "tags",
                "dot-leading",
                "search"
            ],
            control: { type: "select" }
        },
        stateProp: {
            options: ["open", "focused", "placeholder", "default"],
            control: { type: "select" }
        }
    }
};

export const Default = {
    args: {
        scrollBar: true,
        supportingText: true,
        hintText: true,
        label: true,
        type: "icon-leading",
        stateProp: "open",
        className: {}
    }
};
