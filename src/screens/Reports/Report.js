import React, { useState } from 'react';
import { Coins } from "../../components/Coins";
import { Account } from "../../components/Account";
import { PageHeader } from "../../components/PageHeader";
import DateRangePickerModal from '../../components/Modal/DateRangePickerModal';
import { TableCell } from '../../components/TableCell';
import { TableHeaderCell } from '../../components/TableHeaderCell';
import { Clock } from '../../components/Clock';

const ReportsScreen = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDateRange, setSelectedDateRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
    });
    const [showReport, setshowReport] = useState(false);


    const handleDateRangeSelect = (dateRange) => {
        setSelectedDateRange(dateRange);
    };

    const handleDownload = () => {

        const downloadLink = document.createElement('a');
        downloadLink.href = process.env.PUBLIC_URL + '/sample.pdf';
        downloadLink.download = 'sample.pdf';
        downloadLink.click();
    };

    const handleGenerate = () => {
        setIsModalOpen(!isModalOpen);
        setshowReport(false);

    }
    const handleCloseModal = (status) => {
        setIsModalOpen(false);
        if (status === "generate_click") {
            setshowReport(!showReport);
            handleDownload();
        }

    };

    const getCurrentDateTimeFormatted = () => {
        const currentDate = new Date();

        const options = {
            month: 'long', // Full month name (e.g., April)
            day: 'numeric', // Numeric day of the month (e.g., 24)
            hour: 'numeric', // Numeric hour (e.g., 1)
            minute: 'numeric', // Numeric minute (e.g., 0)
            hour12: true, // Use 12-hour clock (true for am/pm, false for 24-hour format)
        };

        return new Intl.DateTimeFormat('en-US', options).format(currentDate);
    };
    const currentDateTimeFormatted = getCurrentDateTimeFormatted();



    return (
        <div>
            <DateRangePickerModal
                isOpen={isModalOpen}
                onSelect={handleDateRangeSelect}
                onClose={handleCloseModal}
            />
            <div className="main" >
                <div className="">
                    <div className="">
                        <div className="div-wrapper">
                            <div className="frame-2">
                                <div className="frame-3">
                                    <div className="text-13">Reports </div>
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
                        <div className="filters">
                            <div className="frame-6">
                                <div className="page-header-wrapper">
                                    <PageHeader
                                        actions={false}
                                        breadcrumbs={false}
                                        breakpoint="desktop"
                                        className="page-header-instance"
                                        divider={false}
                                        search={false}
                                        supportingText={false}
                                        text="Collection Reports"
                                        textClassName="design-component-instance-node"
                                    />
                                </div>
                            </div>
                            <div className="frame-7">
                                <div className="metric-group">
                                    <div className="metric-item-wrapper">
                                        <div className="metric-item">
                                            <Coins
                                                className="coins-02"
                                                coins="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/coins-02-2.svg"
                                            />
                                            <div className="frame-8">
                                                <div className="frame-9">
                                                    <div className="frame-10">
                                                        <div className="heading-and-number">
                                                            <div className="number-and-badge">
                                                                <div className="text-16">Payments collected</div>
                                                            </div>
                                                        </div>
                                                        <p className="heading-3">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
                                                            hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices
                                                            mauris.
                                                        </p>
                                                    </div>
                                                    <div className="button-wrapper">
                                                        <div className="button-2">
                                                            <div className="text-17" onClick={() => handleGenerate()}>Generate Report</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="metric-group">
                                    <div className="metric-item-wrapper">
                                        <div className="metric-item">
                                            <Coins
                                                className="coins-02"
                                                coins="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/coins-02-1.svg"
                                            />
                                            <div className="frame-8">
                                                <div className="frame-9">
                                                    <div className="frame-10">
                                                        <div className="heading-and-number">
                                                            <div className="number-and-badge">
                                                                <p className="text-16">Pending payments of Creditail- financed invoices</p>
                                                            </div>
                                                        </div>
                                                        <p className="heading-3">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
                                                            hendrerit urna. Pellentesque sit amet sapien fringilla,
                                                        </p>
                                                    </div>
                                                    <div className="button-wrapper">
                                                        <div className="button-2">
                                                            <div className="text-17" onClick={() => handleGenerate()}>Generate Report</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="filters">
                            <div className="frame-6">
                                <div className="page-header-wrapper">
                                    <PageHeader
                                        actions={false}
                                        breadcrumbs={false}
                                        breakpoint="desktop"
                                        className="page-header-instance"
                                        divider={false}
                                        search={false}
                                        
                                        supportingText={false}
                                        text="Credit Financing Reports"
                                        textClassName="design-component-instance-node"
                                    />
                                </div>
                            </div>
                            <div className="frame-7">
                                <div className="metric-group-wrapper">
                                    <div className="metric-item-wrapper">
                                        <div className="metric-item">
                                            <Coins
                                                className="coins-02"
                                                coins="https://generation-sessions.s3.amazonaws.com/ce4be08f7e6073714fc1035d53225092/img/coins-02.svg"
                                            />
                                            <div className="frame-8">
                                                <div className="frame-9">
                                                    <div className="frame-10">
                                                        <div className="heading-and-number">
                                                            <div className="number-and-badge">
                                                                <div className="text-16">Financing by Creditail</div>
                                                            </div>
                                                        </div>
                                                        <p className="heading-3">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
                                                            hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices
                                                            mauris.
                                                        </p>
                                                    </div>
                                                    <div className="button-wrapper">
                                                        <div className="button-2">
                                                            <div className="text-17" onClick={() => handleGenerate()}>Generate Report</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {showReport ? <div className="label">
                        <div className="heading-wrapper">
                            <div className="heading">LATEST REPORTS</div>
                        </div>
                    </div> : null}
                    {showReport ? <div className="container-wrapper">
                        <div className="main-container">
                            <div className="container">
                                <div className="table">
                                    <div className="content">
                                        <div className="column">
                                            <TableHeaderCell
                                                checkbox={false}
                                                className="table-header-cell-instance"
                                                color="white"
                                                tableHeaderText="Report Name"
                                                tableHeaderTextClassName="design-component-instance-node"
                                                text
                                            />
                                            <div className="table-cell-2">
                                                <div className="text-19">Report_lorem_Ipsum</div>
                                            </div>
                                        </div>
                                        <div className="column-2">
                                            <TableHeaderCell
                                                checkbox={false}
                                                className="table-header-cell-instance"
                                                color="white"
                                                tableHeaderText="Date Range"
                                                tableHeaderTextClassName="design-component-instance-node"
                                                text
                                            />
                                            <div className="table-cell-2">
                                                <p className="text-19"> {selectedDateRange.startDate.toDateString()} -{' '}
                                                    {selectedDateRange.endDate.toDateString()}</p>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <TableHeaderCell
                                                checkbox={false}
                                                className="table-header-cell-instance"
                                                color="white"
                                                tableHeaderText="Date and Time"
                                                tableHeaderTextClassName="table-header-cell-2"
                                                text
                                            />
                                            <TableCell
                                                className="table-cell-instance"
                                                stateProp="default"
                                                
                                                supportingText={false}
                                                text={currentDateTimeFormatted}
                                                textAndSupportingClassName="design-component-instance-node"
                                            />
                                        </div>
                                        <div className="column">
                                            <TableHeaderCell
                                                checkbox={false}
                                                className="table-header-cell-instance"
                                                color="white"
                                                tableHeaderText="Brand"
                                                tableHeaderTextClassName="table-header-cell-2"
                                                text
                                            />
                                            <TableCell
                                                className="table-cell-instance"
                                                stateProp="default"
                                                
                                                supportingText={false}
                                                text="Cadbury"
                                                textAndSupportingClassName="design-component-instance-node"
                                            />
                                        </div>
                                        <div className="column-3">
                                            <TableHeaderCell
                                                checkbox={false}
                                                className="table-header-cell-instance"
                                                color="white"
                                                tableHeaderText="Download"
                                                tableHeaderTextClassName="table-header-cell-2"
                                                text
                                            />
                                            <div className="frame">
                                                <Clock
                                                    className="clock-instance"
                                                    clock="https://generation-sessions.s3.amazonaws.com/9078dad974856d3f957a5935ba3da50b/img/clock-1.svg"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div> : null}




                </div>

            </div>
        </div>
    );
};

export default ReportsScreen;
