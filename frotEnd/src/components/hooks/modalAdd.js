import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

function ModalPages(data) {
    const navigate = useNavigate()
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{data.data}</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <button className="btn btn-primary" variant="secondary" onClick={handleClose}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalPages


