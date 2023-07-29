import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { ChevronDown17 } from "../../icons/ChevronDown17";
import { XClose } from "../../icons/XClose";
import { Dot } from "../Dot";
import { SearchLg } from "../SearchLg";
import "./style.css";

export const InputDropdown = ({
  scrollBar = true,
  supportingText = true,
  hintText = true,
  label = true,
  type,
  stateProp,
  className,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    type: type || "default",
    state: stateProp || "default",
  });

  return (
    <div
      className={`input-dropdown type-${state.type} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="input-with-label">
        {label && (
          <div className="label">
            {["avatar-leading", "default", "dot-leading", "icon-leading"].includes(state.type) && <>Team member</>}

            {["search", "tags"].includes(state.type) && <>Search</>}
          </div>
        )}

        <div className={`input state-2-${state.state}`}>
          <div className="div-2">
            {["search", "tags"].includes(state.type) && (
              <SearchLg
                className="search-lg-instance"
                searchLg="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/search-lg-20.svg"
              />
            )}

            {state.type === "tags" && ["default", "focused", "open"].includes(state.state) && (
              <>
                <div className="tags">
                  <div className="tag">
                    <div className="content-7">
                      <div className="avatar-2">
                        <img
                          className="avatar-3"
                          alt="Avatar"
                          src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/avatar-36@2x.png"
                        />
                      </div>
                      <div className="text-i">Olivia</div>
                    </div>
                    <div className="tag-x-close">
                      <XClose className="x-close" />
                    </div>
                  </div>
                  <div className="tag">
                    <div className="content-7">
                      <div className="avatar-2">
                        <img
                          className="avatar-4"
                          alt="Avatar"
                          src={
                            state.state === "default"
                              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/avatar-35.svg"
                              : state.state === "focused"
                              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/avatar-33.svg"
                              : "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/avatar-31.svg"
                          }
                        />
                      </div>
                      <div className="text-i">Phoenix</div>
                    </div>
                    <div className="tag-x-close">
                      <XClose className="x-close" />
                    </div>
                  </div>
                </div>
                <div className="text-9">Lana</div>
              </>
            )}

            {(state.type === "icon-leading" || (state.state === "placeholder" && state.type === "avatar-leading")) && (
              <img
                className="img-2"
                alt="User"
                src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/user-01-18.svg"
              />
            )}

            {((state.state === "placeholder" && state.type === "avatar-leading") ||
              (state.state === "placeholder" && state.type === "tags") ||
              state.type === "default" ||
              state.type === "icon-leading" ||
              state.type === "search") && (
              <div className="text-10">
                {["default", "focused", "open"].includes(state.state) && <>Olivia Rhye</>}

                {(state.type === "tags" || (state.state === "placeholder" && state.type === "search")) && <>Search</>}

                {(state.type === "avatar-leading" ||
                  (state.state === "placeholder" && state.type === "default") ||
                  (state.state === "placeholder" && state.type === "icon-leading")) && <>Select team member</>}
              </div>
            )}

            {((state.state === "default" && state.type === "default") ||
              (state.state === "default" && state.type === "icon-leading") ||
              (state.state === "default" && state.type === "search") ||
              (state.state === "focused" && state.type === "default") ||
              (state.state === "focused" && state.type === "icon-leading") ||
              (state.state === "focused" && state.type === "search") ||
              (state.state === "open" && state.type === "default") ||
              (state.state === "open" && state.type === "icon-leading") ||
              (state.state === "open" && state.type === "search")) && (
              <>
                <>{supportingText && <div className="supporting-text-6">@olivia</div>}</>
              </>
            )}

            {state.type === "avatar-leading" && ["default", "focused", "open"].includes(state.state) && (
              <>
                <div className="avatar-5">
                  <img
                    className="avatar-6"
                    alt="Avatar"
                    src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/avatar-29@2x.png"
                  />
                </div>
                <div className="text-11">Olivia Rhye</div>
                <>{supportingText && <div className="supporting-text-6">@olivia</div>}</>
              </>
            )}

            {state.type === "dot-leading" && (
              <>
                <Dot className="dot-2" size="md" />
                <div className="text-12">
                  {["default", "focused", "open"].includes(state.state) && <>Olivia Rhye</>}

                  {state.state === "placeholder" && <>Select team member</>}
                </div>
              </>
            )}

            {state.type === "dot-leading" && ["default", "focused", "open"].includes(state.state) && (
              <>
                <>{supportingText && <div className="supporting-text-6">@olivia</div>}</>
              </>
            )}
          </div>
          {["avatar-leading", "default", "dot-leading", "icon-leading"].includes(state.type) && (
            <ChevronDown17 className="img-2" color="#667085" />
          )}
        </div>
      </div>
      {["default", "focused", "placeholder"].includes(state.state) && (
        <>
          <>{hintText && <p className="hint-text">This is a hint text to help user.</p>}</>
        </>
      )}

      {state.state === "open" && (
        <div className="menu">
          <div className="menu-items">
            <div className="input-dropdown-menu">
              <div className="content-8">
                {["avatar-leading", "default", "dot-leading", "icon-leading", "search"].includes(state.type) && (
                  <div className="text-and-supporting-5">
                    {state.type === "icon-leading" && (
                      <img
                        className="img-2"
                        alt="User"
                        src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/user-01-18.svg"
                      />
                    )}

                    {["default", "icon-leading", "search"].includes(state.type) && (
                      <>
                        <div className="text-11">Phoenix Baker</div>
                        <div className="supporting-text-6">@phoenix</div>
                      </>
                    )}

                    {state.type === "avatar-leading" && (
                      <>
                        <div className="avatar-5">
                          <img
                            className="avatar-7"
                            alt="Avatar"
                            src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/avatar-13.svg"
                          />
                        </div>
                        <div className="text-11">Phoenix Baker</div>
                        <div className="supporting-text-6">@phoenix</div>
                      </>
                    )}

                    {state.type === "dot-leading" && (
                      <>
                        <Dot className="dot-2" size="md" />
                        <div className="text-11">Phoenix Baker</div>
                        <div className="supporting-text-6">@phoenix</div>
                      </>
                    )}
                  </div>
                )}

                {state.type === "tags" && (
                  <>
                    <div className="div-2">
                      <div className="avatar-5">
                        <img
                          className="avatar-7"
                          alt="Avatar"
                          src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/avatar-30.svg"
                        />
                      </div>
                      <div className="text-11">Phoenix Baker</div>
                      <div className="supporting-text-6">@phoenix</div>
                    </div>
                    <img
                      className="img-2"
                      alt="Check"
                      src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/check-6.svg"
                    />
                  </>
                )}
              </div>
            </div>
            <div className="input-dropdown-menu">
              <div className="content-9">
                <div className="div-2">
                  {state.type === "icon-leading" && (
                    <img
                      className="img-2"
                      alt="User"
                      src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/user-01-18.svg"
                    />
                  )}

                  {["default", "icon-leading", "search"].includes(state.type) && (
                    <>
                      <div className="text-11">Olivia Rhye</div>
                      <div className="supporting-text-6">@olivia</div>
                    </>
                  )}

                  {["avatar-leading", "tags"].includes(state.type) && (
                    <>
                      <div className="avatar-5">
                        <img
                          className="avatar-6"
                          alt="Avatar"
                          src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/avatar-29@2x.png"
                        />
                      </div>
                      <div className="text-11">Olivia Rhye</div>
                      <div className="supporting-text-6">@olivia</div>
                    </>
                  )}

                  {state.type === "dot-leading" && (
                    <>
                      <Dot className="dot-2" size="md" />
                      <div className="text-11">Olivia Rhye</div>
                      <div className="supporting-text-6">@olivia</div>
                    </>
                  )}
                </div>
                <img
                  className="img-2"
                  alt="Check"
                  src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/check-6.svg"
                />
              </div>
            </div>
            <div className="input-dropdown-menu">
              <div className="text-and-supporting-wrapper">
                <div className="text-and-supporting-5">
                  {state.type === "icon-leading" && (
                    <img
                      className="img-2"
                      alt="User"
                      src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/user-01-18.svg"
                    />
                  )}

                  {["default", "icon-leading", "search"].includes(state.type) && (
                    <>
                      <div className="text-11">Lana Steiner</div>
                      <div className="supporting-text-6">@lana</div>
                    </>
                  )}

                  {["avatar-leading", "tags"].includes(state.type) && (
                    <>
                      <div className="avatar-5">
                        <img
                          className="avatar-7"
                          alt="Avatar"
                          src={
                            state.type === "avatar-leading"
                              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/avatar-11.svg"
                              : "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/avatar-28.svg"
                          }
                        />
                      </div>
                      <div className="text-11">Lana Steiner</div>
                      <div className="supporting-text-6">@lana</div>
                    </>
                  )}

                  {state.type === "dot-leading" && (
                    <>
                      <Dot className="dot-2" size="md" />
                      <div className="text-11">Lana Steiner</div>
                      <div className="supporting-text-6">@lana</div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="input-dropdown-menu">
              <div className="text-and-supporting-wrapper">
                <div className="text-and-supporting-5">
                  {state.type === "icon-leading" && (
                    <img
                      className="img-2"
                      alt="User"
                      src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/user-01-18.svg"
                    />
                  )}

                  {["default", "icon-leading", "search"].includes(state.type) && (
                    <>
                      <div className="text-11">Demi Wilkinson</div>
                      <div className="supporting-text-6">@demi</div>
                    </>
                  )}

                  {["avatar-leading", "tags"].includes(state.type) && (
                    <>
                      <div className="avatar-5">
                        <img
                          className="avatar-7"
                          alt="Avatar"
                          src={
                            state.type === "avatar-leading"
                              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/avatar-10.svg"
                              : "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/avatar-27.svg"
                          }
                        />
                      </div>
                      <div className="text-11">Demi Wilkinson</div>
                      <div className="supporting-text-6">@demi</div>
                    </>
                  )}

                  {state.type === "dot-leading" && (
                    <>
                      <Dot className="dot-2" size="md" />
                      <div className="text-11">Demi Wilkinson</div>
                      <div className="supporting-text-6">@demi</div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="input-dropdown-menu">
              <div className="text-and-supporting-wrapper">
                <div className="text-and-supporting-5">
                  {state.type === "icon-leading" && (
                    <img
                      className="img-2"
                      alt="User"
                      src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/user-01-18.svg"
                    />
                  )}

                  {["default", "icon-leading", "search"].includes(state.type) && (
                    <>
                      <div className="text-11">Candice Wu</div>
                      <div className="supporting-text-6">@candice</div>
                    </>
                  )}

                  {["avatar-leading", "tags"].includes(state.type) && (
                    <>
                      <div className="avatar-5">
                        <img
                          className="avatar-7"
                          alt="Avatar"
                          src={
                            state.type === "avatar-leading"
                              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/avatar-9.svg"
                              : "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/avatar-26.svg"
                          }
                        />
                      </div>
                      <div className="text-11">Candice Wu</div>
                      <div className="supporting-text-6">@candice</div>
                    </>
                  )}

                  {state.type === "dot-leading" && (
                    <>
                      <Dot className="dot-2" size="md" />
                      <div className="text-11">Candice Wu</div>
                      <div className="supporting-text-6">@candice</div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="input-dropdown-menu">
              <div className="text-and-supporting-wrapper">
                <div className="text-and-supporting-5">
                  {state.type === "icon-leading" && (
                    <img
                      className="img-2"
                      alt="User"
                      src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/user-01-18.svg"
                    />
                  )}

                  {["default", "icon-leading", "search"].includes(state.type) && (
                    <>
                      <div className="text-11">Natali Craig</div>
                      <div className="supporting-text-6">@natali</div>
                    </>
                  )}

                  {["avatar-leading", "tags"].includes(state.type) && (
                    <>
                      <div className="avatar-5">
                        <img
                          className="avatar-7"
                          alt="Avatar"
                          src={
                            state.type === "avatar-leading"
                              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/avatar-8.svg"
                              : "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/avatar-25.svg"
                          }
                        />
                      </div>
                      <div className="text-11">Natali Craig</div>
                      <div className="supporting-text-6">@natali</div>
                    </>
                  )}

                  {state.type === "dot-leading" && (
                    <>
                      <Dot className="dot-2" size="md" />
                      <div className="text-11">Natali Craig</div>
                      <div className="supporting-text-6">@natali</div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="input-dropdown-menu">
              <div className="text-and-supporting-wrapper">
                <div className="text-and-supporting-5">
                  {state.type === "icon-leading" && (
                    <img
                      className="user"
                      alt="User"
                      src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/user-01-8.svg"
                    />
                  )}

                  {["default", "icon-leading", "search"].includes(state.type) && (
                    <>
                      <div className="text-11">Drew Cano</div>
                      <div className="supporting-text-6">@drew</div>
                    </>
                  )}

                  {["avatar-leading", "tags"].includes(state.type) && (
                    <>
                      <div className="avatar-5">
                        <img
                          className="avatar-8"
                          alt="Avatar"
                          src={
                            state.type === "avatar-leading"
                              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/avatar-7.svg"
                              : "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/avatar-24.svg"
                          }
                        />
                      </div>
                      <div className="text-11">Drew Cano</div>
                      <div className="supporting-text-6">@drew</div>
                    </>
                  )}

                  {state.type === "dot-leading" && (
                    <>
                      <Dot className="dot-2" size="md" />
                      <div className="text-11">Drew Cano</div>
                      <div className="supporting-text-6">@drew</div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="input-dropdown-menu">
              <div className="text-and-supporting-wrapper">
                <div className="text-and-supporting-5">
                  {state.type === "icon-leading" && (
                    <img
                      className="user-2"
                      alt="User"
                      src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/user-01-7.svg"
                    />
                  )}

                  {["default", "icon-leading", "search"].includes(state.type) && (
                    <>
                      <div className="text-11">Orlando Diggs</div>
                      <div className="supporting-text-6">@orlando</div>
                    </>
                  )}

                  {["avatar-leading", "tags"].includes(state.type) && (
                    <>
                      <div className="avatar-5">
                        <img
                          className="avatar-9"
                          alt="Avatar"
                          src={
                            state.type === "avatar-leading"
                              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/avatar-6.svg"
                              : "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/avatar-23.svg"
                          }
                        />
                      </div>
                      <div className="text-11">Orlando Diggs</div>
                      <div className="supporting-text-6">@orlando</div>
                    </>
                  )}

                  {state.type === "dot-leading" && (
                    <>
                      <Dot className="dot-2" size="md" />
                      <div className="text-11">Orlando Diggs</div>
                      <div className="supporting-text-6">@orlando</div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="input-dropdown-menu">
              <div className="text-and-supporting-wrapper">
                <div className="text-and-supporting-5">
                  {state.type === "icon-leading" && (
                    <img
                      className="user-3"
                      alt="User"
                      src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/user-01-7.svg"
                    />
                  )}

                  {["default", "icon-leading", "search"].includes(state.type) && (
                    <>
                      <div className="text-11">Andi Lane</div>
                      <div className="supporting-text-6">@andi</div>
                    </>
                  )}

                  {["avatar-leading", "tags"].includes(state.type) && (
                    <>
                      <div className="avatar-5">
                        <img
                          className="avatar-10"
                          alt="Avatar"
                          src={
                            state.type === "avatar-leading"
                              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/avatar-5.svg"
                              : "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/avatar-22.svg"
                          }
                        />
                      </div>
                      <div className="text-11">Andi Lane</div>
                      <div className="supporting-text-6">@andi</div>
                    </>
                  )}

                  {state.type === "dot-leading" && (
                    <>
                      <Dot className="dot-2" size="md" />
                      <div className="text-11">Andi Lane</div>
                      <div className="supporting-text-6">@andi</div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="input-dropdown-menu">
              <div className="text-and-supporting-wrapper">
                <div className="text-and-supporting-5">
                  {state.type === "icon-leading" && (
                    <img
                      className="user-4"
                      alt="User"
                      src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/user-01-7.svg"
                    />
                  )}

                  {["default", "icon-leading", "search"].includes(state.type) && (
                    <>
                      <div className="text-11">Kate Morrison</div>
                      <div className="supporting-text-6">@kate</div>
                    </>
                  )}

                  {["avatar-leading", "tags"].includes(state.type) && (
                    <>
                      <div className="avatar-5">
                        <img
                          className="avatar-11"
                          alt="Avatar"
                          src={
                            state.type === "avatar-leading"
                              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/avatar-4.svg"
                              : "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/avatar-21.svg"
                          }
                        />
                      </div>
                      <div className="text-11">Kate Morrison</div>
                      <div className="supporting-text-6">@kate</div>
                    </>
                  )}

                  {state.type === "dot-leading" && (
                    <>
                      <Dot className="dot-2" size="md" />
                      <div className="text-11">Kate Morrison</div>
                      <div className="supporting-text-6">@kate</div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="input-dropdown-menu">
              <div className="text-and-supporting-wrapper">
                <div className="text-and-supporting-5">
                  {state.type === "icon-leading" && (
                    <img
                      className="user-5"
                      alt="User"
                      src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/user-01-7.svg"
                    />
                  )}

                  {["default", "icon-leading", "search"].includes(state.type) && (
                    <>
                      <div className="text-11">Koray Okumus</div>
                      <div className="supporting-text-6">@koray</div>
                    </>
                  )}

                  {["avatar-leading", "tags"].includes(state.type) && (
                    <>
                      <div className="avatar-5">
                        <img
                          className="avatar-12"
                          alt="Avatar"
                          src={
                            state.type === "avatar-leading"
                              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/avatar-3.svg"
                              : "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/avatar-20.svg"
                          }
                        />
                      </div>
                      <div className="text-11">Koray Okumus</div>
                      <div className="supporting-text-6">@koray</div>
                    </>
                  )}

                  {state.type === "dot-leading" && (
                    <>
                      <Dot className="dot-2" size="md" />
                      <div className="text-11">Koray Okumus</div>
                      <div className="supporting-text-6">@koray</div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="input-dropdown-menu">
              <div className="text-and-supporting-wrapper">
                <div className="text-and-supporting-5">
                  {state.type === "icon-leading" && (
                    <img
                      className="user-6"
                      alt="User"
                      src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/user-01-7.svg"
                    />
                  )}

                  {["default", "icon-leading", "search"].includes(state.type) && (
                    <>
                      <div className="text-11">Ava Wright</div>
                      <div className="supporting-text-6">@ava</div>
                    </>
                  )}

                  {["avatar-leading", "tags"].includes(state.type) && (
                    <>
                      <div className="avatar-5">
                        <img
                          className="avatar-13"
                          alt="Avatar"
                          src={
                            state.type === "avatar-leading"
                              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/avatar-2.svg"
                              : "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/avatar-19.svg"
                          }
                        />
                      </div>
                      <div className="text-11">Ava Wright</div>
                      <div className="supporting-text-6">@ava</div>
                    </>
                  )}

                  {state.type === "dot-leading" && (
                    <>
                      <Dot className="dot-2" size="md" />
                      <div className="text-11">Ava Wright</div>
                      <div className="supporting-text-6">@ava</div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="input-dropdown-menu">
              <div className="text-and-supporting-wrapper">
                <div className="text-and-supporting-5">
                  {state.type === "icon-leading" && (
                    <img
                      className="user-7"
                      alt="User"
                      src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/user-01-7.svg"
                    />
                  )}

                  {["default", "icon-leading", "search"].includes(state.type) && (
                    <>
                      <div className="text-11">Eve Leroy</div>
                      <div className="supporting-text-6">@eve</div>
                    </>
                  )}

                  {["avatar-leading", "tags"].includes(state.type) && (
                    <>
                      <div className="avatar-5">
                        <img
                          className="avatar-14"
                          alt="Avatar"
                          src={
                            state.type === "avatar-leading"
                              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/avatar-1@2x.png"
                              : "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/avatar-18@2x.png"
                          }
                        />
                      </div>
                      <div className="text-11">Eve Leroy</div>
                      <div className="supporting-text-6">@eve</div>
                    </>
                  )}

                  {state.type === "dot-leading" && (
                    <>
                      <Dot className="dot-2" size="md" />
                      <div className="text-11">Eve Leroy</div>
                      <div className="supporting-text-6">@eve</div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="input-dropdown-menu">
              <div className="text-and-supporting-wrapper">
                <div className="text-and-supporting-5">
                  {state.type === "icon-leading" && (
                    <img
                      className="user-8"
                      alt="User"
                      src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/user-01-7.svg"
                    />
                  )}

                  {["default", "icon-leading", "search"].includes(state.type) && (
                    <>
                      <div className="text-11">Zahir Mays</div>
                      <div className="supporting-text-6">@zahir</div>
                    </>
                  )}

                  {["avatar-leading", "tags"].includes(state.type) && (
                    <>
                      <div className="avatar-5">
                        <img
                          className="avatar-15"
                          alt="Avatar"
                          src={
                            state.type === "avatar-leading"
                              ? "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/avatar-1@2x.png"
                              : "https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/avatar-18@2x.png"
                          }
                        />
                      </div>
                      <div className="text-11">Zahir Mays</div>
                      <div className="supporting-text-6">@zahir</div>
                    </>
                  )}

                  {state.type === "dot-leading" && (
                    <>
                      <Dot className="dot-2" size="md" />
                      <div className="text-11">Zahir Mays</div>
                      <div className="supporting-text-6">@zahir</div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          {scrollBar && (
            <div className="scroll-bar">
              <div className="bar-wrapper">
                <div className="bar" />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.state === "default" && state.type === "default") {
    switch (action) {
      case "click":
        return {
          state: "open",
          type: "default",
        };
    }
  }

  if (state.state === "placeholder" && state.type === "default") {
    switch (action) {
      case "click":
        return {
          state: "open",
          type: "default",
        };
    }
  }

  if (state.state === "open" && state.type === "default") {
    switch (action) {
      case "click":
        return {
          state: "default",
          type: "default",
        };
    }
  }

  if (state.state === "default" && state.type === "icon-leading") {
    switch (action) {
      case "click":
        return {
          state: "open",
          type: "icon-leading",
        };
    }
  }

  if (state.state === "placeholder" && state.type === "icon-leading") {
    switch (action) {
      case "click":
        return {
          state: "open",
          type: "icon-leading",
        };
    }
  }

  if (state.state === "open" && state.type === "icon-leading") {
    switch (action) {
      case "click":
        return {
          state: "default",
          type: "icon-leading",
        };
    }
  }

  if (state.state === "default" && state.type === "search") {
    switch (action) {
      case "click":
        return {
          state: "open",
          type: "search",
        };
    }
  }

  if (state.state === "default" && state.type === "tags") {
    switch (action) {
      case "click":
        return {
          state: "open",
          type: "tags",
        };
    }
  }

  if (state.state === "placeholder" && state.type === "search") {
    switch (action) {
      case "click":
        return {
          state: "open",
          type: "search",
        };
    }
  }

  if (state.state === "placeholder" && state.type === "tags") {
    switch (action) {
      case "click":
        return {
          state: "open",
          type: "tags",
        };
    }
  }

  if (state.state === "open" && state.type === "search") {
    switch (action) {
      case "click":
        return {
          state: "default",
          type: "search",
        };
    }
  }

  if (state.state === "open" && state.type === "tags") {
    switch (action) {
      case "click":
        return {
          state: "default",
          type: "tags",
        };
    }
  }

  if (state.state === "default" && state.type === "avatar-leading") {
    switch (action) {
      case "click":
        return {
          state: "open",
          type: "avatar-leading",
        };
    }
  }

  if (state.state === "placeholder" && state.type === "avatar-leading") {
    switch (action) {
      case "click":
        return {
          state: "open",
          type: "avatar-leading",
        };
    }
  }

  if (state.state === "open" && state.type === "avatar-leading") {
    switch (action) {
      case "click":
        return {
          state: "default",
          type: "avatar-leading",
        };
    }
  }

  if (state.state === "default" && state.type === "dot-leading") {
    switch (action) {
      case "click":
        return {
          state: "open",
          type: "dot-leading",
        };
    }
  }

  if (state.state === "placeholder" && state.type === "dot-leading") {
    switch (action) {
      case "click":
        return {
          state: "open",
          type: "dot-leading",
        };
    }
  }

  if (state.state === "open" && state.type === "dot-leading") {
    switch (action) {
      case "click":
        return {
          state: "default",
          type: "dot-leading",
        };
    }
  }

  return state;
}

InputDropdown.propTypes = {
  scrollBar: PropTypes.bool,
  supportingText: PropTypes.bool,
  hintText: PropTypes.bool,
  label: PropTypes.bool,
  type: PropTypes.oneOf(["icon-leading", "avatar-leading", "default", "tags", "dot-leading", "search"]),
  stateProp: PropTypes.oneOf(["open", "focused", "placeholder", "default"]),
};
