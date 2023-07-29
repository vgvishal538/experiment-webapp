import PropTypes from "prop-types";
import React from "react";
import { Breadcrumbs } from "../Breadcrumbs";
import { Button } from "../Buttons";
import { InputDropdown } from "../InputDropdown";
import "./style.css";

export const PageHeader = ({
    divider = true,
    search = true,
    actions = true,
    supportingText = true,
    breadcrumbs = true,
    style,
    breakpoint,
    className,
    textClassName,
    text = "Team members",
}) => {
    return (
        <div className={`page-header ${style} ${breakpoint} ${className}`}>
            {["avatar", "simple"].includes(style) && (
                <>
                    <>
                        {breadcrumbs && (
                            <>
                                <>
                                    {breakpoint === "desktop" && (
                                        <Breadcrumbs breakpoint="desktop" className="instance-node" divider="chevron" type="button-gray" />
                                    )}

                                    {breakpoint === "mobile" && (
                                        <Button
                                            className="instance-node"
                                            destructive={false}
                                            hierarchy="link-gray"
                                            icon="default"
                                            iconTrailing={false}
                                            size="md"
                                            stateProp="default"
                                            text="Back"
                                        />
                                    )}
                                </>
                            </>
                        )}
                    </>
                    <div className="content">
                        <div className="text-and-supporting">
                            {style === "simple" && (
                                <>
                                    <div className={`text-wrapper ${textClassName}`}>{text}</div>
                                    <>
                                        {supportingText && (
                                            <p className="supporting-text">Manage your team members and their account permissions here.</p>
                                        )}
                                    </>
                                </>
                            )}

                            {style === "avatar" && (
                                <>
                                    <div className={`avatar-wrapper ${textClassName}`}>
                                        <img
                                            className="img"
                                            alt="Avatar"
                                            src={
                                                breakpoint === "mobile"
                                                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/avatar-37@2x.png"
                                                    : "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/avatar-38@2x.png"
                                            }
                                        />
                                    </div>
                                    <div className="div">
                                        <div className="text-2">Olivia Rhye</div>
                                        {supportingText && <div className="olivia-untitledui"></div>}
                                    </div>
                                </>
                            )}
                        </div>
                        {actions && (
                            <div className="actions">
                                <Button
                                    className="instance-node"
                                    destructive={false}
                                    hierarchy={breakpoint === "desktop" ? "tertiary-gray" : "secondary-gray"}
                                    icon="default"
                                    iconLeading={false}
                                    iconTrailing={false}
                                    size="md"
                                    stateProp="default"
                                    text={breakpoint === "desktop" ? "Tertiary" : "Secondary"}
                                />
                                <Button
                                    className="instance-node"
                                    destructive={false}
                                    hierarchy={breakpoint === "mobile" ? "primary" : "secondary-color"}
                                    icon="default"
                                    iconLeading={false}
                                    iconTrailing={false}
                                    size="md"
                                    stateProp="default"
                                    text={breakpoint === "mobile" ? "Primary" : "Secondary"}
                                />
                                {breakpoint === "desktop" && (
                                    <>
                                        <Button
                                            className="instance-node"
                                            destructive={false}
                                            hierarchy="secondary-gray"
                                            icon="default"
                                            iconLeading={false}
                                            iconTrailing={false}
                                            size="md"
                                            stateProp="default"
                                            text="Secondary"
                                        />
                                        <Button
                                            className="instance-node"
                                            destructive={false}
                                            hierarchy="primary"
                                            icon="default"
                                            iconLeading={false}
                                            iconTrailing={false}
                                            size="md"
                                            stateProp="default"
                                            text="Primary"
                                        />
                                    </>
                                )}
                            </div>
                        )}

                        {search && (
                            <InputDropdown
                                className={`${style === "avatar" && breakpoint === "mobile" && "instance-node"} ${style === "simple" && breakpoint === "mobile" && "input-dropdown-instance"
                                    }`}
                                hintText={false}
                                label={false}
                                stateProp="placeholder"
                                type="search"
                            />
                        )}
                    </div>
                    <>
                        {divider && (
                            <img
                                className="divider"
                                alt="Divider"
                                src={
                                    breakpoint === "mobile"
                                        ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/divider-9.svg"
                                        : "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/divider-11.svg"
                                }
                            />
                        )}
                    </>
                </>
            )}

            {breakpoint === "mobile" && ["banner-avatar-centered", "banner-avatar"].includes(style) && (
                <div className="image-and-header">
                    <div className="image-wrap" />
                    <div className="container">
                        <div className="content-2">
                            <div className="avatar-profile-photo">
                                <div className="overlap-group">
                                    <div className="content-wrapper">
                                        <img
                                            className="content-3"
                                            alt="Content"
                                            src={
                                                style === "banner-avatar-centered"
                                                    ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/content-2@2x.png"
                                                    : "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/content-3@2x.png"
                                            }
                                        />
                                    </div>
                                    <img
                                        className="verified-tick"
                                        alt="Verified tick"
                                        src={
                                            style === "banner-avatar-centered"
                                                ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/verified-tick-2.svg"
                                                : "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/verified-tick-3.svg"
                                        }
                                    />
                                </div>
                            </div>
                            <div className="text-and-supporting-2">
                                <div className="text-3">Olivia Rhye</div>
                                {supportingText && <div className="supporting-text-2"></div>}
                            </div>
                            {breadcrumbs && (
                                <Button
                                    className={`${style === "banner-avatar-centered" ? "class" : "class-2"}`}
                                    destructive={false}
                                    hierarchy="link-gray"
                                    icon="default"
                                    iconTrailing={false}
                                    size="md"
                                    stateProp="default"
                                    text="Back"
                                />
                            )}
                        </div>
                        {actions && (
                            <div className="actions-2">
                                <Button
                                    className={`${style === "banner-avatar-centered" ? "class-3" : "instance-node"}`}
                                    destructive={false}
                                    hierarchy="secondary-gray"
                                    icon="default"
                                    iconLeading={false}
                                    iconTrailing={false}
                                    size="md"
                                    stateProp="default"
                                    text="Secondary"
                                />
                                <Button
                                    className={`${style === "banner-avatar-centered" ? "class-3" : "instance-node"}`}
                                    destructive={false}
                                    hierarchy="primary"
                                    icon="default"
                                    iconLeading={false}
                                    iconTrailing={false}
                                    size="md"
                                    stateProp="default"
                                    text="Primary"
                                />
                            </div>
                        )}

                        {search && (
                            <InputDropdown
                                className="input-dropdown-instance"
                                hintText={false}
                                label={false}
                                stateProp="placeholder"
                                type="search"
                            />
                        )}

                        {divider && (
                            <img
                                className="divider"
                                alt="Divider"
                                src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/divider-8.svg"
                            />
                        )}
                    </div>
                </div>
            )}

            {(style === "banner-simple-centered" ||
                style === "banner-simple" ||
                (breakpoint === "desktop" && style === "banner-avatar-centered") ||
                (breakpoint === "desktop" && style === "banner-avatar")) && (
                    <>
                        <div className="image-wrap-2">
                            {/* {breakpoint === "desktop" && (
                                <div className="image">
                                    <img
                                        className="image-2"
                                        alt="Image"
                                        src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/image-3.png"
                                    />
                                </div>
                            )} */}
                        </div>
                        <div className="container-2">
                            {(style === "banner-avatar" ||
                                (breakpoint === "desktop" && style === "banner-simple-centered") ||
                                (breakpoint === "desktop" && style === "banner-simple")) && (
                                    <>
                                        <div className="avatar-and-content">
                                            {style === "banner-avatar" && (
                                                <>
                                                    <div className="overlap-group-wrapper">
                                                        <div className="overlap-group-2">
                                                            <div className="img-wrapper">
                                                                <img
                                                                    className="content-4"
                                                                    alt="Content"
                                                                    src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/content-1@2x.png"
                                                                />
                                                            </div>
                                                            <img
                                                                className="verified-tick-2"
                                                                alt="Verified tick"
                                                                src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/verified-tick-1.svg"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="content-5">
                                                        {breadcrumbs && (
                                                            <Breadcrumbs
                                                                breakpoint="desktop"
                                                                className="instance-node"
                                                                divider="chevron"
                                                                type="button-gray"
                                                            />
                                                        )}

                                                        <div className="heading">
                                                            <div className="div">
                                                                <div className="text-4">Olivia Rhye</div>
                                                                {supportingText && <div className="supporting-text-3"></div>}
                                                            </div>
                                                            {actions && (
                                                                <div className="actions">
                                                                    <Button
                                                                        className="instance-node"
                                                                        destructive={false}
                                                                        hierarchy="tertiary-gray"
                                                                        icon="default"
                                                                        iconLeading={false}
                                                                        iconTrailing={false}
                                                                        size="md"
                                                                        stateProp="default"
                                                                        text="Tertiary"
                                                                    />
                                                                    <Button
                                                                        className="instance-node"
                                                                        destructive={false}
                                                                        hierarchy="secondary-color"
                                                                        icon="default"
                                                                        iconLeading={false}
                                                                        iconTrailing={false}
                                                                        size="md"
                                                                        stateProp="default"
                                                                        text="Secondary"
                                                                    />
                                                                    <Button
                                                                        className="instance-node"
                                                                        destructive={false}
                                                                        hierarchy="secondary-gray"
                                                                        icon="default"
                                                                        iconLeading={false}
                                                                        iconTrailing={false}
                                                                        size="md"
                                                                        stateProp="default"
                                                                        text="Secondary"
                                                                    />
                                                                    <Button
                                                                        className="instance-node"
                                                                        destructive={false}
                                                                        hierarchy="primary"
                                                                        icon="default"
                                                                        iconLeading={false}
                                                                        iconTrailing={false}
                                                                        size="md"
                                                                        stateProp="default"
                                                                        text="Primary"
                                                                    />
                                                                </div>
                                                            )}

                                                            {search && (
                                                                <InputDropdown hintText={false} label={false} stateProp="placeholder" type="search" />
                                                            )}
                                                        </div>
                                                    </div>
                                                </>
                                            )}

                                            {["banner-simple-centered", "banner-simple"].includes(style) && (
                                                <>
                                                    <>
                                                        {breadcrumbs && (
                                                            <Breadcrumbs
                                                                breakpoint="desktop"
                                                                className="instance-node"
                                                                divider="chevron"
                                                                type="button-gray"
                                                            />
                                                        )}
                                                    </>
                                                </>
                                            )}

                                            {style === "banner-simple-centered" && (
                                                <>
                                                    <div className="text-and-supporting-3">
                                                        <div className="text-5">Olivia Rhye</div>
                                                        {supportingText && <div className="supporting-text-4"></div>}
                                                    </div>
                                                    <>
                                                        {actions && (
                                                            <div className="actions">
                                                                <Button
                                                                    className="instance-node"
                                                                    destructive={false}
                                                                    hierarchy="tertiary-gray"
                                                                    icon="default"
                                                                    iconLeading={false}
                                                                    iconTrailing={false}
                                                                    size="md"
                                                                    stateProp="default"
                                                                    text="Tertiary"
                                                                />
                                                                <Button
                                                                    className="instance-node"
                                                                    destructive={false}
                                                                    hierarchy="secondary-color"
                                                                    icon="default"
                                                                    iconLeading={false}
                                                                    iconTrailing={false}
                                                                    size="md"
                                                                    stateProp="default"
                                                                    text="Secondary"
                                                                />
                                                                <Button
                                                                    className="instance-node"
                                                                    destructive={false}
                                                                    hierarchy="secondary-gray"
                                                                    icon="default"
                                                                    iconLeading={false}
                                                                    iconTrailing={false}
                                                                    size="md"
                                                                    stateProp="default"
                                                                    text="Secondary"
                                                                />
                                                                <Button
                                                                    className="instance-node"
                                                                    destructive={false}
                                                                    hierarchy="primary"
                                                                    icon="default"
                                                                    iconLeading={false}
                                                                    iconTrailing={false}
                                                                    size="md"
                                                                    stateProp="default"
                                                                    text="Primary"
                                                                />
                                                            </div>
                                                        )}
                                                    </>
                                                    <>
                                                        {search && (
                                                            <InputDropdown
                                                                className="instance-node"
                                                                hintText={false}
                                                                label={false}
                                                                stateProp="placeholder"
                                                                type="search"
                                                            />
                                                        )}
                                                    </>
                                                </>
                                            )}

                                            {style === "banner-simple" && (
                                                <div className="heading-2">
                                                    <div className="div">
                                                        <div className="text-4">{text}</div>
                                                        {supportingText && (
                                                            <p className="p">Manage your team members and their account permissions here.</p>
                                                        )}
                                                    </div>
                                                    {actions && (
                                                        <div className="actions">
                                                            <Button
                                                                className="instance-node"
                                                                destructive={false}
                                                                hierarchy="tertiary-gray"
                                                                icon="default"
                                                                iconLeading={false}
                                                                iconTrailing={false}
                                                                size="md"
                                                                stateProp="default"
                                                                text="Tertiary"
                                                            />
                                                            <Button
                                                                className="instance-node"
                                                                destructive={false}
                                                                hierarchy="secondary-color"
                                                                icon="default"
                                                                iconLeading={false}
                                                                iconTrailing={false}
                                                                size="md"
                                                                stateProp="default"
                                                                text="Secondary"
                                                            />
                                                            <Button
                                                                className="instance-node"
                                                                destructive={false}
                                                                hierarchy="secondary-gray"
                                                                icon="default"
                                                                iconLeading={false}
                                                                iconTrailing={false}
                                                                size="md"
                                                                stateProp="default"
                                                                text="Secondary"
                                                            />
                                                            <Button
                                                                className="instance-node"
                                                                destructive={false}
                                                                hierarchy="primary"
                                                                icon="default"
                                                                iconLeading={false}
                                                                iconTrailing={false}
                                                                size="md"
                                                                stateProp="default"
                                                                text="Primary"
                                                            />
                                                        </div>
                                                    )}

                                                    {search && <InputDropdown hintText={false} label={false} stateProp="placeholder" type="search" />}
                                                </div>
                                            )}
                                        </div>
                                        <>
                                            {divider && (
                                                <img
                                                    className="divider"
                                                    alt="Divider"
                                                    src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/divider-11.svg"
                                                />
                                            )}
                                        </>
                                    </>
                                )}

                            {style === "banner-avatar-centered" && (
                                <div className="overlap-group-wrapper">
                                    <div className="overlap-group-2">
                                        <div className="img-wrapper">
                                            <img
                                                className="content-4"
                                                alt="Content"
                                                src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/content-1@2x.png"
                                            />
                                        </div>
                                        <img
                                            className="verified-tick-2"
                                            alt="Verified tick"
                                            src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/verified-tick.svg"
                                        />
                                    </div>
                                </div>
                            )}

                            {(breakpoint === "mobile" || style === "banner-avatar-centered") && (
                                <div className="content-6">
                                    {style === "banner-avatar-centered" && (
                                        <>
                                            <div className="text-and-supporting-3">
                                                <div className="text-5">Olivia Rhye</div>
                                                {supportingText && <div className="supporting-text-4"></div>}
                                            </div>
                                            <>
                                                {actions && (
                                                    <div className="actions">
                                                        <Button
                                                            className="instance-node"
                                                            destructive={false}
                                                            hierarchy="tertiary-gray"
                                                            icon="default"
                                                            iconLeading={false}
                                                            iconTrailing={false}
                                                            size="md"
                                                            stateProp="default"
                                                            text="Tertiary"
                                                        />
                                                        <Button
                                                            className="instance-node"
                                                            destructive={false}
                                                            hierarchy="secondary-color"
                                                            icon="default"
                                                            iconLeading={false}
                                                            iconTrailing={false}
                                                            size="md"
                                                            stateProp="default"
                                                            text="Secondary"
                                                        />
                                                        <Button
                                                            className="instance-node"
                                                            destructive={false}
                                                            hierarchy="secondary-gray"
                                                            icon="default"
                                                            iconLeading={false}
                                                            iconTrailing={false}
                                                            size="md"
                                                            stateProp="default"
                                                            text="Secondary"
                                                        />
                                                        <Button
                                                            className="instance-node"
                                                            destructive={false}
                                                            hierarchy="primary"
                                                            icon="default"
                                                            iconLeading={false}
                                                            iconTrailing={false}
                                                            size="md"
                                                            stateProp="default"
                                                            text="Primary"
                                                        />
                                                    </div>
                                                )}
                                            </>
                                            <>
                                                {search && (
                                                    <InputDropdown
                                                        className="instance-node"
                                                        hintText={false}
                                                        label={false}
                                                        stateProp="placeholder"
                                                        type="search"
                                                    />
                                                )}
                                            </>
                                        </>
                                    )}

                                    {breakpoint === "mobile" && (
                                        <>
                                            <>
                                                {breadcrumbs && (
                                                    <Button
                                                        className="instance-node"
                                                        destructive={false}
                                                        hierarchy="link-gray"
                                                        icon="default"
                                                        iconTrailing={false}
                                                        size="md"
                                                        stateProp="default"
                                                        text="Back"
                                                    />
                                                )}
                                            </>
                                            <div className="text-and-supporting-4">
                                                <div className="text-6">
                                                    {style === "banner-simple-centered" && <>Olivia Rhye</>}

                                                    {style === "banner-simple" && <>{text}</>}
                                                </div>
                                                {supportingText && (
                                                    <>
                                                        <>
                                                            {style === "banner-simple-centered" && (
                                                                <div className="supporting-text-4"></div>
                                                            )}

                                                            {style === "banner-simple" && (
                                                                <p className="supporting-text-5">
                                                                    Manage your team members and their account permissions here.
                                                                </p>
                                                            )}
                                                        </>
                                                    </>
                                                )}
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}

                            {style === "banner-avatar-centered" && (
                                <>
                                    <>
                                        {breadcrumbs && (
                                            <Breadcrumbs
                                                breakpoint="desktop"
                                                className="breadcrumbs-instance"
                                                divider="chevron"
                                                type="button-gray"
                                            />
                                        )}
                                    </>
                                    <>
                                        {divider && (
                                            <img
                                                className="divider"
                                                alt="Divider"
                                                src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/divider-11.svg"
                                            />
                                        )}
                                    </>
                                </>
                            )}

                            {breakpoint === "mobile" && (
                                <>
                                    <>
                                        {actions && (
                                            <div className="actions-3">
                                                <Button
                                                    className={`${style === "banner-simple" ? "instance-node" : "class-3"}`}
                                                    destructive={false}
                                                    hierarchy="secondary-gray"
                                                    icon="default"
                                                    iconLeading={false}
                                                    iconTrailing={false}
                                                    size="md"
                                                    stateProp="default"
                                                    text="Secondary"
                                                />
                                                <Button
                                                    className={`${style === "banner-simple" ? "instance-node" : "class-3"}`}
                                                    destructive={false}
                                                    hierarchy="primary"
                                                    icon="default"
                                                    iconLeading={false}
                                                    iconTrailing={false}
                                                    size="md"
                                                    stateProp="default"
                                                    text="Primary"
                                                />
                                            </div>
                                        )}
                                    </>
                                    <>
                                        {search && (
                                            <InputDropdown
                                                className="input-dropdown-instance"
                                                hintText={false}
                                                label={false}
                                                stateProp="placeholder"
                                                type="search"
                                            />
                                        )}
                                    </>
                                    <>
                                        {divider && (
                                            <img
                                                className="divider"
                                                alt="Divider"
                                                src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/divider-8.svg"
                                            />
                                        )}
                                    </>
                                </>
                            )}
                        </div>
                    </>
                )}
        </div>
    );
};

PageHeader.propTypes = {
    divider: PropTypes.bool,
    search: PropTypes.bool,
    actions: PropTypes.bool,
    supportingText: PropTypes.bool,
    breadcrumbs: PropTypes.bool,
    style: PropTypes.oneOf([
        "banner-avatar",
        "banner-avatar-centered",
        "avatar",
        "banner-simple-centered",
        "banner-simple",
        "simple",
    ]),
    breakpoint: PropTypes.oneOf(["desktop", "mobile"]),
    text: PropTypes.string,
};
