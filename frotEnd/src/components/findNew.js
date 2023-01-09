import React from "react";
// import UseTable from "./hooks/useTable";
import { useNavigate } from 'react-router-dom'
import FormNew from './formNew'
// import axios from 'axios'

 const AddNewRecipe = () => {
    const navigate = useNavigate()
    return (
        <> 
           <FormNew /><br></br>
            {/* <UseTable data={table} /> */}
            {/* <button className='Back'onClick={() => navigate(-1)}>Go back</button> */}
        </>
    )
}
export default AddNewRecipe
