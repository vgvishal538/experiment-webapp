import PropTypes from "prop-types";
import React from "react";
import "./style.css";
import ReactModal from 'react-modal';



const Modal = ({ isOpen, onClose, children }) => {
    const modalStyle = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '4px',
            maxWidth: '600px',

        },

    };

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Modal"
            style={modalStyle}
            className="custom-modal-content"

        >
            {children}
        </ReactModal>
    );
};

export default Modal;