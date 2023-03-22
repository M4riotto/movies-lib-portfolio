import {Link} from 'react-router-dom'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from 'react-icons/bs'

import MovieCard from '../components/MovieCard'
import MovieDetails from '../components/LocationMovie'
import Trailer from '../components/Trailer'

import './Movie.css'

const moviesURL = import.meta.env.VITE_API
const APIkey = import.meta.env.VITE_API_KEY


const Movie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  const getMovie = async (url) => {

    const res = await fetch(url)
    const data = await res.json()

    setMovie(data)
  }

  const formatCurrency = (number => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    })
  })

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${APIkey}&language=pt-BR`
    getMovie(movieUrl)
  },[])

  return (
    <div className="movie-page">
      {movie && <>
        <MovieCard movie={movie} showLink={false}/>
        <div><Trailer /></div><br />
        <MovieDetails />
        <hr /><br />
        <h2>Genero</h2>
        {movie.genres.map((genero) => (
              <p key={genero.name}>
                {genero.name}
              </p>
            ))} <br />
        <p className="tagline">{movie.tagline}</p><br />
        <div className="info">
          <h3>
            <BsWallet2/> Orçamento:
          </h3>
          <p>{formatCurrency(movie.budget)}</p>
        </div>
        <div className="info">
          <h3>
            <BsGraphUp/> Faturamento:
          </h3>
          <p>{formatCurrency(movie.revenue)}</p>
        </div>
        <div className="info">
          <h3>
            <BsHourglassSplit/> Duração:
          </h3>
          <p>{movie.runtime}</p> Minutos
        </div>
        <div className="info description">
          <h3>
            <BsFillFileEarmarkTextFill/> Descrição:
          </h3>
          <p>{movie.overview}</p>
        </div>
        <Link to={`/`}>Voltar</Link>
      </>
      }</div>
  )
}

export default Movie
