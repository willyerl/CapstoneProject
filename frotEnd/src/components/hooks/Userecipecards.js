import React, { useState, useEffect } from 'react'
import Recipe from './takeFullRecipe'
import ModalPage from '../modalPages'
import ModalLogin from './modalLogin'
// import AddBook from './AddBook.js'
import axios from 'axios'
import { useAuth } from '../auth.js'
import ModalAdd from './modalAdd'



function RecipesCards(res) {
    const auth = useAuth()
    const [cards, setCards] = useState([" "])
    const [mod, setMod] = useState([])
    useEffect(() => {
        setCards(res.data);
        // console.log(cards)
        // console.log(cards)
        // for(let i in cards){
        //     if(cards[i].formUser==='true'){
        //          fetch( `http://localhost:3001/files/cbimage(1).png`)
        //     .then( r => r.arrayBuffer() )
        //     .then( buffer => { // note this is already an ArrayBuffer
        //       // there is no buffer.data here
              
        //       const blob = new Blob( [ buffer ] );
        //     //   console.log(blob)
        //       const url = URL.createObjectURL( blob );
        //       console.log(url)
        //       cards[i].image =  url
        //       console.log(cards[i].image)
        //     //   var img = document.getElementById( 'img' );
        //     //   img.src = url;
        //     //   // So the Blob can be Garbage Collected
        //     //   img.onload = e => URL.revokeObjectURL( url );
        //     //   console.log(img)
        //       // ... do something else with 'buffer'
        //     } );
        //         // cards[i].image = img
        //     }
            
        // }
    })

    function Add(id, image, title) {
        // console.log(typeof (auth.user))
        setMod('')
        if (auth.user) {
            // console.log("Add when Log")
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
            // console.log('add not log')
            setMod(<ModalLogin />)
            // setMod(<p>test</p>)
            // console.log(mod)
        }
    }
    return (
        <>
            <div className='popular'>
                <div id='Card' className="row row-cols-3 row-cols-md-3 g-3 mx-5 p-4 mb-4">
                    {
                        cards ? cards.map(cards =>
                            <div  id='cards' className="card-group" key={cards.id}>
                                <div id='cardbody' className="card shadow-lg" >
                                    <img id={cards.id} src={cards.image} className="card-img-top" alt="first Recipe" />
                                    <div className="card-body ">
                                        <h5 className="card-title">{cards.title}</h5>
                                        <p>This recipe has been save by {cards.shared} users</p>
                                        <ModalPage data={cards} />
                                        <button className="btn btn-primary" variant="primary" onClick={() => { Add(cards.id, cards.image, cards.title) }}>
                                            Add this recipe
                                        </button>
                                    </div>
                                </div>
                            </div>)
                            : console.log("")
                    }
                </div>
                {mod}
            </div>
            {mod}
        </>
    )

}
export default RecipesCards