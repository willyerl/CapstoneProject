import FullRecipe from './hooks/takeFullRecipe'
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// import Recipe from './takeFullRecipe'

import axios from 'axios'

import Modal from 'react-bootstrap/Modal';
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

function ModalPages(data) {
    // console.log(data.data)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    // const [recipe, setRecipe] = useState([' qwed'])
    // useEffect(() => {
    //     console.log(data.data)
    //     axios
    //         .get(`http://localhost:3001/getFullRecipes?id=${data.data}`)
    //         .then(res => {
    //             setRecipe(res.data)
                
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // },[])
        // console.log(data.data)
        return (
            
            <>
                <button className="btn btn-primary mt-2" variant="primary" onClick={handleShow}>
                    See the full recipe
                </button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Full recipe</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><FullRecipe data={data.data} /></Modal.Body>
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


