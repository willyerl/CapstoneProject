
import React from "react";
import { Outlet, } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const AddNewRecipe = () => {


    const navigate = useNavigate()
    return (
        <>
            <button className="btn btn-primary mt-2" variant="primary" onClick={() => navigate('/AddNewRecipe/WriteNew')}>Write your on recipe</button>
            <button className="btn btn-primary mt-2" variant="primary" onClick={() => navigate('/AddNewRecipe/FindNew')}>Find for new recipes</button>
            <Outlet />



            <button className="btn btn-primary mt-2" variant="primary" onClick={() => navigate(-1)}>Go back</button>
        </>
    )
}
