import React, { useState, useEffect } from 'react'

import axios from "axios";
import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import e from 'express';

function FullRecipe(data) {
    const id = data.data;
    console.log(id)
    const [content, setContent] = useState([<div dangerouslySetInnerHTML={{ __html: id.Ingredients }} />])
    function Reci() {
        setContent(
            <div dangerouslySetInnerHTML={{ __html: id.recipe }} />
        )
    }
    function Ingre() {
        setContent(
            <div dangerouslySetInnerHTML={{ __html: id.Ingredients }} />
        )
    }

    return (
        <>
            
            <button id='bu1' className="btn btn-primary btn-sm btn-block"  onClick={()=>{Reci()}} >Click to see the recipe instructions</button>
            <button id='bu1' className="btn btn-primary btn-sm btn-block"  onClick={()=>{Ingre()}}>Click to see the recipe ingredients</button>
            {content}



        </>
    )
}
export default FullRecipe 