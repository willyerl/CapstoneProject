import React, { useState, useEffect } from 'react'
import ModalPage from '../modalNewRecipe'
import axios from 'axios'
import { useAuth } from '../auth.js'
import ModalAdd from './modalAdd'

function RecipesCards(res) {
    const auth = useAuth()
    const [cards, setCards] = useState([" "])
    const [mod, setMod] = useState([])
    useEffect(() => {
        setCards(res.data);
    })

    function Add(id, image, title) {
        setMod('')
        console.log(auth.user)
        if (auth.user) {
            axios
                .post(`http://localhost:3001/addRecipes?user=${auth.user}&title=${title}&id=${id}&image=${image}`)
                .then(res => {
                    setMod(<ModalAdd data={res.data}/>)
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            setMod(<ModalPage />)
        }
    }
    return (
        <>
            <div className='popular'>
                <div id='Card' className="row row-cols-3 row-cols-md-3 g-3 mx-5 p-4 mb-4">
                    {
                        cards ? cards.map(cards =>
                            <div key={cards.id} id='cards' className="card-group">
                                <div id='cardbody' className="card shadow-lg" >
                                    <img id='cardimage' src={cards.image} className="card-img-top" alt="first Recipe" />
                                    <div className="card-body ">
                                        <h5 className="card-title">{cards.title}</h5>
                                        <p>This recipe has been save by {cards.shared} users</p>
                                        <ModalPage data={cards.id} />
                                        <button className="btn btn-primary" variant="primary" onClick={() => {Add(cards.id, cards.image, cards.title)}}>
                                        Add this recipe
                                    </button>
                                    </div>
                                </div>
                            </div>)
                            : console.log("")
                    }
                </div>
            </div>
            {mod}
        </>
    )

}
export default RecipesCards