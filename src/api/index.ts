import axios from "axios";
import { Movie } from "../types";

const BASE_URL = "http://localhost:8080"

export const getMovies = async (): Promise<Movie[]> => {
    const response = await axios.get<Movie[]>(`${BASE_URL}/movies`);
    return response.data;
};