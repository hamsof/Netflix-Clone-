import React, { useEffect, useState } from 'react'
import axios from './axios'
import request from "./requests"

function Banner() {

    const [movie,setMovie] = useState([])

    useEffect( () =>{
        async function fetchData(){
            const req = await axios.get(request.fetchNetflixOriginals)

            setMovie(()=>
            req.data.results 
            [Math.floor(Math.random() * req.data.results.length)]
            )
        } 
        fetchData();
    },[])


    console.log(movie)

  return (
    <div>
        {/* read documentation of optional chanining operator in notion */}
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
    </div>
  )
}

export default Banner