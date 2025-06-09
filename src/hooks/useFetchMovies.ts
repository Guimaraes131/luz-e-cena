import { useEffect, useState } from "react";
import { getMovies } from "../api";
import type { Movie } from "../types";

const useFetchMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const movies = await getMovies();

      setMovies(movies);
    } catch (erro) {
      setError("Erro ao buscar filmes. Tente novamente")
      console.log(erro)
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, [])

  return {movies, isLoading, error};
}

export default useFetchMovies