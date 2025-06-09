import { FaSearch } from 'react-icons/fa'
import Fieldset from '../Fieldset'
import InputText from '../InputText'
import styles from './MovieSection.module.css'
import Button from '../Button'
import MovieList from '../MovieList'
import useFetchMovies from '../../hooks/useFetchMovies'
import useFilterMovies from '../../hooks/useFilterMovies'

const MovieSection = () => {
  const {movies, error, isLoading} = useFetchMovies();
  const {searchTerm, setSearchTerm, handleSearch, filteredMovies} = useFilterMovies(movies);

  return (
    <main>
      <section className={styles.container}>
        <Fieldset variant='secondary'>
          <InputText value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Buscar filmes'/>
          <Button variant='icon' onClick={handleSearch}>
            <FaSearch/>
          </Button>
        </Fieldset>

        <h1 className={styles.titulo}>Em cartaz</h1>

        {isLoading && <p>Carregando filmes...</p>}
        {error && <p className={styles.erro}>{error}</p>}
        <MovieList movies={filteredMovies}/>
      </section>
    </main>
  )
}

export default MovieSection