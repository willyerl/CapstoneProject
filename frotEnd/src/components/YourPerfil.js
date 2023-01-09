import React, { useState, useEffect } from "react";
import UseTable from "./hooks/useTable";
import { useNavigate } from 'react-router-dom'///use context
import axios from 'axios'
import { useAuth } from './auth'
import FullRecipe from './hooks/takeFullRecipe'
import ModalPage from './modalPages'
function MyRecipes() {
    // const [parameters, setParameters] = useState()
    const navigate = useNavigate()
    const auth = useAuth()
    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }
    const [tableData, setTable] = useState()
    
    
    useEffect(() => {
        let name = auth.user
      
        axios
            .get(`http://localhost:3001/myRecipes?user=${name}`)
            .then(res => {
                let respo = res.data[0]
                let photo = respo[0]
                console.log(photo)
                for(let i in photo){
                    
                if(photo[i].formUser=='true'){
                    fetch(`http://localhost:3001/files/${photo[i].image}`)
                    .then(r => r.blob()) // consume as a Blob
                    .then(blob => {
                        const url = URL.createObjectURL(blob);
                        const img = document.getElementById(photo[i].id);
                        img.src = url;
                        img.onload = e => URL.revokeObjectURL(url);

                    });
                    // respo[i].image='2'
                }
               
            }
                // console.log(respo[0])
                setTable(respo[0])
            })
            .catch(err => {
                console.log(err)
            })
      
            // console.log(tableData)
            // })
    }, [])

    async function Del(id){
        let name = auth.user
        setTable('')
        console.log(name, id)
        await axios.delete(`http://localhost:3001/deletOne?user=${name}&id=${id}`)
            .then(
                axios
            .get(`http://localhost:3001/myRecipes?user=${name}`)
            .then(res => {
                let respo = res.data[0]
                let photo = respo[0]
                console.log(photo)
                for(let i in photo){
                    
                if(photo[i].formUser=='true'){
                    fetch(`http://localhost:3001/files/${photo[i].image}`)
                    .then(r => r.blob()) // consume as a Blob
                    .then(blob => {
                        const url = URL.createObjectURL(blob);
                        const img = document.getElementById(photo[i].id);
                        img.src = url;
                        img.onload = e => URL.revokeObjectURL(url);

                    });
                    // respo[i].image='2'
                }
               
            }
                // console.log(respo[0])
                setTable(respo[0])
            })
            .catch(err => {
                console.log(err)
            })      
            )
    }
    return (
        <div className="profilePage">
            
               <div className="Popularrecipes">
                
                <h2>{auth.user}'s recipe book</h2>
            </div>

            <button  className="btn btn-primary mt-2" variant="primary" onClick={() => navigate('/AddNewRecipe')}>Add new recipe on your book</button><br />
            <>


<div className="tableCss">
{/* <UseTable data={tableData} />*/}
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
                                <button onClick={()=> Del(tableDate.id)} >Delete</button>
                                </div>
                            </div>
                        </div>
                            
        
                    )

                        : console.log("")
                }
              

            </div > 
    {/* {
        tableData ? tableData.map(tableDate =>
            <div className="card d-flex flex-row" key={tableDate.id}>
                <div className="card-header" >
                <img id={tableDate.id} src={tableDate.image} className="card-img-top1" alt="first Recipe"  />
                </div>
                <div className="d-flex flex-column">
                    <div className="card-body d-flex flex-column justify-content-start">
                        <h5 className="card-title">{tableDate.title}</h5>
                        <p className="card-text " id="startRecipe">{tableDate.recipe}</p>
                        <ModalPage data={tableDate.recipe} />
                       
                    </div>
                </div>
            </div>
                
            //  <tr>
            //     <td><img src={tableDate.image} className="card-img-top" alt="first Recipe" id='imageList' /></td>  
            //     <td>
            //     <th key={tableDate.id}>{tableDate.id}</th>
            //     <td>{tableDate.title}</td>

            //     <ModalPage data={tableDate.id} />
            //     </td>
            // </tr>
        )

            : console.log("error")
    } */}
    {/* </tbody>
    </table> */}

</div >
</>
            
           
        </div>
    )
}
export default MyRecipes