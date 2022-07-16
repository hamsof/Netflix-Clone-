import React, { useEffect, useState } from 'react'
import axios from './axios'
import request from "./requests"
import "./banner.css"



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
    <header className='banner_container'
    style={{
      backgroundSize:"cover",
      backgroundImage:`url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
      backgroundPosition:"center center"
    }}
    >
      <div className='banner_contents'>
        <h1 className='title'>{movie?.title || movie?.name || movie?.original_name}</h1>
        
        <div className='banner_buttons'>
          <button>Play</button>
          <button>My List</button>
        </div>

        <div className="description">
          {movie?.overview}
        </div>
      </div>
      <div class="banner--fadeBottom"></div>
        {/* read documentation of optional chanining operator in notion */}    
    </header>
  )
}

export default Banner