import React, { useState, useEffect } from "react";
import UseTable from "./hooks/useTable";
import Blob from 'fetch-blob'
import axios from 'axios'
function Popular() {
    const [table, setTable] = useState()
    useEffect(() => {
        axios
            .get('http://localhost:3001/savedRecipes')
            .then(res => {
                let respo = res.data[0]
                for(let i in respo){
                    
                if(respo[i].formUser=='true'){
                    fetch(`http://localhost:3001/files/${respo[i].image}`)
                    .then(r => r.blob()) 
                    .then(blob => {
                        const url = URL.createObjectURL(blob);
                        const img = document.getElementById(respo[i].id);
                        img.src = url;
                        img.onload = e => URL.revokeObjectURL(url);
                    });
                }
            }
                setTable(respo)
            })
            .catch(err => {
                console.log(err)
            })
            console.log(table)
    }, [])

    return (
        <div className="PopularPage">
               <div className="Popularrecipes">
                <h2>Here are some of the favorite recipes from our users </h2>
            </div>
        <UseTable data={table} />
        
        </div>
    )
}
export default Popular







// function PopularRecipes(){

//     return(
//         <p>some text</p>
//     )
// }
// export default PopularRecipes