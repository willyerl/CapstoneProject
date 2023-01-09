import React, { useState, useEffect } from 'react'
import axios from 'axios'

function OpenImages(url) {
    const [cards, setCards] = useState([''])
        let map = []
    useEffect(() => {
        
        // const axiosData = async () => {
          axios
                .get(url)
                .then(res => {
                    let dat = res.data[0]
                    for (let i in dat) {
                        
                        if (dat[i].formUser == 'true') {
                            // console.log('test')
                            async function fetchData()  {
                            const data = fetch(`http://localhost:3001/files/cbimage(1).png`)
                                .then(r => r.arrayBuffer())
                                .then(buffer => { 
                                    const blob = new Blob([buffer]);
                                    const url =  URL.createObjectURL(blob);
                                    dat[i].image =  url
                                    map.push(dat[i])
                                    // console.log(map)
                                });
                                
                                
                            }
                            fetchData()
                        }
                        else {
                          map.push(dat)
                        }
                    }
                    
                })
                .catch(err => {
                    console.log(err)
                })
                // console.log(map)
                setCards(map)
            // }
            // axiosData()
            // console.log(cards)
    }, [])
    
    return [cards]
}
export default OpenImages