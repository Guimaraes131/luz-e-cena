import { FaSearch } from 'react-icons/fa'
import Fieldset from '../Fieldset'
import InputText from '../InputText'
import styles from './MovieSection.module.css'
import Button from '../Button'
import MovieList from '../MovieList'
import { getMovies } from '../../api'
import type { Movie } from '../../types'
import { useEffect, useState } from 'react'

const MovieSection = () => {

  const [movies, setMovies] = useState<Movie[]>([])

  const fetchMovies = async () => {
    try {
      const movies = await getMovies();

      setMovies(movies);
    } catch (erro) {
      console.log("Não foi possível buscar os dados da API.")
    }
  }

  useEffect(() => {
    fetchMovies();
  }, [])

  return (
    <main>
      <section className={styles.container}>
        <Fieldset variant='secondary'>
          <InputText placeholder='Buscar filmes'/>
          <Button variant='icon'>
            <FaSearch/>
          </Button>
        </Fieldset>

        <h1 className={styles.titulo}>Em cartaz</h1>

        <MovieList movies={movies}/>
      </section>
    </main>
  )
}

export default MovieSection