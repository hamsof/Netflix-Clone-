import React,{useEffect,useState} from 'react'

import axios from './axios'

import "./Row.css"

function Row({title,fetchURL,isLargeRow}) {

    const [movie,setMovie] = useState([])
    const imgBaseUrl = "https://image.tmdb.org/t/p/original"

    useEffect(()=>{
        // do the stuff every time when this component Row loads

        // If we add [movies] as second argument to this fucntin
        // then fucntion will le loaded every time the movies array
        //changes

        // you will be getting double requests on reloading the page
        // its because one time page reload and one time useEffect
        // reload it 

        async function fetchData(){
            const req = await axios.get(fetchURL)
            setMovie(req.data.results)
        }
        fetchData()
    },[fetchURL])

    // we are passing this dependency so every time
    // we get a new request  we need to change that row


    //console.log(movie)

  return (
    <div>
        <h4>{title}</h4>

        <div className='movie_rows'>
            {movie.map
            (m =>
            <img 
            className={`movie_container ${isLargeRow && "movie_container_large"} `} 
            src={`${imgBaseUrl}${isLargeRow? m.poster_path:m.backdrop_path}`} 
            alt={m.name}
            key={m.id} 
            />)}
        </div>
    </div>
  )
}

export default Row