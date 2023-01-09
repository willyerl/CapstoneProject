import { useState, useEffect } from "react";
import React from "react";
import ModalPage from '../modalPages'
import "bootstrap/dist/css/bootstrap.min.css";
import ModalLogin from './modalLogin'
import { useAuth } from '../auth.js'
import axios from 'axios'
import ModalAdd from './modalAdd'
function Table(res, user) {
    // console.log(user)
    const [tableData, setTableData] = useState([])
    const auth = useAuth()
    const [cards, setCards] = useState([" "])
    const [mod, setMod] = useState([])
    useEffect(() => {
        setCards(res.data);
        // console.log(cards)
    })
    
    function Add(id, image, title) {
        setMod('')
      
        if (auth.user) {
            console.log("Add when Log")
            axios
                .post(`http://localhost:3001/addRecipes?user=${auth.user}&title=${title}&id=${id}&image=${image}`)
                .then(res => {
                    
                    setMod(<ModalAdd data={res.data}/>)
                    // console.log(res)
            
                })
                .catch(err => {
                    // console.log(err)
                })

        } else {
            console.log('add not log')
            setMod(<ModalLogin />)
       
            // console.log(mod)
        }
    }
    useEffect(() => {
        setTableData(res.data);



    })
   
    return (
        <>
            <div className="tableCss">
        
                {
                    tableData ? tableData.map(tableDate =>
                        <div className="card d-flex flex-row" id='cardImage' key={tableDate.id}>
                            <div className="card-header">
                            <img id={tableDate.id}  src={tableDate.image} className="card-img" alt="first Recipe" />
                            </div>
                            <div className="d-flex flex-column">
                                <div className="card-body d-flex flex-column justify-content-start">
                                    <h5 className="card-title">{tableDate.title}</h5>
                                    <p className="card-text " id="startRecipe"><div dangerouslySetInnerHTML={{ __html: tableDate.recipe }} /> </p>
                                    
                                    <ModalPage data={tableDate} />
                                    <button className="btn btn-primary mt-2" variant="primary" onClick={() => {Add(tableDate.id, tableDate.image, tableDate.title)}}>Add this recipe in your book</button>
                                </div>
                            </div>
                        </div>
                            
        
                    )

                        : console.log("")
                }
              

            </div >
            {mod}
        </>
    )
}


export default Table;

