import React, { useState } from 'react';
import Modal from './Modal';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "./style.css";
import { Button } from '../Buttons';


const DateRangePickerModal = ({ isOpen, onSelect, onClose }) => {
    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);

    const handleSelect = (ranges) => {
        setDateRange([ranges.selection]);
        onSelect(ranges.selection);
    };

    return (
        <Modal isOpen={isOpen} onClose={() => onClose("close_click")}>
            <div className="text-and-supporting">
                <div className="text-2">Generate Report</div>
                <p className="supporting-text">
                    Generate a report for Payments collected in following date and time range
                </p>
            </div>

            <DateRangePicker
                ranges={dateRange}
                onChange={handleSelect}
            />


            <div className="actions-wrapper">
                <div className="actions">
                    <div onClick={() => onClose("close_click")}>
                        <Button
                            className="button-instance"
                            destructive={false}
                            hierarchy="secondary-gray"
                            icon="default"
                            iconLeading={false}
                            iconTrailing={false}
                            size="md"
                            stateProp="default"
                            text="Cancel"
                            textClassName="design-component-instance-node"
                        />
                    </div>
                    <div onClick={() => onClose("generate_click")}>
                        <Button
                            className="button-2"
                            destructive={false}
                            hierarchy="primary"
                            icon="default"
                            iconLeading={false}
                            iconTrailing={false}
                            size="md"
                            stateProp="default"
                            text="Generate Report"
                            textClassName="design-component-instance-node"
                        />
                    </div>
                </div>
            </div>
        </Modal >
    );
};

export default DateRangePickerModal;
