import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Spices from '../image/homeImage.png'
import RecipesCards from "./hooks/Userecipecards";
function HomePage() {
    const [cards, setCards] = useState()
    useEffect(() => {
        axios
            .get('http://localhost:3001/recipesPopular')
            .then(res => {
                let respo = res.data[0]
                for(let i in respo){
                    
                if(respo[i].formUser=='true'){
                    fetch(`http://localhost:3001/files/${respo[i].image}`)
                    .then(r => r.blob()) // consume as a Blob
                    .then(blob => {
                        const url = URL.createObjectURL(blob);
                        const img = document.getElementById(respo[i].id);
                        img.src = url;
                        // in case you don't need the blob anymore
                        img.onload = e => URL.revokeObjectURL(url);
                    });
                }
            }
                setCards(respo)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className='Home'>
            
            <div>
                <img src={Spices} className="img-fluid" alt="spices" id="image" />
            </div>
            <div className="Popularrecipes">
                <h2>Here are some of the favorite recipes from our users </h2>
            </div>
            <RecipesCards data={cards} />
        </div>
    )




}

export default HomePage