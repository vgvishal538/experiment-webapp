import { PageHeader } from ".";

export default {
    title: "Components/PageHeader",
    component: PageHeader,
    argTypes: {
        style: {
            options: [
                "banner-avatar",
                "banner-avatar-centered",
                "avatar",
                "banner-simple-centered",
                "banner-simple",
                "simple",
            ],
            control: { type: "select" },
        },
        breakpoint: {
            options: ["desktop", "mobile"],
            control: { type: "select" },
        },
    },
};

export const Default = {
    args: {
        divider: true,
        search: true,
        actions: true,
        supportingText: true,
        breadcrumbs: true,
        style: "banner-avatar",
        breakpoint: "desktop",
        className: {},
        textClassName: {},
        text: "Team members",
    },
};
