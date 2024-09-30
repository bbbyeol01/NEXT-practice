import styles from "../../css/home.module.css"
import Movie from "../../components/movie";
import { API_URL } from "../contants";

export const metadata = {
    title : "HOME",
}


async function getMovies() {
    const response = await fetch(API_URL);
    const json = await response.json()
    return json;
}

export default async function Page() {
    const movies = await getMovies();
    return (
            <div className={styles.container}>
                {movies.map((movie) => {
                    return (
                        <Movie 
                        title={movie.original_title} 
                        id={movie.id} 
                        poster_path={movie.poster_path}/>
                    )
                })}
            </div>
    )

}