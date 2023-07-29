import React from 'react';
import { Account } from "../../components/Account";

const HomeScreen = () => {
    return (
        <div className="main" >
            <div className="div-wrapper">
                <div className="frame-2">
                    <div className="frame-3">
                        <div className="text-13">Home</div>
                    </div>
                    <div className="frame-4">
                        <div className="nav-item-base">
                            <Account
                                className="account-ico-default"
                                groupClassName="account-instance"
                            />
                            <div className="content-10">
                                <div className="text-14">SLV Distributors</div>
                                <div className="nav-item-base-wrapper">
                                    <div className="nav-item-base-2">
                                        <div className="content-10">
                                            <div className="text-15">Firm ABC</div>
                                            <img
                                                className="icon-chevrondown"
                                                alt="Icon chevrondown"
                                                src="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/icon-chevrondown.svg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-11">
                            <div className="frame-5">
                                <div className="text-wrapper-2">AM</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeScreen;
